import Image from './Image'
import { Link } from 'react-router-dom'

const PostListItem = () => {
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-8 px-4 md:px-0'>
            {/* image */}
            <div className="w-full ">
                <Image src='postImg.jpeg' className='w-full h-auto rounded-tr-2xl rounded-bl-2xl object-cover' w='700'/>
            </div>
            {/* details */}
            <div className="flex flex-col gap-4">
                <Link to='/test' className='text-4xl font-semibold'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written By:</span>
                    <Link className='text-blue-800'>John Doe</Link>
                    <span>On</span>
                    <Link className='text-blue-800'>Web Design</Link>
                    <span>2 days</span>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas blanditiis officia aliquid molestiae. Totam harum nihil voluptate eaque aspernatur dicta quaerat error vitae cum. Architecto perspiciatis tempora error ab animi?</p>
                <div>
                    <Link to='/test' className='text-blue-800 underline text-sm'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default PostListItem
