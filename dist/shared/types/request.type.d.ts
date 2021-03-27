import { Request } from 'express';
import { auth } from 'firebase-admin';
declare type AppRequest = Request & {
    token: auth.DecodedIdToken;
};
export default AppRequest;
