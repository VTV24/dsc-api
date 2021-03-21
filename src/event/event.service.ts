import { Event, EventDocument } from 'src/shared/schema/event.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EventService {
    constructor(
        @InjectModel(Event.name) private userModel: Model<EventDocument>,
    ) {}
}
