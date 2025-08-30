import React from 'react'
import Comment from './Comment'

const Comments = () => {
    return (
        <div className='flex flex-col gap-8 lg:w-3/5'>
            <h1 className='text-xl text-gray-500 font-semibold'>Comments</h1>
            <div className="flex items-center justify-between gap-8">
                <textarea placeholder='Write a Comment...'
                    className='w-full rounded-xl p-4 outline-none'
                />
                <button
                    className='bg-blue-800 text-white py-3 px-4 rounded-xl font-medium'
                >Send</button>
            </div>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    )
}

export default Comments
