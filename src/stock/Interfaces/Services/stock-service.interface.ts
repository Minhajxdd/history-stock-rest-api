export interface IStockService {
  getStockPrice(date: string, symbol: string): Promise<any>;
}
