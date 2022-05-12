export class User {
  constructor(
    private id: string,
    private email: string,
    private password: string,
  ) {}

  isMine(userId: string) {
    return userId === this.id;
  }
}
