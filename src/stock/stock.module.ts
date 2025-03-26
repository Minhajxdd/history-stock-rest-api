import { Module } from '@nestjs/common';
import { StockService } from './Services/stock.service';
import { StockController } from './Controllers/stock.controller';
import { GSheetUtils } from './Utils/g-sheets.utils';
import { FormatUtils } from './Utils/format.utils';

@Module({
  controllers: [StockController],
  providers: [
    StockService,
    {
      provide: 'GSheetUtils',
      useClass: GSheetUtils,
    },
    {
      provide: 'FormatUtils',
      useClass: FormatUtils,
    },
  ],
})
export class StockModule {}
