import { IsNotEmpty, IsString } from 'class-validator';

export class getStockPriceDto {
  @IsNotEmpty()
  @IsString()
  symbol: string;

  @IsNotEmpty()
  @IsString()
  date: string;
}
