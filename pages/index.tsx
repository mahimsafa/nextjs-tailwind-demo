import type { NextPage } from 'next'
import Head from 'next/head'
import { BsArrowRightCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons'

import MainLayout from '../components/layout/MainLayout'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Articles from '../components/Articles'
import Carousel from '../components/Carousel'

import { events, books, articles } from '../data'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <>
        <Head>
          <title>Test Project</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className=''>
          <Hero />
          <Search />
          <Articles item={articles[0]} />
          <Carousel title='Books & Downloads' items={books} type='book' description='Drive into some new, exciting topics or learn more about what our software has to offer. <br />Oh, and please let us know if you like us to cover anything else.' />
          <Carousel title='Events' viewall items={events} type='event' description='Drive into some new, exciting topics or learn more about what our software has to offer. <br />Oh, and please let us know if you like us to cover anything else.' />


          <div className='container mx-auto my-20 flex justify-between items-center flex-col lg:flex-row gap-6'>
            <div className='flex justify-center flex-col w-full lg:w-1/2'>
              <p className='uppercase text-[1.6rem] text-center lg:text-left'>collaborative work management</p>
              <p className='text-[4.5rem] font-bold text-center lg:text-left'>Stay Connected</p>
            </div>
            <div className='w-full lg:w-1/2'>
              <p className='text-xl text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit atque excepturi, voluptatum pariatur deserunt sequi animi omnis expedita cumque recusandae quidem magni nostrum cum nam quod harum enim quasi nihil mollitia doloremque, suscipit debitis autem, quam sed. Fuga optio, debitis, voluptas modi sed molestiae voluptate et ducimus explicabo, deleniti quam?
              </p>
              <div className='mt-12 flex flex-col lg:flex-row w-full gap-6 lg:gap-0 items-center justify-between'>
                <p className='uppercase text-[2rem] flex-grow'>subscribe now</p>
                <div className='w-full lg:w-auto flex flex-row justify-between flex-grow'>

                  <input type="email" placeholder='Enter email ' className='flex-grow outline-none border-b-2 border-gray-700' />
                  <IconContext.Provider value={{ size: '2rem' }}>

                    <BsArrowRightCircle />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MainLayout>
  )
}

export default Home
