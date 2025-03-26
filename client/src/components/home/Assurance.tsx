

function Assurance() {
  return (
    <section className="relative  flex items-center text-[var(--white-color)] h-80 lg:h-[400px] bg-[rgba(000,000,000)]">
        <div className="absolute top-0 right-0 md:static  size-full overflow-hidden bg-[rgba(000,000,000)]">
            <img src="./homeIcons/flour and egg.png" className="h-ful object-cover  opacity-50" alt="" />
        </div>
        <div className="p-4 z-10 lg:px-14 ">
            <h2 className=" heading2 agu-font opacity-80 pt-[var(--sm-padding)]">QUALITY ASSURANCE</h2>
            <h3 className="heading3 font-bold pb-[var(--sm-padding)] text-[var(--warning-color)]">WE "INVEST" IN QUALITY!</h3>
            <p className="paragraph1 lg:w-[90%] opacity-80 ">
                At Daisy's kitchen, our primary concern is ensuring consistent quality accross our entire products and compliance with health and safty requirements in every step of the process from production to distribution.
            </p>
        </div>
        
    </section>
  )
}

export default Assurance
