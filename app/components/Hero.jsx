const Hero = () => {
  return (
    <section className='flex justify-center items-center text-center'>
      <div className='bg-slate-100 w-80 mt-12'>
        <div className=' font-nav font-bold'>
          <h1 className='text-4xl font-nav '>
            Thousands of healthy, tasty recipes from all over the world!
          </h1>
        </div>
        <div className='bg-red-100 mt-10'>
          <p>Immerse yourself in a world of endless flavor possibilities.</p>
          <p>
            Come and join the Flavorist movement, where culinary artistry meets
            community!
          </p>
          <button>Start</button>
          <button>Signup</button>
        </div>
      </div>
    </section>
  )
}
export default Hero
