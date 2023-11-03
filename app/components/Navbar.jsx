import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className=''>
      <div className='flex justify-center  items-center bg-banner-bg w-full h-48 bg-cover bg-no-repeat object-cover bg-center sm:relative sm:justify-start'>
        <div className='backdrop bg-white p-8 rounded-md sm:left-16 sm:absolute lg:w-[600px]'>
          <h1 className='text-3xl text-primary font-bold sm:text-5xl sm:my-2 sm:font-normal'>
            The Big Cup .
          </h1>
          <p>Where taste meets imagination</p>
        </div>
      </div>
      <nav className='bg-slate-400 sm:bg-orange-500 md:bg-yellow-700 lg:bg-green-100 flex justify-end p-2 sm:p-4 sm:justify-between '>
        <ul className='hidden sm:flex sm:space-x-5 sm:pl-20 '>
          <li>HOME</li>
          <li>ABOUT US</li>
        </ul>
        <div className='sm:hidden'>
          <AiOutlineMenu size={32} />
        </div>
      </nav>
    </div>
  )
}
export default Navbar
