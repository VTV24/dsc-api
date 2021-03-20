import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsDateString, IsEnum, IsString } from 'class-validator';

class ProfileDto {
    @ApiProperty({
        description: '"dd-mm-yyyy"',
    })
    @IsDateString()
    birthDate: Date;

    @ApiProperty()
    @IsString()
    job: string;

    @ApiProperty({
        description: '"male" or "female"',
    })
    @IsEnum(['male', 'female'])
    gender: string;

    @ApiProperty()
    @Allow()
    bio: string;
}

export default ProfileDto;
