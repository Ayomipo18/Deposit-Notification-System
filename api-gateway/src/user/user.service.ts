import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly userClient: ClientKafka
  ) {}

  createUser(createUserDto: CreateUserDto) {
    this.userClient.emit('create_user', JSON.stringify(createUserDto));
  }
}