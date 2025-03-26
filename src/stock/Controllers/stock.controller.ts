import { Controller, Get, Inject, Query, ValidationPipe } from '@nestjs/common';
import { getStockPriceDto } from '../Dto/get-stock-price.dto';
import { IStockService } from '../Interfaces/Services/stock-service.interface';

@Controller('api')
export class StockController {
  constructor(
    @Inject('StockService')
    private readonly _stockService: IStockService,
  ) {}

  @Get(`stock-price`)
  getStockPrice(
    @Query(new ValidationPipe({ transform: true })) query: getStockPriceDto,
  ) {
    const { date, symbol } = query;

    return this._stockService.getStockPrice(date, symbol);
  }
}
