import { Module } from '@nestjs/common';
import { StockService } from './stock/stock.service';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [StockModule],
  controllers: [],
  providers: [StockService],
})
export class AppModule {}
