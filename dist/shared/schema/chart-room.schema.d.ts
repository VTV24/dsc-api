import { MessageData } from './../types/message.type';
import { Document } from 'mongoose';
export declare type ChatRoomDocument = ChatRoom & Document;
export declare class ChatRoom {
    eventId: string;
    message: MessageData[];
}
export declare const ChatRoomSchema: import("mongoose").Schema<Document<ChatRoom, {}>, import("mongoose").Model<any, any>, undefined>;
