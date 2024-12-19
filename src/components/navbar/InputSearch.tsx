import { useRef } from "react";

interface Props{
    onSearch: (search: string) => void;
}

function InputSearch({onSearch}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
   <form className="relative flex items-center "  onSubmit={(e) => {
       e.preventDefault();
       if(inputRef.current){
           onSearch(inputRef.current.value)}
   }}>
    <label className=" h-8  md:w-[250px] flex   border-[var(--secondary-color)]  cursor-pointer text-center shadow-md">
        <input ref={inputRef} type="text" placeholder="Search item" className="text-[var(--black-color2)] flex-1 "/>
        <svg xmlns="http://www.w3.org/2000/svg"  className="w-8 hover:opacity-70 h-full bg-[var(--secondary-color)] trans" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ddd"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
    </label>
    <button type="submit"></button>
   </form>
  )
}

export default InputSearch