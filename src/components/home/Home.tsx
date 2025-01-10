import {  LandingPage, Counts, Assurance, AboutBlog } from "../exportComp"
import TestimonialBlog from "./TestimonialBlog"



function Home() {
  return (
    <section>
        <LandingPage/>
        <Assurance/>
        <Counts/>
        <AboutBlog/>
        <TestimonialBlog/>
      
    </section>
  )
}

export default Home
