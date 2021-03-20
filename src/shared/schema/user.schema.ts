import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
    versionKey: false,
})
export class User {
    @Prop()
    _id: string; //UID

    @Prop()
    birthDate: Date;

    @Prop()
    job: string;

    @Prop()
    gender: string;

    @Prop()
    bio: string;

    @Prop()
    eventsJoin: [{ eventId: string; timeJoin: Date }];

    @Prop()
    eventsHost: [{ eventId: string; timeCreate: Date }];
}
export const UserSchema = SchemaFactory.createForClass(User);
