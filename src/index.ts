import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { HttpExceptionFilter } from './shared/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

const server = express();

export const createNestServer = async (expressInstance) => {
    const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressInstance),
    );
    app.enableCors({});
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    return app.init();
};

createNestServer(server)
    .then(() => console.log('Nest Ready'))
    .catch((err) => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);