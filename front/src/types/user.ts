export interface User {
  _id: string;
  fullname: string;
  companyName: string;
  requisites: string;
  bik: string;
  paymentAccount: string;
  phone: string;
  email: string;
  role: "provider" | "customer";
}