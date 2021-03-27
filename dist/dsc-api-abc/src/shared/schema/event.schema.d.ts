import { Document } from 'mongoose';
export declare type EventDocument = Event & Document;
export declare class Event {
    location: {
        coordinates: number[];
        type: string;
    };
    place?: string;
    time: Date;
    timeCreate: Date;
    isCompleted?: boolean;
    participants?: [{
        userId: string;
        time: Date;
    }];
    limit: number;
    count?: number;
    host: {
        userId: string;
        displayName: string;
    };
    description?: string;
    imageMain: string;
    images?: [string];
    chatRoomId?: string;
}
export declare const EventSchema: import("mongoose").Schema<Document<Event, {}>, import("mongoose").Model<any, any>, undefined>;
