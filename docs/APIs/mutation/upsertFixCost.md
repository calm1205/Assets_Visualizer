# upsertFixCost

固定費の登録/更新

```gql
mutation upsertFixCost(
  input: UpsertFixCostInput,
): FixCost
```

## input

```gql
type UpsertFixCostInput {
  name: String;
  price: Int;
  paymentType: PaymentTypeEnum;
  cycle: PaymentCycleEnum;
}
```

## output

```gql
type FixCost {
  name: String;
  price: Int;
  paymentType: PaymentTypeEnum;
  cycle: PaymentCycleEnum;
}
```
