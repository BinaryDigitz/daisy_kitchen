
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
    <table className="table-auto">
        <thead className=" p-4">
            <tr className="bg-[var(--secondary-color)]">
                <th>SN</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Amount</th>
                <th></th>
            </tr>
            
        </thead>
        <tbody>
                {items.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice.toFixed(2)}</td>
                        <td>{item.amount.toLocaleString()}</td>
                        <td>
                            <button className="text-danger outline outline-[var(--danger)] p-2 px-3" onClick={() => onDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Total:</th>
                    <th>{ totalAmout.toLocaleString() } fCFA</th>
                </tr>
            </tfoot>
      
    </table>
  )
}

export default ListGroup
