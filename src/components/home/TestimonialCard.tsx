

function TestimonialCard() {
  return (
    <section className="flex flex-col gap-3  h-[300px] w-[100%] text-[var(--white p-5 rounded-xl ">
      <div className="border h-14 mx-auto">image</div>
      <p className="text-center flex flex-col rounded-md shadow-md p-5 py-8 lg:py-10 lg:text-[18px] bg-[var(--primary-tone-color)]">
        <strong className="paragraph1 text-[var(--primary-color)] opacity-70">John Doe</strong>
        <span className="paragraph1 text-[var(--black-color)]">Delicious good quality food. all freshly cooked. Good choice of hot meals and salads with huge range of deserts.</span>
      </p>
    </section>
  )
}

export default TestimonialCard
