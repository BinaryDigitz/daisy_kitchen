import { OrderFormType } from "../types";

interface Props{
    itemds: OrderFormType[];
    setItems: (items: OrderFormType[]) => void;
}
function Collection({item, setItem}: Props) {
  return (
    <form>
      
        <div className="mb-3 border p-1 px-2 rounded-md shadow-sm flex py-2 ">
          <label className="opacity-90 flex- w-2/4" htmlFor="transportaion">Means of collection</label>
            <select  id="transportation" className="w-2/4 bg-slate-50 "value={item.colection} onChange={event => setItem({...item, colection: event.target.value})}>  
              <option value="">Please select</option>
              <option value="pickup">Pick up</option>
              <option value="delivery">Delivery</option>
              <option value="dine-in" disabled>Dine in: <span className="text-xs text-warning">Not available</span></option>
              <option value="catering">Catering at your place</option>
            </select>
        </div>
        <div className="mb-3 border p-1 px-2 rounded-md shadow-sm flex py-2 ">
          <label className="opacity-90 flex- w-2/4" htmlFor="location">Location</label>
            <select disabled={item.colection === "pickup"}  id="location" className="w-2/4 bg-slate-50  " value={item.location} onChange={event => setItem({...item, location: event.target.value})}>
              <option value="">Please select</option>
              <option value="bamenda">Bamenda</option>
              <option value="douala">Douala</option>
              <option value="southwest">South west</option>
              <option value="yaounde" disabled>Yaounde</option>
            </select>
        </div>
    </form>
  )
}

export default Collection
