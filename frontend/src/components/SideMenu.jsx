import { Link } from 'react-router-dom'
import Search from '../components/Search'
const SideMenu = () => {
    return (
        <div className='px-4 h-max sticky top-8'>
            <h1 className='mb-4 text-sm font-semibold'>Search</h1>
            <Search />
            <h1 className='mt-8 mb-4 text-sm font-semibold'>Filters</h1>
            <div className='flex flex-col gap-2 text-sm'>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input
                        type="radio"
                        name="sort"
                        value="newest"
                        id=""
                        className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800'
                    />
                    Newest
                </label>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input
                        type="radio"
                        name="sort"
                        value="popular"
                        id=""
                        className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800'
                    />
                    Most Popular
                </label>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input
                        type="radio"
                        name="sort"
                        value="trending"
                        id=""
                        className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800'
                    />
                    Trending
                </label>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input
                        type="radio"
                        name="sort"
                        value="oldest"
                        id=""
                        className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800'
                    />
                    Oldest
                </label>

            </div>

            <h1 className='mt-4 mb-4 text-sm font-semibold'>Categories</h1>
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
        </div>
    )
}

export default SideMenu
