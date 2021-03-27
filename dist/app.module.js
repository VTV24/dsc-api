"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const auth_middleware_1 = require("./shared/auth.middleware");
const shared_module_1 = require("./shared/shared.module");
const common_1 = require("@nestjs/common");
const nestjs_firebase_admin_1 = require("@aginix/nestjs-firebase-admin");
const user_module_1 = require("./user/user.module");
const admin = require("firebase-admin");
const firebase_1 = require("./shared/config/firebase");
const mongoose_1 = require("@nestjs/mongoose");
const mongodb_1 = require("./shared/config/mongodb");
const event_module_1 = require("./event/event.module");
const chat_module_1 = require("./chat/chat.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({
            path: '*',
            method: common_1.RequestMethod.ALL,
        });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            shared_module_1.SharedModule,
            nestjs_firebase_admin_1.FirebaseAdminModule.forRoot({
                credential: admin.credential.cert(firebase_1.default),
            }),
            mongoose_1.MongooseModule.forRoot(mongodb_1.MONGO_URL),
            event_module_1.EventModule,
            chat_module_1.ChatModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map