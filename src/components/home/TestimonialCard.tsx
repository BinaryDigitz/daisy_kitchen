const testimonies =[
    {image: 'image1.jpg', name: 'John Doe', testimony: 'Delicious good quality food. all freshly cooked. Good choice of hot meals and salads with huge range of deserts.'},
    {image: 'image2.jpg', name: 'Jane Doe', testimony: 'Delicious good quality food. all freshly cooked. Good choice of hot meals and salads with huge range of deserts.'},
    {image: 'image3.jpg', name: 'John Smith', testimony: 'Delicious good quality food. all freshly cooked. Good choice of hot meals and salads with huge range of deserts.'},
    {image: 'image4.jpg', name: 'Jane Smith', testimony: 'Delicious good quality food. all freshly cooked. Good choice of hot meals and salads with huge range of deserts.'},
    {image: 'image5.jpg', name: 'John Doe', testimony: 'Delicious good quality food. all freshly cooked. Good choice of hot meals and salads with huge range of deserts.'},
]

function TestimonialCard() {
  return (
    <section className="flex flex-col gap-3  h-[300px] w-[100%] text-[var(--white p-5 rounded-xl ">
      <div className="border h-14 mx-auto">image</div>
      <p className="text-center flex flex-col rounded-md shadow-md p-5 py-8 lg:py-10 lg:text-[18px] bg-[var(--primary-tone-color)]">
        <strong className="text-[var(--black-color)]">John Doe</strong>
        <span>Delicious good quality food. all freshly cooked. Good choice of hot meals and salads with huge range of deserts.</span>
      </p>
    </section>
  )
}

export default TestimonialCard
