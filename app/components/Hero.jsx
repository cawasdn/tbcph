import Image from 'next/image'
import heroa from '../../public/images/hero-a.jpg'
import herob from '../../public/images/hero-b.jpg'
import heroc from '../../public/images/hero-c.jpg'

const Hero = () => {
  return (
    <section className='flex justify-center items-center text-center sm:'>
      <div className='bg-slate-100 w-80 mt-12'>
        <div className=' font-nav font-bold'>
          <h1 className='text-4xl font-nav'>
            Thousands of healthy, tasty recipes from all over the world!
          </h1>
        </div>
        <div className='bg-red-100 mt-10 space-y-4'>
          <p>Immerse yourself in a world of endless flavor possibilities.</p>
          <p>
            Come and join the Flavorist movement, where culinary artistry meets
            community!
          </p>
          <div>
            <button>Start</button>
            <button>Signup</button>
          </div>
        </div>
        <div>
          <div>
            <p className='hero-feature-text'>Featured by</p>
          </div>
          <div className='grid grid-cols-2 gap-3 [&>*]:bg-orange-400 [&>*]:rounded-md mt-3'>
            <p>TechCrunch</p>
            <p>Business Insider</p>
            <p>Forbes</p>
            <p>BBC</p>
          </div>
        </div>

        <div className='hidden sm:grid sm:grid-cols-2'>
          <Image
            src={heroa}
            className='hero-image-2'
            alt='Photo of an example food'
          ></Image>
          <Image
            src={herob}
            className='hero-image-2'
            alt='Photo of an example food'
          ></Image>
          <Image
            src={heroc}
            className='hero-image-2'
            alt='Photo of an example food'
          ></Image>
        </div>
      </div>
    </section>
  )
}
export default Hero
