import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import { User, UserSchema } from 'src/schema/user.schema';

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    exports: [MongooseModule],
})
export class SharedModule {}
