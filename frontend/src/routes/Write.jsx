import { useUser } from '@clerk/clerk-react'
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new'

const Write = () => {

    const { isLoaded, isSignedIn } = useUser()

    if (!isLoaded) {
        return <div className="">Loading...</div>
    }
    if (isLoaded && !isSignedIn) {
        return <div className="">You have to Login to write a Blog!</div>
    }
    return (
        <div className='px-4 sm:px-0 h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
            <h1 className='text-gray-600 text-2xl  xl:text-2xl font-semibold'>
                Create a New Post
            </h1>
            <form className='flex flex-col gap-6 flex-1 mb-6' >
                <button className='px-6 py-2 shadow-md rounded-xl text-sm text-white bg-blue-600 w-max hover:bg-blue-700'>Add a Cover Picture</button>
                <input type="text" placeholder='My Awesome Blog Title' 
                className='text-2xl md:text-4xl font-semibold bg-transparent outline-none'
                />
                <div className="flex items-center gap-2 md:gap-6">
                    <label htmlFor="" className='text-md'>Choose a Category:</label>
                    <select name="cat" id="" className='rounded-xl p-2 bg-white shadow-md outline-none'>
                        <option className='' value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="databases">Databases</option>
                        <option value="search">Search Engines</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                <textarea className='rounded-xl p-4 bg-white shadow-md outline-none' name="desc" id="" placeholder='A short Description'></textarea>
                <ReactQuill theme="snow" className='flex-1 rounded-xl p-2 bg-white shadow-md outline-none border-none'/>
                <button className='px-6 py-2 shadow-md rounded-xl text-sm text-white bg-blue-600 w-max hover:bg-blue-700'>Post</button>
            </form>
        </div>
    )
}

export default Write
