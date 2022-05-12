# upsertPayment

支払い記帳/更新

```gql
mutation upsertPayment(
  input: UpsertPaymentInput,
): Payment
```

## input

```gql
type UpsertPaymentInput {
  name: String;
  price: Int;
  satisfaction: Int;
  paymentType: PaymentTypeEnum;
  paymentDate: Date;
}
```
