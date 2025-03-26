export interface ProductTypes {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string[];
    category: string;
    score: number;
}
export interface OrderFormType {
    id?:number;
    productName: string;
    unitPrice: number;
    numberOfGuest: number;
    deliveryFee?: number;
    location?: string;
    colection?: string;
  }