import { Module } from '@nestjs/common';
import { StockService } from './Services/stock.service';
import { StockController } from './Controllers/stock.controller';
import { GSheetUtils } from './Utils/g-sheets.utils';

@Module({
  controllers: [StockController],
  providers: [StockService, GSheetUtils],
})
export class StockModule {}
