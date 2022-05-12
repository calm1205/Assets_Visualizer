/**
 * 定期支払いのタイトル
 */
export class Title {
  static MAX = 40;
  public readonly value: string;

  constructor(input: string) {
    if (this._length_valid(input)) this.value = input;
  }

  private _length_valid(value: string) {
    if (value.length > Title.MAX)
      throw new Error('支払いタイトルは40文字以下である必要があります。');
    return true;
  }
}
