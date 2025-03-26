import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { StockService } from '../Services/stock.service';
import { getStockPriceDto } from '../Dto/get-stock-price.dto';

@Controller('api')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  // /api/stock-price?symbol={symbol }&date={YYYY-MM-DD}

  @Get(`stock-price`)
  getStockPrice(
    @Query(new ValidationPipe({ transform: true })) query: getStockPriceDto,
  ) {
    return query;
  }
}
