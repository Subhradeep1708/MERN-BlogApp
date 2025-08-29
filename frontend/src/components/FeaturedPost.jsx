import { Link } from 'react-router-dom'
import Image from './Image'


const FeaturedPost = () => {
  return (
    <div className='grid md:grid-cols-2 mt-8 gap-8'>
      {/* Left first post */}
      <div className="w-full">
        {/* image */}
        <Image src='/featured1.jpeg' className='rounded-3xl object-cover w-full ' />
        {/* detail */}
        <div className="flex items-center gap-4 my-4">
          <h1 className='font-semibold lg:text-lg'>01.</h1>
          <Link className='text-blue-800 lg:text-lg'>Web Designs</Link>
          <span className='text-gray-500'>2 days ago</span>
        </div>
        {/* title */}
        <Link to='/test' className='text-xl lg:text-3xl font-semibold lg:font-bold' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
      </div>
      {/* Others right posts */}
      <div className="gap-4 flex flex-col ">
        {/* second image */}
        <div className="lg:h-1/3 flex justify-between gap-4 ">
          <Image src='/featured2.jpeg' className='rounded-3xl object-cover w-1/3 aspect-video' />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base">
              <h1 className='font-semibold'>02.</h1>
              <Link className='text-blue-800'>Web Designs</Link>
              <span className='text-gray-500 text-sm'>2 days ago</span>
            </div>
            {/* title */}
            <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold lg:font-bold'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* third image */}
        <div className="lg:h-1/3 flex justify-between gap-4 ">
          <Image src='/featured3.jpeg' className='rounded-3xl object-cover w-1/3 aspect-video' />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base">
              <h1 className='font-semibold'>02.</h1>
              <Link className='text-blue-800'>Web Designs</Link>
              <span className='text-gray-500 text-sm'>2 days ago</span>
            </div>
            {/* title */}
            <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold lg:font-bold'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* fourth image */}
        <div className="lg:h-1/3 flex justify-between gap-4 ">
          <Image src='/featured4.jpeg' className='rounded-3xl object-cover w-1/3 aspect-video' />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base">
              <h1 className='font-semibold'>02.</h1>
              <Link className='text-blue-800'>Web Designs</Link>
              <span className='text-gray-500 text-sm'>2 days ago</span>
            </div>
            {/* title */}
            <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold lg:font-bold'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost
