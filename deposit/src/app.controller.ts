import { ScheduledDebitDto } from './app.dto';
import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('scheduled_debit')
  scheduledDebit(@Payload(ValidationPipe) data: ScheduledDebitDto) {
    return this.appService.scheduledDebit(data);
  }

  // @MessagePattern('get_user')
  // handleGetUser(@Payload('userId', ParseIntPipe) userId: number) {
  //   return this.appService.getUser(userId);
  // }
}