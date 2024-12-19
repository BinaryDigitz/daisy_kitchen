import { Link } from "react-router-dom"


function LandingPage() {
  return (
    <section className="flex items-center justify-around h-screen  text-white rounded-2xl hero relative">
      <div className="translate-y-[50%] md:translate-y-0 grid place-items-center">
        <span className=" text-center text-4xl md:text-5xl lg:text-8xl font-bold ">
        <h1 className="text-4xl lg:text-6xl my-4">THE <span className="text-4xl lg:text-6xl agu-font">unforgetable</span></h1>
        <h2 className="">TASTE</h2>
        </span>
        <Link to="/kitchen">
          <button title="Visit our kitchen" className="outline p-4 px-8 my-3 md:my-7 font-bold shadow-lg  hover:opacity-80 trans">OUR KITCHEN</button>
        </Link>
      </div>
      <div className=" absolute top-14 w-[80%] h-[40%] md:static image md:h-[60%] md:w-[50%] lg:h-[70%] lg:w-[40%] bg-black overflow-hidden shadow-lg rounded-lg ">
        <img src="./photos/queensCake.jpg" className="object-cover " alt="hero image" />
      </div>
    </section>
  )
}

export default LandingPage