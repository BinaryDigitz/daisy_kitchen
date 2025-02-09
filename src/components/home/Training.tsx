import { Link } from "react-router-dom"


function Training() {
    const bakeryServcies = [
        {objective: 'Baking Fundamentals',
          image:'./homeIcons/cutting rice.png',
         description: [
            'Learn the basics of baking with simple, yet essential techniques.',
            'Master doughs, batters, and icings.',
            'Introduction to cake decorating and bread-making.'
         ]
        },
        {objective: 'Specialty Courses',
          image:'./homeIcons/flour and egg.png',
         description: [
            'Advanced Pastries: Croissants, Danish, and other delicate pastries',
            'Cake Decorating: Techniques to design beautiful cakes for any occasion.',
            'Bread Baking: Explore different types of bread, from sourdough to baguettes.',
            'Cupcake and Cookie Decorating: Fun and creative ways to make your baked goods stand out!',
         ]
        },
        {objective: 'Private & Group Classes',
          image:'./homeIcons/rice_bag.png',
         description: [
            'Private One-on-One Sessions: Tailored lessons for personal interests and needs',
            'Group Classes: Learn in a fun, collaborative environment with friends or family.',
            
         ]
        },
    ]
  return (
    <section className="min-h-screen">
      <div className=" p-4 py-8">
        <h2 className="heading2 text-center  text-[var(--secondary-color)]">Our Baking Classes</h2>
        <h3 className="heading3 text-center  text-[var(--black-color1)] opacity-80">Discover the Art of Baking with Expert Guidance.</h3>
        <p className="paragraph1 text-center text-[var(--black-color1)]">Whether you're a complete beginner or an experienced baker, our hands-on classes are designed for everyone to master baking techniques, recipes, and creative skills!</p>
      </div>
      <h4 className="heading2 text-center text-[var(--black-color2)]">What we Offer</h4>
      <hr className=" py-4 border-[var(--black-color)] w-4/5 mx-auto" />
      {
        bakeryServcies.map((service, index) =>{
            return <div key={index} className="backdrop relative lg:w-[80%] mx-auto p-4 lg:px-10 bg-black py-[var(--md-padding)] border rounded-md shadow-md my-4">
              <span className="overflow-hidden absolute  top-0 bottom-0 right-0 left-0 opacity-20 bg-black">
                <img src={service.image} className="" alt="" />
              </span>
                <div>
                <h5 className="heading3 text-[var(--warning-color)] py-[var(--sm-padding)] ">{service.objective}</h5>
       <ul>
        {
            service.description.map((item, index) =>{
                return <li key={index} className="paragraph1 list-disc text-[var(--white-color)] mx-3">{` ${item}`}</li>
            })
        }
       </ul>
                </div>
            </div>
        })
      }
     <Link to='/contact' className="grid py-[var(--md-padding)]">
     <button className="button1 bg-[var(--black-color)] hover:opacity-80 trans text-[var(--warning-color)] p-3 px-8 rounded-md mx-auto">Book now!!</button>
     </Link>
      
    </section>
  )
}

export default Training
