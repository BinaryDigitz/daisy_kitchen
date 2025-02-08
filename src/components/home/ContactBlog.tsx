import { Link } from "react-router-dom"
import NewsLetter from "./NewsLetter"
import ContactCard from "../contact/ContactCard"



function ContactBlog() {
  return (
    <section className="text-center rounded-btm py-[var(--md-padding)]">
     
      <Link to="/contact" >
        <h3 className="heading3">CONTACT INFORMATION</h3>
        <p className="paragraph1 opacity-80 mb-[var(--xl-margin)] opacity-80">Our team is always ready to reply your messages</p>
      </Link>
      
    <div className="flex flex-col lg:flex-row justify-around  ">
      <ContactCard/>
      <NewsLetter/>
    </div>
    <Link to="/contact" >
        <button title="Contact us" className="button1 text-[var(--white-color)] hover:opacity-80 bg-[var(--black-color1)] trans p-3 border m-6 rounded-md px-8">Contact us</button>
      </Link>
    </section>
  )
}

export default ContactBlog
