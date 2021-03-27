import { EventDto } from './dto/event.dto';
import { EventDocument } from 'src/shared/schema/event.schema';
import { UserDocument } from 'src/shared/schema/user.schema';
import { Model } from 'mongoose';
export declare class EventService {
    private eventModel;
    private userModel;
    constructor(eventModel: Model<EventDocument>, userModel: Model<UserDocument>);
    addEvent(event: EventDto, userId: string): Promise<EventDocument>;
    getEventById(eventId: string): Promise<EventDocument>;
    getAllEvents(userId: string): Promise<{
        _id: any;
        place: string;
        imageMain: string;
        userId: string;
        displayName: string;
    }[]>;
    getEventsInRange(userId: string, lon: number, lat: number): Promise<EventDocument[]>;
    joinEvent(userId: string, eventId: string): Promise<any>;
    skipEvent(userId: string, eventId: string): Promise<any>;
}
