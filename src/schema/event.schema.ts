import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema({
    versionKey: false,
})
export class Event {
    @Prop({
        required: true,
        type: String,
    })
    place: string;

    @Prop({
        required: true,
        type: String,
    })
    time: Date;

    @Prop({
        required: true,
        default: false,
        type: Boolean,
    })
    isCompleted: boolean;

    @Prop({
        type: [{ userId: String, time: Date }],
    })
    members: [{ userId: string; time: Date }];

    @Prop({
        required: false,
        type: String,
        default: '',
    })
    description: string;

    @Prop({
        type: String,
        required: true,
    })
    image: string;

    @Prop({
        type: String,
        required: true,
    })
    chatRoomId: string;
}
