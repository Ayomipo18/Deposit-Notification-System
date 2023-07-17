import { Injectable } from '@nestjs/common';
import { User } from './app.entity';
import { usersDb } from './app.db';

@Injectable()
export class UsersRepository {
  private readonly users: User[] = usersDb;

  save(user: User) {
    return
  }

  findOne(id: number) {
    return this.users.find((u) => u.id === id) || null;
  }
}