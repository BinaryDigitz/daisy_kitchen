import { Title } from "../exportComp";
import NewsLetter from "../home/NewsLetter";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className=" mt-8 mb-4 relative">
      <Title text1="CONTACT" text2="US" size="heading2" />
      <p className="subheading text-green-800 text-center">
        Our team is ready to get back to you
      </p>

      <div className="md:flex justify-around lg:justify-center lg:gap-[100px]  items-cente px-5 my-10 lg:mt-14">
        <div className="mt-10  md:w-1/2 lg:w-[500px]">
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
