import { Title } from "../exportComp";
import NewsLetter from "../home/NewsLetter";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className=" mt-8 mb-4 relative">
      <Title text1="CONTACT" text2="US" size="heading2" />
      <p className="subheading text-center">
        Our team is ready to get back to you
      </p>

      <div className="md:flex justify-around items-cente px-5 my-5">
        <div className="mt-10 md:flex-1">
          <ContactCard />
        </div>
        <div className="flex flex-col lg:flex-row justify-around  ">
          <ContactForm />
        </div>
      </div>
      <NewsLetter />
    </section>
  );
}

export default Contact;
