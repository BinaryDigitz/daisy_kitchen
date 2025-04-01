import { Title } from "./exporComp"

function Sales() {
    const sales = [
        {month: 'January', low: 20000, high: 40000, total: 34500},
        {month: 'February', low: 20000, high: 40000, total: 34500},
        {month: 'Match', low: 20000, high: 40000, total: 34500},
    ]
  return (<div className='p-4 w-full'>
    <Title text1="" text2="SALES" size="heading4 text-red-900" />
  <h3 className='text-lg lg:text-2xl p-4 px-[10%]'>Year: 2025</h3>
  <table className='border border-red-100 w-full lg:w-5xl mx-auto p-5'>
        <thead >
            <tr className='flex items-center justify-between p-4 bg-red-100 text-red-900 text-md text-center text-sm md:text-[18px] '>
                <td>Month</td>
                <td>Low selling product</td>
                <td >High selling product</td>
                <td>Total Sales</td>
            </tr>
        </thead>
        <tbody >
            {
                sales.map(sale =>(
                    <tr key={sale.month} className='flex cursor-pointer items-center justify-between text-sm md:text-[16px] p-4 hover:bg-red-100 bg-red-50 text-red-950 text-start'>
                        <td className='text-black'>{sale.month}</td>
                        <td className='text-red-500'>{sale.low.toLocaleString()}.00</td>
                        <td className='text-green-800'>{sale.high.toLocaleString()}.00</td>
                        <td>{sale.total.toLocaleString()}.00</td>
                    </tr>
                ))
            }
        </tbody>
      
    </table>
    <div className="flex justify-around my-4">
    <button title="download file" className="underline bg-red-50 w-40 text-sm  cursor-pointer p-1">Download <span>2025</span> sales</button>
    <p className='text-nowrap py-4'>Yearly Sales: <span className='lg:text-lg text-green-800 bg-green-50 p-3 rounded-sm font-bold'>549,934.00</span></p>
    </div>
  </div>
    
  )
}

export default Sales
