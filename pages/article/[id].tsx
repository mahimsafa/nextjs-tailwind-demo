import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BsBookmark, BsArrowRightCircle } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import CarouselSlider from '../../components/Carousel'

import { articles } from '../../data'
import MainLayout from '../../components/layout/MainLayout'

const ArticleDetail = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <MainLayout><>
            <Head>
                <title>How did van gorgus terbulent mind depicts one of the most complex concept in physics?</title>
            </Head>
            <button className='cursor-pointer container mx-auto my-16 flex space-x-4 items-center'
                onClick={() => router.back()}
            >
                <IconContext.Provider value={{ size: '2rem' }}>
                    <BsArrowRightCircle />
                </IconContext.Provider>
                <span>Go to previous page</span>
            </button>
            <div className='container mx-auto'>
                <div className='flex flex-col px-2 lg:only:px-0 lg:flex-row min-w-full'>
                    <div className='w-full  lg:w-2/3 lg:border-r-2 lg:pr-4'>
                        <span className='uppercase text-white bg-blue-600/60 my-2 rounded-sm px-3'>article</span>
                        <p className='text-[2rem] font-semibold my-3'>How did van gorgus terbulent mind depicts one of the most complex concept in physics?</p>
                        <div className='flex flex-row space-x-6'>
                            <p className='text-gray-500'>By Katy Liu on September 3, 2021</p>
                            <p className='flex flex-row text-blue-600/60 items-center space-x-2'><BsBookmark /> <span>Save this article</span></p>
                        </div>
                        <article className='mt-16 text-justify'>

                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, id numquam. Enim numquam totam quidem explicabo exercitationem adipisci voluptas sapiente dolorum sunt? Iure laudantium officia deserunt non veniam dolorum consectetur earum tempora totam facere rerum eius molestias velit obcaecati ullam assumenda repellendus quam reiciendis, quaerat repellat omnis. Iste sit, cum nemo deleniti saepe, maiores laudantium eaque itaque quidem nam quam.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eaque fugiat eveniet dignissimos ab reiciendis quo nemo facere nam ipsum dolorem quibusdam deleniti quasi odit autem et sed dolor, iure tenetur magni at deserunt blanditiis, hic velit. Praesentium, officia dolorum!
                            <br />
                            <br />
                            <br />
                            <div className='w-full flex flex-row justify-between '>
                                <p className='w-2/5 border-l-8 border-blue-500/80 pl-5'><span className='text-blue-500/70 text-[2rem]'>Summary</span>
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur eum, atque a odio voluptatibus voluptates neque quo labore doloremque.</p>
                                <div className='w-64 h-40 relative '>
                                    <Image src='https://images.unsplash.com/photo-1657299170184-add1ff8515c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' layout='fill' />
                                </div>
                            </div>
                            <br />
                            <br />

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quos voluptas repellendus veniam magni eius deleniti consequatur dignissimos similique obcaecati ducimus maxime cumque dolorem repellat, velit voluptatum perferendis numquam vero quia. Pariatur labore repellat aut eum! Architecto, soluta. Magni saepe in accusamus delectus, veritatis libero deleniti voluptatem corrupti distinctio exercitationem omnis quaerat adipisci sint fugit vel placeat ipsam laborum quos.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium, nam deleniti, magni explicabo nisi dolores provident fuga, odio eius doloribus ratione. Minus numquam, totam, voluptatibus libero reiciendis quia qui laudantium beatae ipsum ex exercitationem et molestias praesentium culpa est.
                        </article>
                        <p className='my-10 text-[1.5rem] font-semibold'>Article Tags</p>
                        <div className='flex flex-wrap gap-2'>
                            <p className='p-2 border border-black hover:cursor-pointer'>Grapic Design</p>
                            <p className='p-2 border border-black hover:cursor-pointer'>Magento</p>
                            <p className='p-2 border border-black hover:cursor-pointer'>Project Management</p>
                            <p className='p-2 border border-black hover:cursor-pointer'>Marketing</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4 lg:ml-10 w-full lg:w-1/3' >
                        <p className='text-[1.5rem] font-semibold mt-32'>  About the author</p>
                        <div className='w-[250px] h-[200px] relative my-5 m-0'>
                            <Image src='https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80' alt='' layout='fill' />
                        </div>
                        <p className='text-xl'>Katy Liu</p>

                        <p className='my-10 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam, laborum harum delectus voluptas veniam doloribus fuga perspiciatis minima cumque adipisci amet consequuntur numquam aliquam aperiam excepturi autem incidunt ipsum?</p>
                        <p className='my-20 text-[1.5rem] font-semibold'>Popular posts</p>
                        <ul className='flex flex-col space-y-1'>
                            <li className='font-semibold'>Beautiful Landscape view of rio janerio</li>
                            <li className='font-semibold'>Beautiful Landscape view of rio janerio</li>
                            <li className='font-semibold'>Beautiful Landscape view of rio janerio</li>
                            <li className='font-semibold'>Beautiful Landscape view of rio janerio</li>
                            <li className='font-semibold'>Beautiful Landscape view of rio janerio</li>
                        </ul>

                        <div className='bg-slate-100/50 flex flex-col justify-center items-center mt-20 w-full mx-auto'>
                            <div className='h-20 w-20 bg-white rounded-full flex justify-center items-center mb-5 mt-10'>

                                <IconContext.Provider value={{ size: '3rem' }} >
                                    <AiOutlineMail />
                                </IconContext.Provider>
                            </div>
                            <p>Sign Up for newsletter</p>
                            <p>Sign Up to recieve latest posts and news</p>
                            <input type="text" className='w-2/3 mt-10 bg-transparent outline-none border-b-2 border-b-gray-400 h-10 ' placeholder='Enter email' />
                            <button className='cursor-pointer flex items-center space-x-2 mb-10 mt-5'>

                                <IconContext.Provider value={{ size: '1.5rem' }} >
                                    <BsArrowRightCircle />
                                </IconContext.Provider>
                                <p className='text-[1.3rem]'>Subscribe Now</p>
                            </button>

                        </div>
                    </div>
                </div>
                <div className='my-20'>
                    <CarouselSlider items={articles} title='Related Insight' />
                </div>
            </div>
        </>
        </MainLayout>
    )
}

export default ArticleDetail