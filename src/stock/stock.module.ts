import { Module } from '@nestjs/common';
import { StockService } from './Services/stock.service';
import { StockController } from './Controllers/stock.controller';
import { GSheetUtils } from './Utils/g-sheets.utils';
import { FormatUtils } from './Utils/format.utils';

@Module({
  controllers: [StockController],
  providers: [StockService, GSheetUtils, FormatUtils],
})
export class StockModule {}
