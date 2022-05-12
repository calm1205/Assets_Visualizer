/**
 * 定期支払の年利
 */
export class AnnualInterest {
  static MIN = 0.0;
  static MAX = 100.0;
  public readonly value: number;

  constructor(input: number) {
    if (this._valid(input)) this.value = input;
  }

  private _valid(value: number) {
    this._min_valid(value);
    this._max_valid(value);
    return true;
  }

  private _min_valid(value: number) {
    if (value < AnnualInterest.MIN)
      throw new Error('年利は0%以上である必要があります。');
  }

  private _max_valid(value: number) {
    if (value > AnnualInterest.MAX)
      throw new Error('年利は100%以下である必要があります。');
  }
}
