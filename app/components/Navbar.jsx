import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
// import Logo from './favicon.png'

const Navbar = () => {
  return (
    <div className=''>
      <div className='flex justify-center  items-center bg-banner-bg w-full h-48 bg-cover bg-no-repeat object-cover bg-center sm:relative sm:justify-start'>
        <div className='backdrop bg-white p-8 rounded-md sm:left-16 sm:absolute lg:w-[600px] sm:p-6'>
          {/* <Image src={Logo} width={80} /> */}
          <h1 className='text-3xl text-primary font-bold sm:text-5xl sm:my-2 sm:font-normal'>
            The Big Cup .
          </h1>
          <p className='sm:text-2xl'>The coffee inc.</p>
          {/* <p>Where taste meets imagination</p> */}
        </div>
      </div>
      <nav className='flex justify-end p-2 pr-4  sm:p-4 sm:justify-between font-nav font-medium shadow'>
        <ul className='hidden sm:flex sm:space-x-5 sm:pl-20'>
          <Link href='/'>
            <li>HOME</li>
          </Link>
          <Link href='/aboutus'>
            <li>ABOUT US</li>
          </Link>
        </ul>

        <div className='sm:hidden'>
          <AiOutlineMenu size={32} />
        </div>
      </nav>
    </div>
  )
}
export default Navbar
