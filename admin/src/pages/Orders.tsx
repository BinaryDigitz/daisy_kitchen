import React from 'react'
import type { Order } from '../types'
import Title from '../components/Title'
import YearlySelect from '../components/YearlySelect'
import { Link } from 'react-router-dom'

function Orders() {
  const orders : Order[] = [
    { orderId:'1234', sender: 'Boris Ayam', status:'Cancel', email: 'email@mail.com', date:'02-30-2022', phone: '653775159', orderDetails:[
      {productName: 'Cake1', productQuantity:2, productPrice: '23,000'},
      {productName: 'Cake2', productQuantity:2, productPrice: '23,000'},
    ]},
    { orderId:'12345', sender: 'Ndoh Honour', status:'Pending', email: 'email@mail.com', date:'02-30-2023', phone: '653775159', orderDetails:[
      {productName: 'Cake1', productQuantity:2, productPrice: '23,000'},
      {productName: 'Cake2', productQuantity:2, productPrice: '23,000'},
    ]},
    { orderId:'12346', sender: 'Ndoh Germain', status:'Delivered', email: 'email@mail.com', date:'02-30-2024', phone: '653775159', orderDetails:[
      {productName: 'Cake1', productQuantity:2, productPrice: '23,000'},
      {productName: 'Cake3', productQuantity:2, productPrice: '23,000'},
    ]},
  ]
  return (
    <div className='grid place-items-center'>
      <Title  text1='' text2='ORDERS' size='heading3 text-red-900'/>
     <div className='w-full'>
      <YearlySelect />
      <table className=' w-full  lg:w-4/5 mx-auto'>
        <thead className='bg-red-50 h-10 '>
          <tr className="flex font-medium hover:bg-green-100 cursor-pointer items-center justify-between lg:px-10 p-4 bg-green-50 border border-green-100 text-green-900 text-md  text-sm md:text-[18px]">
            <td >SN</td>
            <td >Sender</td>
            <td>Status</td>
            <td>Date</td>
            <td>Phone</td>
           
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order, index) =>(
              <tr className="flex text-sm hover:bg-green-100 cursor-pointer  items-center justify-between p-4  border border-green-100 text-green-900 text-md text-center  md:text-[16px]">
                {/* <Link to={`/orders`} key={order.orderId}> */}
                <td >{ index + 1 }</td>
                <td >{ order.sender }</td>
                <td>{ order.status }</td>
                <td>{ order.date }</td>
                <td>{ order.phone }</td>
               
             {/* </Link> */}
              </tr>
            ))
          }
        </tbody>
      </table>
      
     </div>
    </div>
  )
}

export default Orders
