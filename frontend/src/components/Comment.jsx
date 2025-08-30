import Image from './Image'

const Comment = () => {
    return (
        <div className='bg-slate-50 p-4 rounded-xl'>
            <div className='flex items-center gap-4 '>
                <Image src='postImg.jpeg' className='rounded-full h-10 w-10 object-cover'
                    w='40'
                    // h='40'
                />
                <span className='text-blue-800 font-medium'>John Doe</span>
                <span className='text-gray-500 text-sm'>2 days ago</span>
            </div>
            <div className="mt-4">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel itaque dolores, maiores magnam quisquam voluptatem tempore tempora blanditiis repellendus, officia molestiae voluptas nihil nisi ut exercitationem aperiam excepturi minima?</p>
            </div>
        </div>
    )
}

export default Comment
