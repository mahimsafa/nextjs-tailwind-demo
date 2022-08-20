import type { NextPage } from 'next'
import Image from 'next/image'

type Item = {
  item: {
    title: string
    description: string
    image: string
    author: string
    time: string
  }
}

const Related: NextPage<Item> = ({ item:{image,description,title, author, time} }) => {
  return (
    <div className='w-[23rem] h-[35rem] rounded-md overflow-hidden flex-shrink-0 snap-center'>
      <div className='w-full h-2/5 relative' >
        <Image src={image} layout='fill' alt={title} />
      </div>
      <div className='flex flex-col gap-2 mt-5'>
        <p className='text-[1.5rem] font-semibold'>{title}</p>
        <p className='text-justify'>{description.slice(0,-100)}</p>
        <p className='text-gray-500 text-sm mt-2'>By {author} on {time}</p>
      </div>
    </div>
  )
}

export default Related