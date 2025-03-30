
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