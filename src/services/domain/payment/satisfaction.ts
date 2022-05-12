/**
 * 支払いの満足度
 */
export class Satisfaction {
  static MIN = 1;
  static MAX = 100;
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
    if (value < Satisfaction.MIN)
      throw new Error('満足度は1以上である必要があります。');
  }

  private _max_valid(value: number) {
    if (value > Satisfaction.MAX)
      throw new Error('満足度は100以下である必要があります。');
  }
}
