import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import ContactCard from "../contact/ContactCard";
import { Title } from "../exportComp";

function ContactBlog() {
  return (
    <section className="text-center rounded-btm mt-28 lg:mt-14">
      <Link to="/contact">
        <Title text1="CONTACT" text2="CARD" size="heading2" />
        <p className="paragraph1 opacity-80 mb-[var(--xl-margin)] ">
          Our team is always ready to reply your messages
        </p>
      </Link>

      <div className="flex flex-col lg:flex-row justify-around pt-6 gap-10 md:gap-0 md:p-0 ">
        <ContactCard />
        <NewsLetter />
      </div>
      <Link to="/contact">
        <button
          title="Contact us"
          className="button1 border text-sm border-[var(--secondary-color)] my-10 text-[var(--secondary-color)] shadow-sm hover:opacity-80 hover:bg-[var(--secondary-color)] hover:text-white trans p-3  m-6 rounded-md px-8"
        >
          CONTACT US
        </button>
      </Link>
    </section>
  );
}

export default ContactBlog;
