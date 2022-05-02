# signUp

ユーザ登録

```gql
mutation signUp(
  input: SignUpInput,
): boolean
```

## input

```gql
type SignUpInput {
  email: String;
  password: String;
}
```
