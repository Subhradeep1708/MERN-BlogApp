import Image from '../components/Image'
import { Link } from 'react-router-dom'
import PostMenuActions from '../components/PostMenuActions'
import Search from '../components/Search'
import Comments from '../components/Comments'

const SinglePostPage = () => {
    return (
        <div className='grid gap-8'>
            {/* detail */}
            <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 gap-8 px-4 md:px-0 md:pr-12">
                    <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                    <div className="flex items-center gap-2 my-4 text-gray-400 text-sm">
                        <span>Written By:</span>
                        <Link className='text-blue-800'>John Doe</Link>
                        <span>On</span>
                        <Link className='text-blue-800'>Web Design</Link>
                        <span>2 days</span>
                    </div>
                    <p className=' text-gray-600 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quo adipisci minus dignissimos cum accusantium quisquam voluptatum magni? Omnis nemo, harum soluta suscipit inventore sunt molestias quae iusto quos amet.</p>
                </div>

                <div className='hidden md:block md:col-span-2 text-justify mt-4'>
                    <Image
                        src='postImg.jpeg'
                        className='object-cover rounded-tr-2xl rounded-bl-2xl '
                        w='600'
                    />
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae enim natus voluptate, porro esse nesciunt velit! Consectetur optio fugiat nihil accusamus, officia maxime? Facere est eveniet quia reprehenderit quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias assumenda laudantium consequatur quia sapiente quisquam id. Accusamus, nesciunt sit architecto praesentium itaque, ab ipsam voluptatem distinctio minima, quis ut.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae enim natus voluptate, porro esse nesciunt velit! Consectetur optio fugiat nihil accusamus, officia maxime? Facere est eveniet quia reprehenderit quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias assumenda laudantium consequatur quia sapiente quisquam id. Accusamus, nesciunt sit architecto praesentium itaque, ab ipsam voluptatem distinctio minima, quis ut.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae enim natus voluptate, porro esse nesciunt velit! Consectetur optio fugiat nihil accusamus, officia maxime? Facere est eveniet quia reprehenderit quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias assumenda laudantium consequatur quia sapiente quisquam id. Accusamus, nesciunt sit architecto praesentium itaque, ab ipsam voluptatem distinctio minima, quis ut.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae enim natus voluptate, porro esse nesciunt velit! Consectetur optio fugiat nihil accusamus, officia maxime? Facere est eveniet quia reprehenderit quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias assumenda laudantium consequatur quia sapiente quisquam id. Accusamus, nesciunt sit architecto praesentium itaque, ab ipsam voluptatem distinctio minima, quis ut.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae enim natus voluptate, porro esse nesciunt velit! Consectetur optio fugiat nihil accusamus, officia maxime? Facere est eveniet quia reprehenderit quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias assumenda laudantium consequatur quia sapiente quisquam id. Accusamus, nesciunt sit architecto praesentium itaque, ab ipsam voluptatem distinctio minima, quis ut.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae enim natus voluptate, porro esse nesciunt velit! Consectetur optio fugiat nihil accusamus, officia maxime? Facere est eveniet quia reprehenderit quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias assumenda laudantium consequatur quia sapiente quisquam id. Accusamus, nesciunt sit architecto praesentium itaque, ab ipsam voluptatem distinctio minima, quis ut.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae enim natus voluptate, porro esse nesciunt velit! Consectetur optio fugiat nihil accusamus, officia maxime? Facere est eveniet quia reprehenderit quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias assumenda laudantium consequatur quia sapiente quisquam id. Accusamus, nesciunt sit architecto praesentium itaque, ab ipsam voluptatem distinctio minima, quis ut.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae enim natus voluptate, porro esse nesciunt velit! Consectetur optio fugiat nihil accusamus, officia maxime? Facere est eveniet quia reprehenderit quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias assumenda laudantium consequatur quia sapiente quisquam id. Accusamus, nesciunt sit architecto praesentium itaque, ab ipsam voluptatem distinctio minima, quis ut.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae enim natus voluptate, porro esse nesciunt velit! Consectetur optio fugiat nihil accusamus, officia maxime? Facere est eveniet quia reprehenderit quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias assumenda laudantium consequatur quia sapiente quisquam id. Accusamus, nesciunt sit architecto praesentium itaque, ab ipsam voluptatem distinctio minima, quis ut.
                    </p>
                </div>
                {/* menu */}
                <div className="px-4 h-max sticky top-4">
                    <h1 className='mb-4 text-sm font-medium'>Author</h1>
                    <div className="flex flex-col gap-4 ">

                        <div className='flex items-center gap-6'>
                            <Image src='postImg.jpeg' className='rounded-full h-12 w-12 object-cover'
                                w='48'
                                h='48'
                            />
                            <Link className='text-blue-800 font-semibold'>John Doe</Link>
                        </div>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        <div className="flex gap-2">
                            <Link>
                                <Image src="facebook.svg" className='w-8 ' />
                            </Link>
                            <Link>
                                <Image src="instagram.svg" className='w-8 ' />
                            </Link>
                        </div>
                    </div>
                    <PostMenuActions />
                    {/* categories */}
                    <h1 className='mt-4 mb-4 text-sm font-medium'>Categories</h1>
                    <div className="flex flex-col gap-2 text-sm text-blue-500 ">
                        <Link className='underline hover:text-blue-700'>
                            All
                        </Link>
                        <Link className='underline hover:text-blue-700'>
                            Web Design
                        </Link>
                        <Link className='underline hover:text-blue-700'>
                            Development
                        </Link>
                        <Link className='underline hover:text-blue-700'>
                            Databases
                        </Link>
                        <Link className='underline hover:text-blue-700'>
                            Search Engines
                        </Link>
                        <Link className='underline hover:text-blue-700'>
                            Marketing
                        </Link>
                    </div>
                    <div className="mb-4">

                        <h1 className='mt-4 mb-4 text-sm font-medium'>Search</h1>
                        <Search />
                    </div>
                </div>
            </div>

            <Comments />
        </div>
    )
}

export default SinglePostPage
