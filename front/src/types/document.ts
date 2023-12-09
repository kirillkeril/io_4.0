export interface Document {
  number: string;
  startDate: string;
  subject?: string;
  place?: string;
  ikz?: string; // Уникальный код закупки
  sum: number;
  prepaidExpense?: number;
  financeSource: string;
  nds: boolean;
  address: string;
  deliveryTime: string;
} 

export interface Spec {
  name: string;
  okpd2: string;
  price: number;
  count: number;
  hds: number;
  sum: number;
  status: string;
  date: string;
}
