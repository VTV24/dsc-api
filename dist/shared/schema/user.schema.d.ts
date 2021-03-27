import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    _id: string;
    displayName: string;
    birthDate: Date;
    job: string;
    gender: string;
    bio: string;
    background: string;
    eventsJoin: [{
        eventId: string;
        timeJoin: Date;
    }];
    eventsSkip: [{
        eventId: string;
        timeSkip: Date;
    }];
    eventsHost: [{
        eventId: string;
        timeCreate: Date;
    }];
    range: number;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, {}>, import("mongoose").Model<any, any>, undefined>;
