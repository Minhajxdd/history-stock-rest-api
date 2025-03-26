import { BadRequestException, Injectable } from '@nestjs/common';
import { GSheetUtils } from '../Utils/g-sheets.utils';
import { FormatUtils } from '../Utils/format.utils';
import configuration from 'src/config/configuration';

@Injectable()
export class StockService {
  constructor(
    private readonly _gSheetUtils: GSheetUtils,
    private readonly _formatUtils: FormatUtils,
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
