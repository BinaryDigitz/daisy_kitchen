import { Link } from "react-router-dom";

function AboutBlog() {
  return (
    <section className=" grid place-items-center p-2 py-10  relative  text-white bg-black rounded-top">
        <div className="absolute top-0 right-0 md:statc  size-full overflow-hidden bg-black opacity-30">     
            <img src="./photos/birthday/Hennessey.jpg" alt="" />
        </div>
      <div className="z-20 flex gap-5 items-center justify-around flex-col lg:flex-row ">
        <p className="border backdrop border-[var(--black-color1)] p-5 shadow-md leading-5 text- md:text-[18px] h-[250px] md:w-[80%] py-[15%] py-5 md:py-20 relative shadow-lg rounded-md leading-6 tracking-wide">
          <span className="absolute top-3 size-12 md:size-16 bg-red-500 shadow-md">
            hello
          </span>
          Welcome to <strong>Daisy kitchen</strong>, where passion meets flavor!
          Established in 2017, we’ve been dedicated to bringing our community
          the finest handcrafted baked goods. From artisan breads and delicate
          pastries to custom cakes for every occasion, we bake with love and the
          freshest ingredients.
        </p>
        <p className='backdrop border border-[var(--black-color1)] rounded-md shadow-lg p-5 py-6 leading-6 shadow-md md:text-[18px] my-4 h-[250px] md:h-[250px] md:w-[80%] py-[15%] md:py-20 relative leading-6 tracking-wide'>
                <span className='absolute top-3  size-12 md:size-16  bg-red-500 shadow-md'>hello</span>
                  We started as a small family venture has blossomed into a beloved neighborhood bakery. Our team of skilled bakers and pastry chefs pour their creativity into every bite, ensuring every treat is as beautiful as it is delicious.</p>
              
      </div>
      <Link to="/about">
      <button className="btn border p-2 mt-8 px-4 rounded-md border-[var(--warning-color)] text-[var(--warning-color)] shadow-lg hover:coursor-pointer">See more</button>
      </Link>
    </section>
  );
}

export default AboutBlog;
