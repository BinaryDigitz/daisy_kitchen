

function TestimonialCard() {
  return (
    <section className="flex flex-col gap-3 mt-[var(--md-margin)] shadow-sm h-[300px] lg:h-[350px] w-[100%] p-5 border bg-white rounded-xl ">
      <div className="border size-14 lg:size-16 mx-auto rounded-full bg-red-200">
          <img src="" alt="" />
      </div>
      <p className="text-center border bg-gradient-to-tr from-white to-red-50 flex flex-col rounded-md shadow-md p-5 py-8 lg:py-10 lg:h-[200px] lg:text-[18px] ">
        <strong className="paragraph1 text-[var(--primary-color)] opacity-70">John Doe</strong>
        <span className="paragraph1 text-[var(--black-color)] opacity-80">Delicious good quality food. all freshly cooked. Good choice of hot meals and salads with huge range of deserts.</span>
      </p>
    </section>
  )
}

export default TestimonialCard
