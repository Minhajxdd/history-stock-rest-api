import { Injectable } from '@nestjs/common';
import configuration from 'src/config/configuration';
import { IFormatUtils } from '../Interfaces/Utils/format-utils-interface';

@Injectable()
export class FormatUtils implements IFormatUtils {
  private readonly startDate = new Date(configuration().date.start_date);
  private readonly endDate = new Date(configuration().date.end_date);

  dateToRowNumber(dateString: string): number | null {
    const targetDate = new Date(dateString);

    if (targetDate < this.startDate || targetDate > this.endDate) return null;

    const timeDiff = targetDate.getTime() - this.startDate.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    return dayDiff + 2;
  }
}
