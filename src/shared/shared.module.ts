import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import { User, UserSchema } from 'src/shared/schema/user.schema';
import { Event, EventSchema } from 'src/shared/schema/event.schema';

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Event.name, schema: EventSchema },
        ]),
    ],
    exports: [MongooseModule],
})
export class SharedModule {}
