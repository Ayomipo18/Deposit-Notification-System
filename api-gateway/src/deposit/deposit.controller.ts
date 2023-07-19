import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { DepositService } from './deposit.service';
import { ScheduledDebitDto } from 'src/dto/deposit.dto';

@Controller('deposit')
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

  @Post('scheduled/debit')
  scheduledDebit(@Body(ValidationPipe) scheduledDebitDto: ScheduledDebitDto) {
    return this.depositService.scheduledDebit(scheduledDebitDto);
  }
}