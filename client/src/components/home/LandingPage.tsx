import { Link } from "react-router-dom"


function LandingPage() {
  return (
   <section className="">
     <div className="h-screen z-10 text-[var(--primary-color)] flex items-center justify-around lg:justify-between lg:pl-9 relative overflow-hidden ">
      <div className="translate-y-[50%] md:translate-y-0 grid place-items-center z-50 2xl:w-[40%]">
        <span className=" text-center  ">
        <h1 className="heading1 hero_text_one pt-[var(--xl-padding)] md:pt-0 text-[var(--black-color2)]">THE <span className="agu-font text-[var(--primary-color)]">unforgetables</span></h1>
        <h2 className="heading1 hero_tex_two text-[var(--black-color2)]">TASTE</h2>
        <span className="absolute bottom-0 left-0">
          {/* <PieceCake/> */}
        </span>
        
        </span>
        <Link to="/kitchen">
          <button title="Visit our kitchen" className="button1 hero_button text-[var(--white-color)] p-4 px-8 my-7 md:my-7 font-bold shadow-lg rounded-xl hover:opacity-80 trans bg-gradient-to-br to-[var(--secondary-color)] from-[var(--primary-color)] ">OUR KITCHEN</button>
        </Link>
      </div>
      <div className="hero_image absolute top-0 w-[100%] grid 2xl:place-items-center h-[50%] md:static image md:h-[100%] md:w-[50%] 2xl:w-[40%] overflow-hidden rounded-lg ">
        <img src="./homeIcons/cake_slice.png" className="object-c " alt="hero image" />
      </div>
    </div>
   
   </section>
  )
}

export default LandingPage