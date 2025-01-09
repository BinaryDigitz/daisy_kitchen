
const countsDetails = [
    {name: "Bakeries", icon:<svg xmlns="http://www.w3.org/2000/svg" height="24px" className="size-[60px]" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M400-240h40v-160q25 0 42.5-17.5T500-460v-120h-40v120h-20v-120h-40v120h-20v-120h-40v120q0 25 17.5 42.5T400-400v160Zm160 0h40v-340q-33 0-56.5 23.5T520-500v120h40v140ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/></svg>, total: 5 },
    {name: "Employees", icon:<svg xmlns="http://www.w3.org/2000/svg" height="24px" className="size-[60px]" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M400-240h40v-160q25 0 42.5-17.5T500-460v-120h-40v120h-20v-120h-40v120h-20v-120h-40v120q0 25 17.5 42.5T400-400v160Zm160 0h40v-340q-33 0-56.5 23.5T520-500v120h40v140ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/></svg>, total: 15 },
    {name: "Years", icon:<svg xmlns="http://www.w3.org/2000/svg" height="24px" className="size-[60px]" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M400-240h40v-160q25 0 42.5-17.5T500-460v-120h-40v120h-20v-120h-40v120h-20v-120h-40v120q0 25 17.5 42.5T400-400v160Zm160 0h40v-340q-33 0-56.5 23.5T520-500v120h40v140ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/></svg>, total: 12 },
    {name: "Products", icon:<svg xmlns="http://www.w3.org/2000/svg" height="24px" className="size-[60px]" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M400-240h40v-160q25 0 42.5-17.5T500-460v-120h-40v120h-20v-120h-40v120h-20v-120h-40v120q0 25 17.5 42.5T400-400v160Zm160 0h40v-340q-33 0-56.5 23.5T520-500v120h40v140ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/></svg>, total: 7500 }
]
const Counts = () => {
  return (
    <section className="bg-[#3734060c] text-black grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 my-3 h-[300px] rounded-xl shadow-md ">
      {
        countsDetails.map((count, index) => <div key={index} className="flex items-center gap-1  rounded-sm w-[150px]">
            <span className="opacity-80">{count.icon}</span>
            <div className="text-center">
                <p className="text-xl font-bold opacity-80 md:text-2xl">{count.total}</p>
                <p className="opacity-60">{count.name}</p>
            </div>
        </div>)
      }
    </section>
  )
}

export default Counts
