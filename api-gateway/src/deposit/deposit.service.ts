import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { ScheduledDebitDto } from '../dto/deposit.dto';

@Injectable()
export class DepositService implements OnModuleInit {
  constructor(
    @Inject('DEPOSIT_MICROSERVICE') private readonly depositClient: ClientKafka
  ) {}

  scheduledDebit(scheduledDebitDto: ScheduledDebitDto) {
    return this.depositClient.send('scheduled_debit', JSON.stringify(scheduledDebitDto))
  }

  onModuleInit() {
    this.depositClient.subscribeToResponseOf('scheduled_debit');
  }
}