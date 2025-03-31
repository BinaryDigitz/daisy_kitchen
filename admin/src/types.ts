
export interface ProductType{
  name: string,
  _id?:string,
  category:string,
  rating:string,
  price:string
  description:string,
  bestseller?:boolean,
  alergies?: string
  images: string[]
}
export interface OrderDetail{
  productName:string,
  productQuantity: number,
  productPrice: string

}
export interface Order{
orderId:string;
sender: string;
email:string;
date:string;
status: string;
phone:string;
orderDetails: OrderDetail[]
}