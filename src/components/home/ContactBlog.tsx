import { Link } from "react-router-dom"
import NewsLetter from "./NewsLetter"


function ContactBlog() {
  return (
    <section className="text-center p-[var(--sm-padding)] pt-[var(--lg-padding)]  rounded-btm">
     
      <Link to="/contact" >
        <h3 className="heading3">CONTACT</h3>
      </Link>
      <h4 className="heading3 opacity-80">INFORMATION</h4>
    <NewsLetter/>
    </section>
  )
}

export default ContactBlog
