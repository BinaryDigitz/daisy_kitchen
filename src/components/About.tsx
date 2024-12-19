

function About() {
  return (
    <section >
        <div className=" relative about-content text-[var(--black-color2)]  rounded-xl shadow-lg green_bg ">
          <img src="./photos/eggSalad.jpg" className='absolute  top-0 opacity-30 size-full object-cover' alt="" />
           <div className='p-5'>
            <h1 className='text-center text-2xl p-5 text-[var(--secondary-color)] font-bold '>About Us</h1>
              <div className='md:flex justify-between items-center gap-4 lg:w-[90%] mx-auto'>
                <p className='border p-5 shadow-md leading-5 text-sm md:text-[16px] h-[250px] md:w-[80%] py-[15%] py-5 md:py-20 relative'>
                  <span className='absolute top-3 size-12 md:size-16 bg-red-500 shadow-md'>hello</span>
                  Welcome to <strong>Daisy kitchen</strong>, where passion meets flavor! Established in 2017, we’ve been dedicated to bringing our community the finest handcrafted baked goods. From artisan breads and delicate pastries to custom cakes for every occasion, we bake with love and the freshest ingredients.</p>
                <p className='border p-5 py-6 leading-6 shadow-md text-sm md:text-[16px] my-4 h-[200px] md:h-[250px] md:w-[80%] py-[15%] md:py-20 relative'>
                <span className='absolute top-3  size-12 md:size-16  bg-red-500 shadow-md'>hello</span>
                  We started as a small family venture has blossomed into a beloved neighborhood bakery. Our team of skilled bakers and pastry chefs pour their creativity into every bite, ensuring every treat is as beautiful as it is delicious.</p>
              </div>
              <h2>Our Philosophy</h2>
              <p>We believe in quality, authenticity, and happiness in every bite. That’s why we use locally-sourced ingredients and traditional baking methods to craft treats that are not just food but experiences.</p>

              <h2>Meet the Team</h2>
              <ul>
                  <li><strong>Jane Doe</strong> - Founder & Head Baker</li>
                  <li><strong>John Smith</strong> - Pastry Chef</li>
                  <li><strong>Emily Rose</strong> - Cake Artist</li>
              </ul>
              
              <h2>Why Choose Us?</h2>
              <ul>
                  <li>Freshly baked goods daily</li>
                  <li>Custom cakes for every celebration</li>
                  <li>Local, high-quality ingredients</li>
                  <li>Friendly and warm atmosphere</li>
              </ul>
           </div>
        </div>
    </section>

  )
}

export default About
