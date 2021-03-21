import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema({
    versionKey: false,
    autoIndex: true,
})
export class Event {
    @Prop({
        required: true,
        type: {
            location: {
                type: String,
                enum: ['Point'],
                default: 'Point',
            },
            coordinates: {
                type: [Number],
                default: [0, 0],
            },
        },
    })
    place: {
        type: string;
        coordinates: [number];
    };

    @Prop()
    time: Date;

    @Prop()
    timeCreate: Date;

    @Prop()
    isCompleted: boolean;

    @Prop()
    participants: [{ userId: string; time: Date }];

    @Prop()
    limit: number;

    @Prop()
    host: string; //user id

    @Prop()
    description: string;

    @Prop()
    imageMain: string;

    @Prop()
    images: [string];

    @Prop()
    chatRoomId: string;
}
export const EventSchema = SchemaFactory.createForClass(Event);

//create index location
EventSchema.index({ location: '2dsphere' });

//TODO check room id
EventSchema.pre('save', async function (next) {
    try {
        next();
    } catch (err) {
        next(err);
    }
});
