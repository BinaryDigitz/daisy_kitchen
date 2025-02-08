import { LandingPage, Counts, Assurance, AboutBlog, ContactBlog } from "../exportComp"
import TestimonialBlog from "./TestimonialBlog"




function Home() {
  return (
    <section className="overflow-hidden">
        <LandingPage/>
        <Assurance/>
        <Counts/>
        <AboutBlog/>
        <TestimonialBlog/>
        {/* <Training/> */}
        <ContactBlog />
      
    </section>
  )
}

export default Home
