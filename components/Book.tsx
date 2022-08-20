import type { NextPage } from 'next'
import Image from 'next/image'

type Item = {
  item: {
    title: string
    description: string
    image: string
    category: string
  }
}

const Book: NextPage<Item> = ({ item:{image,description,title, category} }) => {
  return (
    <div className='w-[23rem] h-[32rem] rounded-md overflow-hidden flex-shrink-0 snap-center'>
      <div className='w-full h-3/6 relative' >
        <Image src={image} layout='fill' alt={title} />
      </div>
      <div className='flex flex-col gap-2 mt-5'>
        <p className='text-[1.5rem] font-semibold'>{title}</p>
        <p className='text-xl text-blue-500 uppercase'>{category}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Book