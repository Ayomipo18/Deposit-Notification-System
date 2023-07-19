import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ScheduledDebitDto } from './app.dto';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserDto } from './userClient/user.dto';
import { DebitWalletDto } from './walletClient/wallet.dto';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly userClient: ClientKafka,
    @Inject('WALLET_MICROSERVICE') private readonly walletClient: ClientKafka
  ) {}

  scheduledDebit(scheduledDebitDto: ScheduledDebitDto) {
    const { userId, amount } = scheduledDebitDto;
    let user: GetUserDto;
    let debitWalletResponse: DebitWalletDto

    return this.userClient.send('get_user', JSON.stringify({ userId }))

    // this.walletClient
    //   .send('debit', JSON.stringify({ userId, amount }))
    //   .subscribe((walletResponse: DebitWalletDto) => {
    //     walletResponse = debitWalletResponse
    //   })
  }

  onModuleInit() {
    this.userClient.subscribeToResponseOf('get_user');
  }
}