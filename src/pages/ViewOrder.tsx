
import { useParams } from 'react-router-dom'

function ViewOrder() {
    const { orderId} = useParams()
  return (
    <div>
      view order
    </div>
  )
}

export default ViewOrder
