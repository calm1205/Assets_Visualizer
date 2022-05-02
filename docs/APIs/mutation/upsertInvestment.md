# upsertInvestment

投資・貯金の登録/更新

```gql
mutation upsertInvestment(
  input: UpsertInvestmentInput,
): Investment
```

## input

```gql
type UpsertInvestmentInput {
  name: String;
  price: Int;
  paymentType: PaymentTypeEnum;
  annualInterest: Float;
}
```

## output

```gql
type FixCost {
  name: String;
  price: Int;
  paymentType: PaymentTypeEnum;
  annualInterest: Float;
}
```
