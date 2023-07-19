import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ScheduledDebitDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}