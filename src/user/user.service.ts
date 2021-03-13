import { Injectable } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';

@Injectable()
export class UserService {
  constructor(private firebaseAuth: FirebaseAuthenticationService) {}

  async getUsers() {
    return this.firebaseAuth.listUsers();
  }
}
