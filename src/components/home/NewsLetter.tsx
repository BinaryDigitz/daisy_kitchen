import { FormEvent, useState } from "react"
import { toast } from "react-toastify";


function NewsLetter() {
    const [email, setEmail] = useState('')

    const disableButton = email.length < 5
    async function handleNewletterSubmit(event: FormEvent){
      event?.preventDefault();
      toast.success('Subscription successful.....')
      setEmail('')
      return;
    }
  return (
    <section className="text-center py-[var(--xl-padding)] text-black p-[var(--sm-padding)] pt-[var(--lg-padding)] h-[150px] lg:h-[200px] bg-[var(--white-color)] text-[var(--primary-color)] rounded-btm">    
        <h3 className="subheading">SUBSCRIBE TO OUR NEWSLETTERS</h3>
        <h3 className="paragraph2 text-gray-600">Recieve notifications about our offers and promotions</h3>
       
        <form  onSubmit={handleNewletterSubmit} className="flex justify-center items-center space-x-4 py-4">
            <input type="email" value={email} onChange={event => setEmail(event.target.value)} className="input shadow-md py-2" placeholder="Email Address"/>
            <button disabled={disableButton} className={`button2 ${disableButton ? 'bg-gray-500' : 'bg-[var(--primary-color)]'} px-5 py-2 text-[var(--white-color)] rounded-md`}>SUBSCRIBE</button>
        </form>
      
    </section>
  )
}

export default NewsLetter
