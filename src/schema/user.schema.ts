import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
    versionKey: false,
})
export class User {
    @Prop({
        required: true,
    })
    _id: string; //UID

    @Prop({
        required: true,
        type: Date,
    })
    birthDate: Date;

    @Prop({
        required: true,
        type: String,
    })
    job: string;

    @Prop({
        required: true,
        type: String,
    })
    gender: string;

    @Prop({
        type: String,
    })
    bio: string;

    @Prop({
        type: [{ eventId: String, timeJoin: Date }],
    })
    eventsJoin: [{ eventId: string; timeJoin: Date }];

    @Prop({
        type: [{ eventId: String, timeJoin: Date }],
    })
    eventsHost: [{ eventId: string; timeCreate: Date }];
}

export const UserSchema = SchemaFactory.createForClass(User);
