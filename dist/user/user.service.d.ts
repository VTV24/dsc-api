import { User, UserDocument } from '../shared/schema/user.schema';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';
import { Model } from 'mongoose';
import ProfileDto from './dto/profile.dto';
import { EventDocument } from 'src/shared/schema/event.schema';
export declare class UserService {
    private firebaseAuth;
    private userModel;
    private eventModel;
    constructor(firebaseAuth: FirebaseAuthenticationService, userModel: Model<UserDocument>, eventModel: Model<EventDocument>);
    getToken(): Promise<string>;
    getProfile(userId: string): Promise<{
        uid: any;
        background: string;
        bio: string;
        birthDate: Date;
        eventsHost: [{
            eventId: string;
            timeCreate: Date;
        }];
        eventsJoin: [{
            eventId: string;
            timeJoin: Date;
        }];
        eventsSkip: [{
            eventId: string;
            timeSkip: Date;
        }];
        gender: string;
        job: string;
        range: number;
        displayName: string;
        email: string;
        photoURL: string;
    }>;
    getFirebaseAccountInfo(userId: string): Promise<import("firebase-admin").auth.UserRecord>;
    updateProfile(profile: ProfileDto, userId: string): Promise<User>;
    search(userId: string, search: string, page: number, limit: number): Promise<{
        limit: number;
        page: number;
        totalPage: number;
        listResult: UserDocument[];
    }>;
    getEventMath(userId: string): Promise<EventDocument[]>;
    updateRange(userId: string, range: number): Promise<UserDocument>;
}
