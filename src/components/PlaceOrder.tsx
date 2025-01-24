import { useState } from "react"
import { Collection, ListGroup, OrderForm } from "./exportComp"
import type { OrderFormType } from "../types"



const PlaceOrder = () => {
  
 const [items, setItems ] = useState<OrderFormType[]>([])
    
     function handleSubmit(item: OrderFormType){
      const addId = [...items, item].map((item, index) => ({...item, id: index + 1}))
      setItems(addId)
      }
  return (
    <section className="text-[var(--black-color2)] h-screen">
      <OrderForm onSubmit={(item) => handleSubmit(item)
      } />
      <ListGroup items={items} onDelete={(id) => setItems(items.filter(item => item.id !== id))
      }/>
      <Collection /> 
    </section>
  )
}

export default PlaceOrder

