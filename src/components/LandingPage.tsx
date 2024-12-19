import { Link } from "react-router-dom"
import PieceCake from "./cakeISvg/PieceCake"



function LandingPage() {
  return (
    <section className=" text-[var(--primary-color)] flex items-center my-1 justify-around lg:justify-between lg:pl-9 h-screen   rounded-2xl hero relative overflow-hidden ">
      <div className="translate-y-[50%] md:translate-y-0 grid place-items-center z-50 ">
        <span className=" text-center text-4xl md:text-5xl lg:text-8xl font-bold ">
        <h1 className=" hero_text_one text-4xl lg:text-6xl my-4">THE <span className="text-4xl lg:text-6xl agu-font ">unforgetables</span></h1>
        <h2 className="hero_text_two">TASTE</h2>
        <span className="absolute bottom-0 left-0">
          <PieceCake/>
        </span>
        
        </span>
        <Link to="/kitchen">
          <button title="Visit our kitchen" className="hero_button outline p-4 px-8 my-3 md:my-7 font-bold shadow-lg  hover:opacity-80 trans">OUR KITCHEN</button>
        </Link>
      </div>
      <div className="hero_image absolute top-0 w-[100%] h-[40%] md:static image md:h-[100%] md:w-[50%] lg:h-[100%] lg:w-[50%] overflow-hidden shadow-lg rounded-lg ">
        <img src="./cake_slice.jpg" className="object-cover " alt="hero image" />
      </div>
    </section>
  )
}

export default LandingPage