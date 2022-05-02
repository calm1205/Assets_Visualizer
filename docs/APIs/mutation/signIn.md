# signIn

ログイン

```gql
mutation signIn(
  input: SignInInput,
): boolean
```

## input

```gql
type SignInInput {
  email: String;
  password: String;
}
```
