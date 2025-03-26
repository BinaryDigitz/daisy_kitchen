import { Link } from "react-router-dom";
import PieceCake from "../cakeISvg/PieceCake";
import { Title } from "../exportComp";

function AboutBlog() {
  return (
    <>
    <section className="bg-gradient-to-tr from-white to-red-50 grid place-items-center p-[var(--sm-padding)] py-[var(--lg-padding)]  relative   rounded-top">
      <Title text1="OUR" text2="STORY" size="heading2"/>
    <h3 className="heading3 text-[var(--warning-color)] py-[var(--sm-padding)]">OUR LITTLE STORY</h3>
        <div className="absolute top-0 right-0 md:statc size-full overflow-hidden bg-blac opacity-80 ">     
            <img src="./homeIcons/pouring flour.png" alt="" />
        </div>
      <div className="z-20 flex gap-5 items-center justify-around flex-col lg:flex-row ">
        <p className="paragraph1 border  border-[var(--black-color1)] p-5 h-[250px] md:w-[80%] py-[15%] py-5 md:py-20 pt-[5rem] relative shadow-lg rounded-lg ">
          <span className="absolute top-3 size-16 md:size-18 rounded-md overflow-hidden  bg-black shadow-md">
            <PieceCake />
          </span>
          Welcome to <strong>Daisy kitchen</strong>, where passion meets flavor!
          Established in 2017, we’ve been dedicated to bringing our community
          the finest handcrafted baked goods. From artisan breads and delicate
          pastries to custom cakes for every occasion, we bake with love and the
          freshest ingredients.
        </p>
        <p className='paragraph1 pt-[5rem] border hover:backdrop border-[var(--black-color2)] rounded-lg shadow-lg p-5 py-6  shadow-md  my-4 h-[250px] md:h-[250px] md:w-[80%] py-[15%] md:py-20 relative '>
          <span className='absolute top-3  size-16 md:size-18 shadow-md rounded-md overflow-hidden'> 
            <img src="./hero_image.jpg " alt="" />
           </span>
                  We started as a small family venture has blossomed into a beloved neighborhood bakery. Our team of skilled bakers and pastry chefs pour their creativity into every bite, ensuring every treat is as beautiful as it is delicious.</p>
              
      </div>
      <Link to="/about">
         <button className=" button1 border p-2 mt-8 px-4 rounded-md border-[var(--warning-color)] text-[var(--warning-color)] shadow-lg cursor-pointer">See more</button>
      </Link>
    </section>
    </>
  );
}

export default AboutBlog;
