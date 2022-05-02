# searchPayment

支払い一覧の取得<br>

- 日、週、月、年でのフィルタリングが可能
- 満足度の範囲指定でフィルタリングが可能
- 支払い種類でフィルタリングが可能
- 日時、金額、満足度でソートが可能

```gql
query searchPayment(
  input: SearchPaymentInput,
) :PaymentPaging
```

## input

```gql
type SearchPaymentInput {
  timeRange: TimeRange;
  scoreRange: ScoreRange;
  paymentType: PaymentTypeEnum;
  searchWord: String;
  sort: SortType;
}
```

```gql
type TimeRange {
  rangeType: 'day' | 'week' | 'month' | 'year';
  criteriaDate: Date;
}

type ScoreRange: {
  max: Int;
  min: Int;
}

type SortType: 'date' | 'price' | 'score';
```

## output

```gql
type SearchPaymentOutPut {
  payments: Payment[];
}
```

```gql
type Payment {
  name: String;
  price: Int;
  score: Int;
  paymentType: PaymentTypeEnum;
  paymentDate: Date;
}

```

## logic

#### 日時の範囲指定

- 日
  - 指定された日の支払いを表示。
- 週
  - 指定された日を含む月曜日から日曜日までの支払いを表示。
- 月
  - 指定された日を含む 1 ヶ月を表示
- 年
  - 指定された日を含む 1 年を表示

#### 満足度の範囲指定

- min 以上 max 以下の score に該当する支払いを表示
- min が max を上回っていたら error を返す。

#### 支払い種類指定

- 浪費、消費、投資で絞り込み検索可能

#### ソート

- 日時、金額、満足度でソートする。
- 2 つ以上の項目でソートはできない。
