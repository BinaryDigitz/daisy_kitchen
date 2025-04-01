import { ChangeEvent, useState } from "react";


function YearlySelect() {
   const[ month, setMonth] = useState<string>('')
    const months : string[] = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November','December' ];

    function handleSelect(event:ChangeEvent<HTMLSelectElement>){
        setMonth(event.target.value)
        console.log(month);
        
    }
  return (
    <div className="flex items-center gap-5 px-3 border my-5 w-full  lg:w-4/5 mx-auto border-green-200 text-green-950 shadow-sm bg-gradient-to-r from-green-50 to-green-100 shadow-green-200">
        <label className="text-nowrap" htmlFor="select">SORT MONTHS:</label>
        <select className="w-full h-10 rounded-sm outline-none"
        id="select"
    value={month}
    onChange={handleSelect}
    >
        <option value="">Please select Month</option>
        {
            months.map(month => (
                <option value={month}>{month}</option>
            ))
        }
      
    </select>
    </div>
  )
}

export default YearlySelect
