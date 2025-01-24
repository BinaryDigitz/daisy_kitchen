import { InputSearch, Logo, NavbarItems, NavbarMenu } from "../exportComp"
 import { ProductTypes } from "../../types"
import { ChangeEvent, useEffect, useState } from "react"

 interface Props{
  data:ProductTypes[]
 }
function Navbar({data}:Props) {

 const [ filterData, setFilterData ] = useState<ProductTypes[]>([])
 const [search, setSearch] = useState({displayBox: false, searchData:''})


function handleInput(event:ChangeEvent<HTMLInputElement>){
  
  const searchData = event.target.value
  setSearch({...search, searchData:searchData})
  setFilterData(data.filter(item =>item.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())))
}
 useEffect(() =>{
 if(search.searchData.length > 0){
   return setSearch({...search, displayBox:true})
 }
 else{
  return setSearch({...search, displayBox:false})
 }
 },[search.searchData]);

  return (
    <nav>
      <div className=" relative flex md:justify-around gap-3 justify-between items-center p-3 py-4  lg:py-6 shadow-md text-[var(--white-color)] bg-[var(--primary-color)]">
        <Logo/>
        <InputSearch handleInput={handleInput} search={search}/>
        <NavbarItems/>
        <NavbarMenu/>
      </div>
    <div className={` ${!search.displayBox ? "hidden" : ''} max-h-[300px] overflow-auto  absolute bg-white text-black p-3 rounded-md shadow-md  z-50 w-[80%] lg:w-[50%] translate-x-[50%] right-[50%]`}>
        <div title="Close" onClick={()=>{
          setSearch({...search, displayBox:!search.displayBox})
          setSearch({...search, searchData:''})
        }}>
         <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-2  hover:scale-110 shadow-md cursor-pointer trans" height="24px" viewBox="0 -960 960 960" width="24px" fill="#900c3f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </div>
       {
         filterData.length > 0 &&  <p className="flex justify-around my-1 py-1 bg-slate-100 text-red-900">
         <span>NAME</span>
         <span>CATEGORY</span>
         <span>PRICE</span>
       </p>
       }
         {
          filterData.map(item => <p key={item.id}
            onClick={()=>{
              setSearch({...search, displayBox:!search.displayBox})
              setSearch({...search, searchData:''})
            }}
            title={`visit ${item.name}`}
           className="flex opacity-80 justify-around my-1 py-2 bg-slate-50 cursor-pointer hover:opacity-100 text-green-900">
            <span>{item.name}</span>
            <span>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
            <span>{item.price} </span>
          </p>)
         }
         {
          filterData.length == 0 && <p className="flex flex-col text-center p-4">
            <span className="">ITEM NOT FOUND</span>
            <span className="text-sm  opacity-70">Please search by name or price</span>
          </p>
         }
      </div>
    </nav>
  )
}

export default Navbar
