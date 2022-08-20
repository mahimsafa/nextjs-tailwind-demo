import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { IconContext } from 'react-icons'
import { BsArrowRightCircle } from 'react-icons/bs'

type Item = {
    item: {
        image: string
        time: string
        title: string
        author: string
        description: string
        id: Number
    }
}

const Articles: NextPage<Item> = ({item:{image,title,time,author,description,id}}) => {
    return (
        <div className='container mx-auto flex items-center flex-col'>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-7/12 h-[30rem] bg-gray-300 relative flex-3'>
                    <Image src={image}
                        alt=''
                        layout='fill'
                        priority={false}
                    />
                </div>
                <div className='flex-1 mt-10 lg:mt-2 lg:ml-20 flex flex-col gap-2'>
                    <p className='text-gray-600'>{time}</p>
                    <Link href={`/article/${id}`}>

                    <p className='text-[2rem] font-semibold text-gray-700 hover:cursor-pointer'>{title}</p>
                    </Link>
                    <p className='text-gray-600 truncate'>{author}</p>
                    <p>{description}</p>
                    <Link href={`/article/${id}`}>

                    <a className='uppercase text-blue-500'>Read more</a>
                    </Link>
                </div>
            </div>
            <p className='cursor-pointer my-20 flex flex-row gap-3 items-center text-xl'>
                <IconContext.Provider value={{ size: '2rem' }}>
                    <BsArrowRightCircle />
                </IconContext.Provider>
                <span>View all articles</span>
            </p>
        </div>
    )
}

export default Articles