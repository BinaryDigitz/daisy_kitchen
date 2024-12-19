import { useState } from "react"
import { ListGroup } from "./exportComp"



const PlaceOrder = () => {
 const [items, setItems ] = useState([
  {id:1, name: "Rice", unitPrice: 200, amount: 22000},
  {id:2, name: "Beans", unitPrice: 300, amount: 32000},
  {id:3, name: "Yam", unitPrice: 500, amount: 52000},
])
     
  return (
    <section className="text-[var(--black-color2)] h-screen">
      <ListGroup items={items} onDelete={(id) => setItems(items.filter(item => item.id !== id))
      }/>
    </section>
  )
}

export default PlaceOrder

