import { User, UserDocument } from '../shared/schema/user.schema';
import { Injectable, NotFoundException } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import ProfileDto from './dto/profile.dto';

@Injectable()
export class UserService {
    constructor(
        private firebaseAuth: FirebaseAuthenticationService,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async getProfile(userId: string) {
        const profile = await this.userModel.findById(userId);
        if (profile) return profile;
        else throw new NotFoundException();
    }

    async getFirebaseAccountInfo(userId: string) {
        const accountInfo = await this.firebaseAuth.getUser(userId);
        if (accountInfo) return accountInfo;
        else throw new NotFoundException();
    }

    async updateProfile(profile: ProfileDto, userId: string): Promise<User> {
        const usr = await this.userModel.findById(userId);
        // exit user => update
        if (usr) {
            return await usr.update({
                ...profile,
            });
        } else {
            // add user
            const userProfile = new this.userModel({
                ...profile,
                _id: userId,
            });
            return userProfile.save();
        }
    }
}
