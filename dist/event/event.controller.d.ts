import AppRequest from 'src/shared/types/request.type';
import { EventDto } from './dto/event.dto';
import { EventService } from './event.service';
export declare class EventController {
    private readonly evenService;
    constructor(evenService: EventService);
    getEvents(req: AppRequest, lon: number, lat: number): Promise<import("../shared/schema/event.schema").EventDocument[]>;
    getAllEvents(req: AppRequest): Promise<{
        _id: any;
        place: string;
        imageMain: string;
        userId: string;
        displayName: string;
    }[]>;
    getEventByID(id: string): Promise<import("../shared/schema/event.schema").EventDocument>;
    createEvent(req: AppRequest, event: EventDto): Promise<import("../shared/schema/event.schema").EventDocument>;
    joinEvent(req: AppRequest, id: string): Promise<any>;
    skipEvent(req: AppRequest, id: string): Promise<any>;
}
