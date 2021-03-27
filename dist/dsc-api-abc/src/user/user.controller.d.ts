import AppRequest from 'src/shared/types/request.type';
import ProfileDto from './dto/profile.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    searchUser(req: AppRequest, search: string, page?: number, limit?: number): Promise<{
        limit: number;
        page: number;
        totalPage: number;
        listResult: import("../shared/schema/user.schema").UserDocument[];
    }>;
    getUsers(req: AppRequest): Promise<{
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
    updateProfile(profile: ProfileDto, req: AppRequest): Promise<import("../shared/schema/user.schema").User>;
    getAccountFirebase(req: AppRequest): Promise<import("firebase-admin").auth.UserRecord>;
    updateRange(req: AppRequest, range: number): Promise<import("../shared/schema/user.schema").UserDocument>;
}
