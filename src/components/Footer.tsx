
import { socialLink, company } from "../data"
import DeveloperLinks from "./DeveloperLinks"
import { PaymentsLogo } from "./exportComp"

function Footer() {
   
    
  return (
    <section className='relative flex flex-col md:flex-row gap-10 md:justify-around bg-[var(--secondary-color)] text-white p-5'>
      <div className=" flex gap-10 md:gap-24 p-4">
        <div>
          <h3 className="agu-font text-xl lg:text-3xl pb-2">Daisy kitchen</h3>
            <p className=" text-sm opacity-90 py-1 text-lg">Quick Links</p>
            <ul>
              <li className="text-sm p-1 py-2  opacity-80">Our Serivices</li>
              <li className="text-sm p-1 py-2  opacity-80">Delivery Policy</li>
              <li className="text-sm p-1 py-2  opacity-80">Coporate Enquiry</li>
            </ul>

        </div>
        <div className="">
        <p className=" text-sm text-sm font-bold md:text-lg opacity-90 py-1 text-lg">Contact Us</p>
          <div>
            <span className="flex gap-1 items-center cursor-pointer" aria-label="Call us" title="place a call">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-440v-360q0-17 11.5-28.5T520-840h280q17 0 28.5 11.5T840-800v200q0 17-11.5 28.5T800-560H600L480-440Zm80-200h200v-120H560v120Zm0 0v-120 120Zm238 520q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
              <p className="text-sm p-1 py-2  opacity-80">Give us a call</p>
            </span>
            <span  className="flex gap-1 items-center cursor-pointer" aria-label="Call us" title="place a call">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
              <p className="text-sm p-1 py-2  opacity-80">Email us </p>
            </span>
            <PaymentsLogo/>
          </div>
        </div>
      </div>
       <div className="flex px-4 gap-10  md:gap-24 pb-6">
       <div className="">
        <h2 className="text-sm font-bold md:text-lg p-1">Comapany</h2>
        <ul>
          {
            company.map(item => <li className="text-sm p-1 py-2  opacity-80 hover:opacity-100 trans" key={item}>
              <a href="">{item}</a>
            </li>)
          }
        </ul>
      </div>
      <div className="">
        <h3 className="text-sm font-bold md:text-lg lg:py-0 p-1">Socials</h3>
          <ul>
            {socialLink.map(item => <li className="text-sm p-1 py-2  opacity-80 hover:opacity-100 trans" key={item.name}>
              <a href={item.link} target="_blank" rel="noreferrer" className="flex gap-2 items-center">
              <span className="size-5">{item.icon}</span>
              <p className="">{item.name}</p>
              </a>
            </li>)}
        </ul>
      </div>
       </div>
     <span className="absolute bottom-0 flex justify-around items-center gap-2 text-xs p-2">
       <p className=" text-center text-xs p-2">© 2024 Daisy kitchen</p>
       <DeveloperLinks />
     </span>
    </section>
  )
}

export default Footer
