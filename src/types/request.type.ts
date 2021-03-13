import { Request } from 'express';

type AppRequest = Request & {
    user: any;
};

export default AppRequest;
