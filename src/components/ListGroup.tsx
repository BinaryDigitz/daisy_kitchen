
import type { OrderFormType } from "../types";
interface Props{
items: OrderFormType[];
onDelete: (id: number) => void;
}
const ListGroup = ({items, onDelete}: Props) => {
    if(items.length === 0) return null
    const totalAmount = items.reduce((acc, item) => acc + (item.unitPrice * item.numberOfGuest), 0)
  return (
    <table className=" shadow-md rounded-sm text-center">
        <thead className=" ">
            <tr className="bg-slate-200 px-6 text-sm lg:text-[16px]">
                <th className="py-8 px-4 ">SN</th>
                <th className="py-8 px-4 ">Name</th>
                <th className="py-8 px-4 flex flex-col">Unit Price <span className="text-xs">for 5 guests</span></th>
                <th className="py-8 px-4">Amount</th>
                <th></th>
            </tr>
            
        </thead>
        <tbody>
                {items.map((item, index) => (
                    <tr className="bg-slate-100 border text-sm lg:text-[16px]"  key={item.id}>
                        <td className="py-5 ">{index + 1}</td>
                        <td>{item.productName}</td>
                        <td>{item.unitPrice.toFixed(2)} </td>
                        <td>{(item.unitPrice * item.numberOfGuest).toLocaleString()}</td>
                        <td className="pr-4">
                            <button className="opacity-80 hover:opacity-100 text-danger outline outline-[var(--danger)] p-1 px-2 rounded-sm shadow-md lg:p-2 lg:px-3" onClick={() => {
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
                <tr className="bg-slate-200 ">
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
