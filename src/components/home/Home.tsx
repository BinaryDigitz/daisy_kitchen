import { LandingPage, Counts, Assurance, AboutBlog, ContactBlog } from "../exportComp"
import TestimonialBlog from "./TestimonialBlog"



function Home() {
  return (
    <section>
        <LandingPage/>
        <Assurance/>
        <Counts/>
        <AboutBlog/>
        <TestimonialBlog/>
        <ContactBlog />
      
    </section>
  )
}

export default Home
