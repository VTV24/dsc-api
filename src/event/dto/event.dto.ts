import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Allow, IsDate, IsNumber, ValidateNested } from 'class-validator';
import { LocationDto } from './location.dto';

export class EventDto {
    @ApiProperty()
    @ValidateNested({
        each: true,
    })
    @Type(() => LocationDto)
    place: LocationDto;

    @ApiProperty({
        default: 10,
    })
    @IsNumber()
    limit: number;

    @ApiProperty()
    @IsDate()
    time: Date;

    @ApiProperty({
        required: false,
    })
    @Allow()
    description: string;

    @ApiProperty()
    imageMain: string; //url image

    @ApiProperty()
    @ValidateNested()
    images: string[];
}
