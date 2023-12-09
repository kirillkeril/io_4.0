export class CreateUserDto {
  fullname: string;
  companyName: string;
  requisites: string;
  bik: string;
  paymentAccount: string;
  phone: string;
  email: string;
  role: 'provider' | 'customer';
}
