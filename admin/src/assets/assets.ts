import type { Order } from '../types'

import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

// IMAGES
import angelina from './anniversary/Angelina spring.jpg'
import forever from './anniversary/His for ever.jpg'
import gold from './anniversary/Love is gold.jpg'
import prince from './anniversary/Prince charmx.jpg'

export const messages =[
    {messageId: '1234', sender: 'Ndoh Boris', subject: 'Subject is key', phone:'653775159', message:' lorem hey messages are always good to be  the hero of everything, whatsup with everything ', email: 'bo4i@gmil.com', Date:'12-26-2024'},
    {messageId: '1234', sender: 'Harmony Akwika', subject: 'Subject is key', phone:'653775159', message:' lorem hey messages are always good to be  the hero of everything, whatsup with everything ', email: 'bo4i@gmil.com', Date:'12-26-2024'},
    {messageId: '1234', sender: 'Honour Ndoh', subject: 'Subject is key', phone:'653775159', message:' lorem hey messages are always good to be  the hero of everything, whatsup with everything ', email: 'bo4i@gmil.com', Date:'12-26-2024'},
]
export const assets = {
    
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const myProducts = [
    { name:'Bread', description: 'This is a nice bread', category: 'Flour', score:'4.5', _id: '1244', images:[prince]},
    { name:'Albert', description: 'This is a nice bread', category: 'Flour', score:'4.5', _id: '1344', images:[angelina]},
    { name:'John', description: 'This is a nice bread', category: 'Flour', score:'4.5', _id: '1234', images:[gold]},
    { name:'Magarita', description: 'This is a nice bread', category: 'Flour', score:'4.5', _id: '123445', images:[forever]},
    { name:'Greek delight', description: 'This is a nice bread', category: 'Flour', score:'4.5', _id: '1234456', images:[]},
  ]
  
  export const orders: Order[] = [
    {
      orderId: "1234",
      sender: "Boris Ayam",
      status: "Cancel",
      email: "email@mail.com",
      date: "02-30-2022",
      phone: "653775159",
      orderDetails: [
        { productName: "Cake1", productQuantity: 2, productPrice: "21000" },
        { productName: "Cake2", productQuantity: 2, productPrice: "23600" },
      ],
    },
    {
      orderId: "12345",
      sender: "Ndoh Honour",
      status: "Pending",
      email: "email@mail.com",
      date: "02-30-2023",
      phone: "653775159",
      orderDetails: [
        { productName: "Cake1", productQuantity: 2, productPrice: "53000" },
        { productName: "Cake2", productQuantity: 2, productPrice: "43000" },
      ],
    },
    {
      orderId: "12346",
      sender: "Ndoh Germain",
      status: "Delivered",
      email: "email@mail.com",
      date: "02-30-2024",
      phone: "653775159",
      orderDetails: [
        { productName: "Cake1", productQuantity: 2, productPrice: "23000" },
        { productName: "Cake3", productQuantity: 2, productPrice: "234000" },
      ],
    },
  ];