

function Assurance() {
  return (
    <section className="relative  flex items-center text-[var(--white-color)] h-80 lg:h-[400px]">
        <div className="p-4 z-10 lg:px-14">
            <h2 className=" text-2xl lg:text-3xl agu-font opacity-80 py-2">QUALITY ASSURANCE</h2>
            <h3 className="text-2xl lg:text-3xl font-bold pb-3 text-[var(--warning-color)]">WE "INVEST" IN QUALITY!</h3>
            <p className="lg:text-lg lg:w-[90%] opacity-80 ">
                At Daisy's kitchen, our primary concern is ensuring consistent quality accross our entire products and compliance with health and safty requirements in every step of the process from production to distribution.
            </p>
        </div>
        <div className="absolute top-0 right-0 md:statc  size-full overflow-hidden bg-[rgba(000,000,000)]">
          <img src="./photos/cup_cake/British maffia.jpg" className="h-ful object-cover  opacity-50" alt="" />
        </div>
    </section>
  )
}

export default Assurance
