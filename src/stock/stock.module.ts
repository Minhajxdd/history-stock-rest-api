import { Module } from '@nestjs/common';
import { StockService } from './Services/stock.service';
import { StockController } from './Controllers/stock.controller';

@Module({
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
