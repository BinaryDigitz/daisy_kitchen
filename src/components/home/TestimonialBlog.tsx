
import TestimonialCard from "./TestimonialCard"


function TestimonialBlog() {
  
  return (
    <section className="grid place-items-center p-5 pt-8 tone_primary_color">
     <h2 className="text-[var(--black-color2)] text-xl opacity-90 lg:text-2xl text-[var(--black-color2)]">OUR CLIENTS</h2>
     <h3 className="text-[var(--black-color1)] text-xl lg:text-2xl  text-[var(--black-color1)]">YOUR OPINION MATTERS</h3>
     <div className="relative mt-10 w-full hover_container">
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
