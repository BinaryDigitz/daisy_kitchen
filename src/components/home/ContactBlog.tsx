import { Link } from "react-router-dom"


function ContactBlog() {
  return (
    <section className="grid place-items-center p-5 pt-8 h-[200px] ">
      <Link to="/contact" >
        <h3 className="lg:text-2xl ">CONTACT</h3>
      </Link>
      <h4 className="lg:text-2xl opacity-80">INFORMATION</h4>

    </section>
  )
}

export default ContactBlog
