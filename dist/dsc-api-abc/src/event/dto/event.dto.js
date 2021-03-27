"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const location_dto_1 = require("./location.dto");
class EventDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.ValidateNested({
        each: true,
    }),
    class_transformer_1.Type(() => location_dto_1.LocationDto),
    __metadata("design:type", location_dto_1.LocationDto)
], EventDto.prototype, "location", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: 10,
    }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], EventDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], EventDto.prototype, "time", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.Allow(),
    __metadata("design:type", String)
], EventDto.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EventDto.prototype, "imageMain", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.Allow(),
    __metadata("design:type", Array)
], EventDto.prototype, "images", void 0);
exports.EventDto = EventDto;
//# sourceMappingURL=event.dto.js.map