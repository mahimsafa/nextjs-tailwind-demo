import type { NextPage } from 'next'
import { useState } from 'react'

const Search: NextPage = () => {
    const [search, setSearch] = useState({
        keyword: '',
        featuredtopic: 0,
        type: 0,
        category: 0,
        trendingtopic: 0,
        morefilters: 0,
    })

    const handleChanges = (e: any) => {
        const { name, value } = e.target
        setSearch({ ...search, [name]: value })
    }

    const clearSearch = () => {
        setSearch({
            // keyword: '',
            ...search,
            featuredtopic: 0,
            type: 0,
            category: 0,
            trendingtopic: 0,
            morefilters: 0,
        })
    }
    
    return (
        <div className='container mx-auto mb-10'>
            <div className='search flex items-center justify-center py-10'>
                <input type="text"
                    className='w-full outline-none h-20 placeholder:text-[2.5rem] border-b-4 px-2'
                    placeholder='Search keywords...'
                    size={40}
                    name='keyword'
                    onChange={handleChanges}
                     />
            </div>

            {/* filters */}
            <p className='text-xl m-2'>Filter by:</p>
            <div className='flex gap-4 w-full flex-wrap justify-between'> 
                <select 
                className='p-2 pr-6 border-2 flex-grow rounded-xs bg-white text-xl text-gray-600 outline-gray-600'
                value={search.featuredtopic}
                name='featuredtopic'
                onChange={handleChanges}
                >
                    <option value={0} >Featured Topics</option>
                    <option value={1}>Topic 1</option>
                    <option value={2}>Topic 2</option>
                </select>
                <select 
                className='p-2 flex-grow pr-6 border-2 rounded-xs bg-white text-xl text-gray-600'
                value={search.type}
                name='type'
                onChange={handleChanges}
                >
                    <option value={0}>Type</option>
                    <option value={1}>Type 1</option>
                    <option value={2}>Type 2</option>
                </select>
                <select 
                className='p-2 flex-grow pr-6 border-2 rounded-xs bg-white text-xl text-gray-600'
                value={search.category}
                name='category'
                onChange={handleChanges}
                >
                    <option value={0}>Category</option>
                    <option value={1}>Category 1</option>
                    <option value={2}>Category 2</option>
                </select>
                <select 
                className='p-2 flex-grow pr-6 border-2 rounded-xs bg-white text-xl text-gray-600'
                value={search.trendingtopic}
                name='trendingtopic'
                onChange={handleChanges}
                >
                    <option value={0}>Trending Topics</option>
                    <option value={1}>Topic 1</option>
                    <option value={2}>Topic 2</option>
                </select>
                <select 
                className='p-2 flex-grow pr-6 border-2 rounded-xs bg-white text-xl text-gray-600'
                value={search.morefilters}
                name='morefilters'
                onChange={handleChanges}
                >
                    <option value={0}>More Filters</option>
                    <option value={1}>Filter 1</option>
                    <option value={2}>Filter 2</option>
                </select>
            </div>
            <div className='w-full flex justify-end my-3'>
                <button className='bg-blue-500 py-3 px-8 rounded-sm text-white' onClick={clearSearch}>Clear all filters</button>
            </div>
        </div>
    )
}

export default Search
