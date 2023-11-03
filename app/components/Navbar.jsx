import Image from 'next/image'

const Navbar = () => {
  return (
    <div className=''>
      <div className='flex justify-center sm:justify-start items-center bg-banner-bg w-full h-48 bg-cover bg-no-repeat object-cover bg-center sm:relative'>
        <div className='backdrop bg-white p-8 rounded-md sm:left-16 sm:absolute sm:w-[700px]'>
          <h1 className='text-3xl text-[#3F2107] font-bold sm:text-5xl sm:my-2 sm:font-normal'>
            The Big Cup .
          </h1>
          <p>Where taste meets imagination</p>
        </div>
      </div>
      <nav className='bg-slate-400'>Navbar</nav>
    </div>
  )
}
export default Navbar
