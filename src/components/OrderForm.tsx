import { useEffect, useState } from "react"
interface OrderFormType {
  productName: string;
  unitPrice: number;
  numberOfGuest: number;
  deliveryFee?: number;
  location?: string;
  colection?: string;
}
interface Props{
  onSubmit: (item:OrderFormType) => void;
}
const OrderForm = ({ onSubmit}: Props) => {
  const [item, setItem ] = useState<OrderFormType>({
      productName: '',
      unitPrice: 0,
      numberOfGuest: 0,
      deliveryFee: undefined,
      location: undefined,
      colection: ''
    }) 
  const delivery = [
    {location: 'bamenda', fee:15000},
    {location: 'douala', fee: 10000},
    {location: 'southwest', fee: 5000},
    {location: 'yaounde', fee: 15000}

  ]
    const quantity = [
        {id:1,  value: 5},
        {id:2,  value: 15},
        {id:3,  value: 20},
        {id:4,  value: 25},
        {id:5,  value: 40},
        {id:6,  value: 45},
        {id:7,  value: 50},
    ]
    const products =[
        {id:1, value:"Scotch egg", unitPrice: 350},
        {id:2, value: 'Fried rice', unitPrice: 5050}
    ]
    if(item.location){
      const deliveryLocation = delivery.find(delivery => delivery.location === item.location)
      if(deliveryLocation){
        setItem({...item, deliveryFee: deliveryLocation.fee})
      }
      
    }

    useEffect(() =>{
        const product = products.find(product => product.value === item.productName)
        if(product){
            setItem({...item, unitPrice: product.unitPrice})
        }
        
    },[item.productName])
    function handleSubmit(){  
      onSubmit(item)
      setItem({
        productName: '',
        unitPrice: 0,
        numberOfGuest: 0,
        deliveryFee: undefined,
        location: undefined,
        colection:  ''
      })
    }
    const disableButton = item.unitPrice < 1 || item.numberOfGuest < 1
  return (
    <form onSubmit={(event =>{
      event.preventDefault()
      handleSubmit()
    })} className="p-4 border border-red-100 w-[90%] lg:w-[40%] text-sm m-auto my-8 rounded-md shadow-md flex flex-col">
        <div className="mb-3 border p-1 px-2 rounded-md shadow-sm flex py-2 ">
            <label htmlFor="productName" className="opacity-90 flex- w-2/4">Food type:</label>
            <select className="w-2/4 bg-slate-50 "  value={item.productName} onChange={event => setItem({...item, productName: event.target.value})} id="productName">
                <option value="">Please select </option>
               {
                products.map(product => <option key={product.id} value={product.value}>{product.value}</option>)
               }
            </select>
        </div>
        <div className="mb-3 border p-1 px-2 lg:py-2 rounded-md shadow-sm flex items-center ">
               <label className="opacity-90 flex- w-2/4" htmlFor="unitPrice">Price for 5 guests</label>
               <input className="w-2/4 bg-slate-50" type="number" value={item.unitPrice.toFixed(2)} />
        </div>
        <div className="mb-3 border p-1 px-2 rounded-md shadow-sm flex py-2 ">
               <label className="opacity-90 flex- w-2/4" htmlFor="quantity">Number of guest:</label>
               <select className="w-2/4 bg-slate-50  "  id="quantity" value={item.numberOfGuest} onChange={event => setItem({...item, numberOfGuest: Number(event.target.value)})}>
               <option value="">Please select</option>
               {
                quantity.map(item => <option key={item.id}>{item.value}</option>)
               }
               </select>

        </div>
        <div className="min-h-10">
        {
          item.numberOfGuest !== 0 && item.unitPrice !== 0 && <div className="hero_image min-h-10">
          Total cost: {item.deliveryFee ? (item.unitPrice * item.numberOfGuest) + item.deliveryFee.toLocaleString() : (item.unitPrice * item.numberOfGuest).toLocaleString()
          }<span> fCFA</span>
        </div>
        }
        </div>
      
      <button disabled={disableButton} className={`w-1/2 mx-auto  opacity-80 border bg-[var(--primary-color)] p-1 py-2 shadow-md rounded-2xl text-white ${disableButton ? "opacity-50" : '' } trans`}>Add to cart</button>
      
    </form>
  )
}

export default OrderForm
