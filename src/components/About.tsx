import { metaData, workers } from "../data";
import SocialMedia from "./ui/SocialMedia";

function About() {

  return (
    <section>
      <div className=" relative about-content text-[var(--black-color2)]  ">
        <div className="pt-[var(--md-padding)]">
          <h2 className="text-center heading3 text-[var(--primary-color)]">{`Welcome to ${metaData.name}! 🍰`}</h2>
        </div>
        <div className=" px-[var(--sm-padding)] lg:w-[90%] mx-auto py-[var(--sm-padding)] rounded-md shadow-md">
          <div className="">
            <p className="paragraph1 px-1 lg:text-center">
              It all began in a tiny kitchen with a simple dream: to share the
              warmth of homemade pastries with our community. What started as a
              weekend pop-up quickly grew into the cozy bakery you know today.
            </p>
          </div>

          <h2 className="text-center subheading text-[var(--black-color2)] my-[var(--md-margin)]">
            What Makes Us Special
          </h2>
          <ul className="paragraph1">
            <li className="">
              <strong>Fresh, Handcrafted Goodness</strong> – Everything is baked
              fresh daily in-house.
            </li>
            <li className="">
              <strong>Seasonal Flavors</strong> – We embrace the seasons with a
              rotating menu.
            </li>
            <li className="">
              <strong>Community First</strong> – Supporting local farmers and
              giving back to the community.
            </li>
          </ul>
        </div>

        <div className="grid place-items-center py-[var(--lg-padding)]">
          <div className="h-[400px] w-[300px] lg:w-[400px] lg:h-[450px] border p-2 backdrop shadow-md rounded-md">
            <span className="bg-black h-[250px] w-[250px] rounded-full block mx-auto overflow-hidden -translate-y-2">
              <img src="./homeIcons/cutting rice.png" alt="Baker 1" />
            </span>
            <div className="text-center">
              {
                workers.map((worker, index) => (
                  <div key={index}>
                    <h3 className="heading3">{worker.name}</h3>
                    <p className="paragraph2">{worker.title}</p>
                    <p className="paragraph2">{worker.qualifications}</p>
                    <div className="flex gap-2 justify-center items-center py-2">
                      <SocialMedia/>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="p-3">
          <h2 className="">Visit Us</h2>
          <p className="paragraph2">
            Come for the pastries, stay for the warm smiles and the smell of
            fresh bread in the air. We can’t wait to welcome you!
          </p>
          <a href="#" className="btn button1 underline">
            Find Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
