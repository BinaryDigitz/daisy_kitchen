
import TestimonialCard from "./TestimonialCard"


function TestimonialBlog() {
  
  return (
    <section className="grid place-items-center p-5 pt-8 relative overflow-hidden bg-[var(--gray-colo1)]">
      <span className="absolute  left-0 h-[300px] w-[400px] overflow-hidden">
        <img src="./homeIcons/rice_bag.png" className="opacity-0" alt="" />
      </span>
      <h2 className="heading3 text-[var(--black-color2)]  opacity-90  text-[var(--primary-color)]">OUR CLIENTS</h2>
      <h3 className="heading3 text-[var(--black-color1)]  text-[var(--black-color)] opacity-80">YOUR OPINION MATTERS</h3>
      <div className="relative mt-[var(--md-padding)] w-full hover_container b">
        <span className="absolute left-[-10px] top-[50%] bg-[var(--primary-color)] shadow-lg p-2 px-3 lg:px-5 rounded-md hover_item ">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 lg:size-6" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
        </span>
        <span className="absolute right-[-10px] top-[50%] bg-[var(--primary-color)] shadow-lg p-2 px-3 lg:px-5 rounded-md hover_item">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 lg:size-6" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </span>
        <TestimonialCard/>
      </div>
    </section>
  )
}

export default TestimonialBlog
