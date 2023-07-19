import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserModule } from './userClient/user.module';
import { WalletModule } from './walletClient/wallet.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'user',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'user-consumer',
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'WALLET_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'wallet',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'wallet-consumer',
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'DEPOSIT_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'deposit',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'deposit-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}