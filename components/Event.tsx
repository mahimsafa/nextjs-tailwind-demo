import type { NextPage } from 'next'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import { GoLocation } from 'react-icons/go'

type Item = {
  item: {
    title: string
    time: string
    location: string
    description: string
    image: string
  }
}

const Event: NextPage<Item> = ({ item: { title, time, location, description, image } }) => {
  const temp = time.split(' ')
  const month = temp[0]
  const date = temp[1]
  return (
    <div className='w-[27rem] h-[35rem] rounded-md overflow-hidden flex-shrink-0 snap-center'>
      <div className='w-full h-3/6 relative' >
        <Image src={image} layout='fill' alt={title} priority={false} />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row justify-between'>
          <p className='text-[1.5rem] font-semibold mt-4'>{title}</p>
          <div className='bg-blue-700/75 w-20 h-24 flex flex-col justify-center items-center p-5'>
            <p className='text-white text-[1.5rem]'>{month}</p>
            <p className='text-white text-[2.5rem] -mt-2'>{date}</p>
          </div>
        </div>
        <p className='text-xl text-blue-500 uppercase flex flex-row items-start gap-2'>
          <IconContext.Provider value={{ size: '1.5rem', style: { fontWeight: 'bold' } }}>

            <GoLocation />
          </IconContext.Provider>
          {location}</p>
        <p>{description}</p>
        <div className='flex flex-row justify-between'>
          <p className='hover:cursor-pointer text-blue-400 text-[1.4rem] uppercase'>Book now </p>
          <p className='hover:cursor-pointer  text-[1.4rem] uppercase underline'>more info</p>
        </div>
      </div>
    </div>
  )
}

export default Event