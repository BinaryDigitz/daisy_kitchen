
interface Items{
    id: number;
    name: string;
    unitPrice: number;
    amount: number;
}
interface Props{
items: Items[];
onDelete: (id: number) => void;
}
const ListGroup = ({items, onDelete}: Props) => {
    if(items.length === 0) return null
    const totalAmout = items.reduce((total, acc) => {
        return acc.amount + total
    },0)
  return (
    <table className=" shadow-md rounded-sm text-center">
        <thead className=" ">
            <tr className="bg-slate-200 px-6 text-sm lg:text-[16px]">
                <th className="py-8 px-4 ">SN</th>
                <th className="py-8 px-4 ">Name</th>
                <th className="py-8 px-4">Unit Price</th>
                <th className="py-8 px-4">Amount</th>
                <th></th>
            </tr>
            
        </thead>
        <tbody>
                {items.map((item, index) => (
                    <tr className="bg-slate-100 border text-sm lg:text-[16px]"  key={item.id}>
                        <td className="py-5 ">{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice.toFixed(2)}</td>
                        <td>{item.amount.toLocaleString()}</td>
                        <td className="pr-4">
                            <button className="text-danger outline outline-[var(--danger)] p-1 px-2 rounded-sm shadow-md lg:p-2 lg:px-3" onClick={() => onDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className="bg-slate-200 ">
                    <th></th>
                    <th></th>
                    <th>Total:</th>
                    <th className="bg-slate-00 py-3">{ totalAmout.toLocaleString() } fCFA</th>
                    <th></th>
                </tr>
            </tfoot>
      
    </table>
  )
}

export default ListGroup
