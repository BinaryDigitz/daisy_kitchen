import { Link } from "react-router-dom"
import PieceCake from "../cakeISvg/PieceCake"




function LandingPage() {
  return (
   <section className="navbar">
     <div className="z-10 text-[var(--primary-color)] flex items-center  justify-around lg:justify-between lg:pl-9 h-screen   rounded-2xl hero relative overflow-hidden ">
      <div className="translate-y-[50%] md:translate-y-0 grid place-items-center z-50 ">
        <span className=" text-center text-4xl md:text-5xl lg:text-8xl font-bold ">
        <h1 className=" hero_text_one text-4xl lg:text-6xl my-4 text-[var(--black-color2)]">THE <span className="text-4xl lg:text-6xl agu-font text-[var(--primary-color)]">unforgetables</span></h1>
        <h2 className="hero_text_two text-[var(--black-color2)]">TASTE</h2>
        <span className="absolute bottom-0 left-0">
          <PieceCake/>
        </span>
        
        </span>
        <Link to="/kitchen">
          <button title="Visit our kitchen" className="hero_button text-[var(--white-color)] p-4 px-8 my-7 md:my-7 font-bold shadow-lg rounded-xl hover:opacity-80 trans bg-[var(--primary-color)]">OUR KITCHEN</button>
        </Link>
      </div>
      <div className="hero_image absolute top-0 w-[100%] h-[50%] md:static image md:h-[100%] md:w-[50%] lg:h-[100%] lg:w-[50%] overflow-hidden  rounded-lg ">
        <img src="./cake_slice.jpg" className="object-cover " alt="hero image" />
      </div>
    </div>
   
   </section>
  )
}

export default LandingPage