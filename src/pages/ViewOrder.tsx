
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'



function ViewOrder() {
    const { orderId} = useParams();

    async function fetchOrder(){
      const { data } = await fetch('', {  order:'orderId'})
      console.log(data);
      
    }
    useEffect(() =>{
     fetchOrder()
    },[orderId]);
    
  return (
    <div>
      view order
    </div>
  )
}

export default ViewOrder
