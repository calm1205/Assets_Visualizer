# upsertPeriodecPayment

固定費の登録/更新

```gql
mutation upsertPeriodecPayment(
  input: UpsertPeriodecPaymentInput,
): PeriodecPayment
```

## input

```gql
type UpsertPeriodecPaymentInput {
  name: String;
  price: Int;
  paymentType: PaymentTypeEnum;
  cycle: PaymentPeriodEnum;
}
```

## output

```gql
type PeriodecPayment {
  name: String;
  price: Int;
  paymentType: PaymentTypeEnum;
  cycle: PaymentPeriodEnum;
}
```
