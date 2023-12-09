export class CreateUserDto {
  fullname: string;
  companyName: string;
  requisites: string;
  bik: string;
  paymentAccount: string;
  phone: string;
  email: string;
  role: "provider" | "customer";
}

const a = {
  "fullname": "Иванов Иван",
  "companyName": "ООО Иваново",
  "requisites": "Иванов реквизиты",
  "bik": "бик",
  "paymentAccount": "платежка",
  "phone": "89999999999",
  "email": "example@mail.ru",
  "role": "provider"
}