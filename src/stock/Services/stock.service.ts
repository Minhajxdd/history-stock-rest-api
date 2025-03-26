import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import configuration from 'src/config/configuration';
import { IFormatUtils } from '../Interfaces/Utils/format-utils-interface';
import { IGSheetUtils } from '../Interfaces/Utils/g-sheets-utils.interface';
import { IStockService } from '../Interfaces/Services/stock-service.interface';

@Injectable()
export class StockService implements IStockService {
  constructor(
    @Inject('GSheetUtils')
    private readonly _gSheetUtils: IGSheetUtils,
    @Inject('FormatUtils')
    private readonly _formatUtils: IFormatUtils,
  ) {}

  async getStockPrice(date: string, symbol: string): Promise<any> {
    const headers = await this._gSheetUtils.getHeaders();

    const columnIndex = headers.indexOf(symbol);

    if (columnIndex === -1) {
      throw new BadRequestException('Symbol not found');
    }

    const rowNumber = this._formatUtils.dateToRowNumber(date);

    if (!rowNumber) {
      throw new BadRequestException(
        `Date out of range (${configuration().date.start_date} - ${configuration().date.end_date})`,
      );
    }

    const response = await this._gSheetUtils.getData(columnIndex, rowNumber);

    if (!response.values || !response.values[0]) {
      throw new BadRequestException('Price data not found');
    }

    const data = {
      symbol,
      date,
      price: response.values[0][0],
    };

    return {
      status: 'success',
      message: 'successfully fetched data',
      data,
    };
  }
}
