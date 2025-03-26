import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { StockService } from '../Services/stock.service';
import { getStockPriceDto } from '../Dto/get-stock-price.dto';

@Controller('api')
export class StockController {
  constructor(private readonly _stockService: StockService) {}

  @Get(`stock-price`)
  getStockPrice(
    @Query(new ValidationPipe({ transform: true })) query: getStockPriceDto,
  ) {
    const { date, symbol } = query;

    return this._stockService.getStockPrice(date, symbol);
  }
}
