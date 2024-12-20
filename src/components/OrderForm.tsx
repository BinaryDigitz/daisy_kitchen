

const OrderForm = () => {
    const quantity = [
        {id:1,  value: 5},
        {id:2,  value: 15},
        {id:3,  value: 20},
        {id:4,  value: 25},
        {id:5,  value: 40},
        {id:6,  value: 45},
        {id:7,  value: 50},
    ]
    const products =[
        {id:1, value:"Scotch egg", unitPrice: 12000},
        {id:2, value: 'Fried rice', unitPrice: 15000}
    ]
  return (
    <form>
        <div className="mb-3">
            <label htmlFor="productName">Products:</label>
            <select value="" id="productName">
                <option value="">Please selects items</option>
               {
                products.map(product => <option key={product.id} value={product.value}>{product.value}</option>)
               }
            </select>
        </div>
        <div className="mb-3 flex gap-3 place-items center">
               <label htmlFor="unitPrice">Unit price</label>
               <p>300,000 fCFA</p>
        </div>
        <div className="mb-3 flex gap-3 place-items center">
               <label htmlFor="quantity">Number of guest:</label>
               <select  id="quantity">
               <option value="">Please select</option>
               {
                quantity.map(item => <option key={item.id}>{item.value}</option>)
               }
               </select>

        </div>
      <button>Add to cart</button>
    </form>
  )
}

export default OrderForm
