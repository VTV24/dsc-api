import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Allow, ValidateNested } from 'class-validator';
import { LocationDto } from './location.dto';

export class EventDto {
    @ApiProperty()
    @ValidateNested({
        each: true,
    })
    @Type(() => LocationDto)
    location: LocationDto;

    @ApiProperty({
        default: 10,
    })
    @Allow()
    limit: number;

    @ApiProperty()
    @Allow()
    time: Date;

    @ApiProperty({
        required: false,
    })
    @Allow()
    description: string;

    @ApiProperty()
    @Allow()
    imageMain: string; //url image

    @ApiProperty()
    @Allow()
    images: [string];
}
