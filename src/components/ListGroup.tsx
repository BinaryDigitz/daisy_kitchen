
import type { OrderFormType } from "../types";
interface Props{
items: OrderFormType[];
onDelete: (id: number) => void;
}
const ListGroup = ({items, onDelete}: Props) => {
    if(items.length === 0) return null
    const totalAmount = items.reduce((acc, item) => acc + (item.unitPrice * item.numberOfGuest), 0)
  return (
    <table className=" shadow-md rounded-sm text-center w-[90%] mx-auto bg-white lg:w-[40%] hero_image">
        <thead className=" ">
            <tr className="bg-white text-sm lg:text-[16px] opacity-70">
                <th className="py-3 px-1 ">SN</th>
                <th className="py- px-1 ">Name</th>
                <th className="py- px-1 ">Unit Price </th>
                <th className="py- ">Amount</th>
                <th>delate</th>
            </tr>
            
        </thead>
        <tbody>
                {items.map((item, index) => (
                    <tr className="bg-slate-50 border text-sm lg:text-[16px] opacity-80 "  key={item.id}>
                        <td className="py-4 ">{index + 1}</td>
                        <td>{item.productName}</td>
                        <td>{item.unitPrice.toFixed(2)} </td>
                        <td>{(item.unitPrice * item.numberOfGuest).toLocaleString()}</td>
                        <td className="pr-4">
                            <button className="hover:opacity-80 text-danger outline outline-[var(--danger)] p-1 px-2 rounded-sm shadow-md lg:p-2 lg:px-3" onClick={() => {
                                if(item.id){
                                    const confirm = window.confirm(`Delete ${item.productName} from the list?`)
                                    if(!confirm) return
                                    onDelete(item.id)
                                }
                                }}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className="bg-slate-100 ">
                    <th></th>
                    <th></th>
                    <th>Total:</th>
                    <th className="bg-slate-00 py-3">{ totalAmount.toLocaleString() } fCFA</th>
                    <th></th>
                </tr>
            </tfoot>
      
    </table>
  )
}

export default ListGroup
