export class ResetPasswordDto {

    private newPassword: string;
    private confirmPassword: string;
    private tokenPassword: string;


  constructor(newPassword: string, confirmPassword: string, tokenPassword: string) {
    this.newPassword = newPassword
    this.confirmPassword = confirmPassword
    this.tokenPassword = tokenPassword
  }

}
