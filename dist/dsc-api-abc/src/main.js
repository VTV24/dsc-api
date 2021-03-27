"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_filter_1 = require("./shared/http-exception.filter");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({});
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    const config = new swagger_1.DocumentBuilder().setTitle('DSC API').setVersion('1.0').addBearerAuth().build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/', app, document);
    await app.listen(process.env.PORT || 8000);
}
bootstrap();
//# sourceMappingURL=main.js.map