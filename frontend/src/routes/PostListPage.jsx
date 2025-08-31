import React, { useState } from 'react'
import PostList from '../components/PostList'
import SideMenu from '../components/SideMenu'

const PostListPage = () => {

    const [open, setOpen] = useState(false)
    return (
        <div >
            <h1 className="mb-8  text-2xl font-semibold">Development Blog</h1>

            <button
                onClick={() => setOpen((prev) => !prev)}
                className='px-6 py-2 mb-8 shadow-md rounded-2xl text-sm text-white bg-blue-600 w-max hover:bg-blue-700 md:hidden'>{open ? 'Close' : 'Filter or Search'}</button>
            <div className='flex flex-col-reverse gap-8 md:flex-row'>
                <div className="">
                    <PostList />
                </div>
                <div className={`${open ? 'block':'hidden'} md:block`}>
                    <SideMenu />
                </div>

            </div>
        </div>
    )
}

export default PostListPage
