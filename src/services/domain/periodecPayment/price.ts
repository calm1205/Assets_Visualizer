/**
 * 定期支払いの金額
 */
export class Price {
  static MIN = 1;
  static MAX = 1_000_000_000;
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
    if (value < Price.MIN) throw new Error('金額は1以上である必要があります。');
  }

  private _max_valid(value: number) {
    if (value > Price.MAX)
      throw new Error('金額は10億以下である必要があります。');
  }
}
