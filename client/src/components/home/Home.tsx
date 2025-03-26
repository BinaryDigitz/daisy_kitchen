import { LandingPage, Counts, Assurance, ContactBlog, BestSeller } from "../exportComp"
import TestimonialBlog from "./TestimonialBlog"


function Home() {
  return (
    <section className="overflow-hidden">
        <LandingPage/>
        <Assurance/>
        <BestSeller />
        <Counts/>
        {/* <AboutBlog/> */}
        <TestimonialBlog/>
        {/* <Training/> */}
        <ContactBlog />
      
    </section>
  )
}

export default Home
