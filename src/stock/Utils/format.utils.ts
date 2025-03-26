import { Injectable } from '@nestjs/common';

@Injectable()
export class FormatUtils {
  private readonly startDate = new Date('2024-04-01');
  private readonly endDate = new Date('2025-03-31');

  dateToRowNumber(dateString: string): number | null {
    const targetDate = new Date(dateString);

    if (targetDate < this.startDate || targetDate > this.endDate) return null;

    const timeDiff = targetDate.getTime() - this.startDate.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    return dayDiff + 2;
  }
}
