import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema({
    versionKey: false,
})
export class Event {
    @Prop()
    place: string;

    @Prop()
    time: Date;

    @Prop()
    isCompleted: boolean;

    @Prop()
    members: [{ userId: string; time: Date }];

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop()
    chatRoomId: string;

    @Prop()
    timeCreate: Date;

    @Prop()
    host: string;

    @Prop()
    maxMembers: number;
}
export const EventSchema = SchemaFactory.createForClass(Event);

//TODO check room id
EventSchema.pre('save', async function (next) {
    try {
        next();
    } catch (err) {
        next(err);
    }
});
