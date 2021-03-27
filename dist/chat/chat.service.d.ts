import { Model } from 'mongoose';
import { ChatRoomDocument } from 'src/shared/schema/chart-room.schema';
import { MessageData } from 'src/shared/types/message.type';
export declare class ChatService {
    private chatroomModel;
    constructor(chatroomModel: Model<ChatRoomDocument>);
    createChatRoom(eventId: string): Promise<ChatRoomDocument>;
    sendMessage(chatRoomId: string, userId: string, userName: string, content: string): Promise<void>;
    pullMessages(chatRoomId: string): Promise<MessageData[]>;
}
