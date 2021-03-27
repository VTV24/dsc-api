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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_schema_1 = require("../shared/schema/user.schema");
const common_1 = require("@nestjs/common");
const nestjs_firebase_admin_1 = require("@aginix/nestjs-firebase-admin");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_schema_1 = require("../shared/schema/event.schema");
let UserService = class UserService {
    constructor(firebaseAuth, userModel, eventModel) {
        this.firebaseAuth = firebaseAuth;
        this.userModel = userModel;
        this.eventModel = eventModel;
    }
    async getToken() {
        return this.firebaseAuth.createCustomToken('HauNsEhzahRvkn9lxg7bwlkAmUf1');
    }
    async getProfile(userId) {
        const profile = await this.userModel.findById(userId);
        const accountInfo = await this.firebaseAuth.getUser(userId);
        if (profile) {
            return {
                uid: profile._id,
                background: profile.background,
                bio: profile.bio,
                birthDate: profile.birthDate,
                eventsHost: profile.eventsHost,
                eventsJoin: profile.eventsJoin,
                eventsSkip: profile.eventsSkip,
                gender: profile.gender,
                job: profile.job,
                range: profile.range,
                displayName: accountInfo.displayName,
                email: accountInfo.email,
                photoURL: accountInfo.photoURL,
            };
        }
        else
            throw new common_1.NotFoundException();
    }
    async getFirebaseAccountInfo(userId) {
        const accountInfo = await this.firebaseAuth.getUser(userId);
        if (accountInfo)
            return accountInfo;
        else
            throw new common_1.NotFoundException();
    }
    async updateProfile(profile, userId) {
        const usr = await this.userModel.findById(userId);
        if (profile.displayName) {
            this.firebaseAuth.updateUser(userId, {
                displayName: profile.displayName,
            });
        }
        else {
            profile.displayName = (await this.firebaseAuth.auth.getUser(userId)).displayName;
        }
        if (usr) {
            return usr.update(Object.assign({}, profile));
        }
        else {
            const userProfile = new this.userModel(Object.assign(Object.assign({}, profile), { _id: userId }));
            return userProfile.save();
        }
    }
    async search(userId, search, page, limit) {
        const [totalPage, listResult] = await Promise.all([
            this.userModel
                .find({
                displayName: {
                    $regex: search,
                },
            })
                .count(),
            this.userModel
                .find({
                displayName: {
                    $regex: search,
                },
                _id: {
                    $not: {
                        $regex: userId,
                    },
                },
            })
                .sort({
                displayName: 1,
            })
                .skip(page > 0 ? (page - 1) * limit : 0)
                .limit(limit)
                .select('_id displayName'),
        ]);
        return {
            limit,
            page,
            totalPage: Math.ceil((totalPage - 1) / limit),
            listResult,
        };
    }
    async getEventMath(userId) {
        const eventsJoin = (await this.userModel.findById(userId)).eventsJoin.map((event) => event.eventId);
        return this.eventModel
            .find({
            _id: {
                $in: eventsJoin,
            },
        })
            .select('_id place imageMain host');
    }
    async updateRange(userId, range) {
        return this.userModel.findByIdAndUpdate(userId, {
            range: range,
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel(user_schema_1.User.name)),
    __param(2, mongoose_1.InjectModel(event_schema_1.Event.name)),
    __metadata("design:paramtypes", [nestjs_firebase_admin_1.FirebaseAuthenticationService,
        mongoose_2.Model,
        mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map