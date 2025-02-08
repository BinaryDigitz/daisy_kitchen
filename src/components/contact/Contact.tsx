import { Back, PlaceOrder } from "../exportComp";
import ContactForm from "./ContactForm";

function Contact() {
  
  return (
   <section className="lightBg relative"> 
   <div className="">
    <Back link={"/"}/>
   </div>
    <h1 className="text-center text-3xl font-bold py-8">Contact us</h1>
       <div className="flex flex-col lg:flex-row justify-around  pt-8 h-screen  ">
       
      <div>
        <ContactForm />
      </div>
    </div>
    <PlaceOrder/>
   </section>
  );
}

export default Contact;
