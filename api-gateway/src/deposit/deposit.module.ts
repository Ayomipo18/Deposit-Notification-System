import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DepositController } from './deposit.controller';
import { DepositService } from './deposit.service';

@Module({
  imports: [
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
  providers: [DepositService],
  controllers: [DepositController],
})
export class DepositModule {}