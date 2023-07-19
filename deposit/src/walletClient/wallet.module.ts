import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
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
  ]
})
export class WalletModule {}