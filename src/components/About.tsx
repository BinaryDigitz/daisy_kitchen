import { workers } from "../data";
import { Title } from "./exportComp";
import SocialMedia from "./ui/SocialMedia";

function About() {
  return (
    <section className="p-5">
      <div className=" relative about-content text-[var(--black-color2)] ">
        <div className="pt-[var(--md-padding)]">
          <Title text1="ABOUT" text2="US" size="heading2" />
        </div>
        <div className=" px-[var(--sm-padding)] lg:w-[90%] mb-14 mx-auto py-[var(--sm-padding)] rounded-md shadow-md">
          <div className="">
            <p className="paragraph1 px-1 lg:text-center">
              It all began in a tiny kitchen with a simple dream to share the
              warmth of homemade pastries with our community. What started as a
              weekend pop-up quickly grew into the cozy bakery you know today.
            </p>
          </div>

          <div className=" bg-gradient-to-t from-red-50 to-green-50 py-3 my-4">
            <h2 className="text-center subheading text-[var(--black-color2)] my-[var(--md-margin)]">
              What Makes Us Special
            </h2>
            <ul className="paragraph1 border lg:w-[60%] mx-auto py-3">
              <li className="">
                <strong className="text-red-950">
                  Fresh, Handcrafted Goodness
                </strong>{" "}
                – Everything is baked fresh daily in-house.
              </li>
              <li className="py-2">
                <strong className="text-red-950">Seasonal Flavors</strong> – We
                embrace the seasons with a rotating menu.
              </li>
              <li className="">
                <strong className="text-red-950">Community First</strong> –
                Supporting local farmers and giving back to the community.
              </li>
            </ul>
          </div>
        </div>
        <Title text1="OUR" text2="TEAM" size="heading3" />
        <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-5 py-[var(--lg-padding)]">
          {workers.map((worker, index) => {
            return (
              <div
                key={index}
                className="h-[400px]  w-[300px] lg:w-[400px] lg:h-[450px] border p-2 backdrop shadow-md rounded-md"
              >
                <span className="bg-black h-[250px] w-[250px] rounded-full block mx-auto overflow-hidden -translate-y-2">
                  <img src="./homeIcons/cutting rice.png" alt="Baker 1" />
                </span>
                <div className="text-center">
                  <div>
                    <h3 className="heading4">{worker.name}</h3>
                    <p className="paragraph2">{worker.title}</p>
                    <p className="paragraph2">{worker.qualifications}</p>
                    <div className="flex gap-2 justify-center items-center py-2">
                      <SocialMedia />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3">
          <h2 className="text-indigo-950">Visit Us</h2>
          <p className="paragraph2 text-gray-700">
            Come for the pastries, stay for the warm smiles and the smell of
            fresh bread in the air. We can’t wait to welcome you!
          </p>
          <a href="#" className="btn button1 underline text-indigo-600">
            Find Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
