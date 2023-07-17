import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { LoginUserDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka
  ) {}

  loginUser(loginUserDto: LoginUserDto) {
    this.authClient.emit('login_user', JSON.stringify(loginUserDto));
  }
}