import { Link } from "react-router-dom";
import { Title } from "../exportComp";

function Training() {
  const bakeryServcies = [
    {
      objective: "Baking Fundamentals",
      image: "./homeIcons/cutting rice.png",
      description: [
        "Learn the basics of baking with simple, yet essential techniques.",
        "Master doughs, batters, and icings.",
        "Introduction to cake decorating and bread-making.",
      ],
    },
    {
      objective: "Specialty Courses",
      image: "./homeIcons/flour and egg.png",
      description: [
        "Advanced Pastries: Croissants, Danish, and other delicate pastries",
        "Cake Decorating: Techniques to design beautiful cakes for any occasion.",
        "Bread Baking: Explore different types of bread, from sourdough to baguettes.",
        "Cupcake and Cookie Decorating: Fun and creative ways to make your baked goods stand out!",
      ],
    },
  ];
  return (
    <section className="min-h-screen">
      <div className=" p-4 py-8">
        <Title text1="CATHERING" text2="CLASSES" size="heading3" />
        <h3 className="text-center text-gray-700 subheading">
          Discover the Art of Baking with Expert Guidance.
        </h3>
      </div>
      <div className=" w-full flex flex-col md:flex-row">
        {/* LEFT SIDE */}
        <div className="md:w-1/2">
          <div className=" relative group w-full bg-whit p-3 trans">
            <img
              src="./homeIcons/flour and egg.png"
              alt=""
              className="min-h-[400px] object-cover shadow-lg shadow-gray-300 bg-black border-gray-500 w-[90%] lg:w-[370px] rounded-lg mx-auto bg-red-00"
            />
            <div className="w-full">
              <div className="flex gap-1 w-1/2 mx-auto my-3.5 justify-center">
                <p className="size-4  rounded-full bg-gray-400"></p>
                <p className="size-4 w-8 rounded-full bg-gray-400"></p>
                <p className="size-4  rounded-full bg-gray-400"></p>
                <p className="size-4  rounded-full bg-gray-400"></p>
                <p className="size-4  rounded-full bg-gray-400"></p>
              </div>
            </div>
            <span className="absolute hidden group-hover:grid cursor-pointer place-items-center bottom-1/2 left-2  lg:left-[18%] bg-red-50 w-14 h-8 rounded-md shadow shadow-gray-200">
              L
            </span>
            <span className="absolute hidden group-hover:grid cursor-pointer place-items-center bottom-1/2 right-3 lg:right-[18%] bg-red-50 w-14 h-8 rounded-md shadow shadow-gray-200">
              R
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className=" md:w-1/2  p-3 bg-gradient-to-t from-red-50 to-green-50">
          <p className="paragraph1 shadow-md shadow-gray-200  text-start mt-2 text-red-950  text-[var(--black-color1)]">
            Whether you're a complete beginner or an experienced baker, our
            hands-on classes are designed for everyone to master baking
            techniques, recipes, and creative skills!
          </p>
          <h4 className="heading3 my-3 text-[var(--black-color)]">
            What we Offer
          </h4>
          {bakeryServcies.map((service, index) => {
            return (
              <div key={index} className="backdrop relative  bg-gradient-to-t from-red-50 to-green-50 ">
                <hr className="my-6 border-red-300" />
                <div>
                  <h5 className="heading4 text-black opacity-75 z-100  ">
                    {service.objective}
                  </h5>
                  <ul className="px-2 b-red-50">
                    {service.description.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="paragraph1 list-disc text-black-700 mx-3"
                        >{` ${item}`}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Link to="/contact" className="grid place-content-center">
        <button className="py-3 px-6 border rounded-md my-14 hover:bg-[var(--primary-color)] hover:text-white text-red-950 border-red-300 shadow-lg font-medium   shadow-red-100 trans">
          Book your spot
        </button>
      </Link>
    </section>
  );
}

export default Training;
