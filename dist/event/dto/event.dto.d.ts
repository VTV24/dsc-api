import { LocationDto } from './location.dto';
export declare class EventDto {
    location: LocationDto;
    limit: number;
    time: Date;
    description: string;
    imageMain: string;
    images: [string];
}
