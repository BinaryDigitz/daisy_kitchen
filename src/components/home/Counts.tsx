import {ReactNode, useState } from "react"
import CountUp from "react-countup"
import  ScrollTrigger  from "react-scroll-trigger"
const countsDetails = [
    {name: "Bakeries", icon:<svg xmlns="http://www.w3.org/2000/svg" height="24px" className="size-[60px] lg:size-[100px]" viewBox="0 -960 960 960" width="24px" fill="#900c3f"><path d="M400-240h40v-160q25 0 42.5-17.5T500-460v-120h-40v120h-20v-120h-40v120h-20v-120h-40v120q0 25 17.5 42.5T400-400v160Zm160 0h40v-340q-33 0-56.5 23.5T520-500v120h40v140ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/></svg>, total: 5 },
    {name: "Employees", icon:<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" className="size-[60px] lg:size-[100px]" width="24px" fill="#900c3f"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>, total: 15 },
    {name: "Years", icon:<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="size-[60px] lg:size-[100px]" fill="#900c3f"><path d="M480-40 192-256q-15-11-23.5-28t-8.5-36v-480q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v480q0 19-8.5 36T768-256L480-40Zm0-100 240-180v-480H240v480l240 180Zm-42-220 226-226-56-58-170 170-84-84-58 56 142 142Zm42-440H240h480-240Z"/></svg>, total: 12 },
    {name: "Products", icon:<svg xmlns="http://www.w3.org/2000/svg" height="24px" className="size-[60px] lg:size-[100px]" viewBox="0 -960 960 960" width="24px" fill="#900c3f"><path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z"/></svg>, total: 7500 }
]
interface ScrollTriggerWrapper{
  onEnter: () => void;
  onExit: () => void;
  children: ReactNode;
}
const Counts = () => {
  const [counterOn, setCounterOn ] = useState(false)
  return (
   <div>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
   <section className="trans-blak text-black grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 mt-3 h-[300px] rounded-xl shadow-lg ">
      {
        countsDetails.map((count, index) => <div key={index} className="flex items-center gap-2  rounded-sm w-[150px]">
            <span className="opacity-80">{count.icon}</span>
            <div className="text-center">
                <p className="text-xl font-bold opacity-80 md:text-3xl">
                  {counterOn && <CountUp start={0} end={count.total} duration={3} delay={0}/>}
                </p>
                <p className="opacity-60">{count.name}</p>
            </div>
            <div>
              
            </div>
        </div>)
      }
    </section>
    </ScrollTrigger>
   </div>
   
  )
}

export default Counts
