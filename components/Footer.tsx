import { NextPage } from 'next'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillYoutube,
    AiFillLinkedin
} from 'react-icons/ai'

import Logo from '../public/logo-v2.svg'

const Footer: NextPage = () => (
    <div className='w-full bg-[#24243C] min-h-[30rem]'>
        <div className='container flex flex-col px-2 lg:mx-auto lg:flex-row text-white '>
            <div className='w-full   lg:w-1/2  flex flex-col justify-between mr-5'>
                <div >
                    {/* <p className='text-[4rem] font-bold mt-10 mb-2'>E</p> */}
                    <div className='w-10 h-10 mt-10 mb-8'>
                        <Image src={Logo} priority />
                    </div>
                    <p className='text-base'>Inspiring world through change.</p>
                </div>
                <div>
                    <p className='text-[1.5rem] my-4'>Get our newslatter</p>
                    <div className='flex flex-col lg:flex-row justify-between lg:items-end space-y-2 lg:space-y-0'>
                        <p className='text-xs'>Read about the latest in workplace trends, events, and insights straight to your inbox.</p>
                        <div className='flex flex-row gap-1 text-gray-500'>
                            <IconContext.Provider value={{ size: '2rem' }}>
                                <AiFillFacebook />
                                <AiOutlineInstagram />
                                <AiFillYoutube />
                                <AiOutlineTwitter />
                                <AiFillLinkedin />
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className='flex justify-between w-full my-5 items-end pr-2'>
                        <input type="text" placeholder='Enter email' className='flex-grow w-3/5 h-7 placeholder:text-base bg-inherit outline-none border-b-2 text-sm border-gray-500' />
                        <button className='uppercase p-2 lg:px-7 lg:py-3 bg-blue-500/60 text-sm '>subscribe to newsletter</button>
                    </div>
                    <div className='flex items-center gap-2 mb-10 '>
                        <input type="checkbox" className='accent-[#50d71e] cursor-pointer' />
                        <p className='text-sm break-all'>Yes, i'd like to recieve marketing emails from Edge and agree to its <span className='text-[#7272cc] hover:cursor-pointer'> Terms of business.</span></p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:pl-5 h-full flex flex-col justify-between mt-16'>
                <div className='flex mb-10 flex-wrap w-full justify-between'>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-xl text-[#6F74E6] uppercase'>Company</li>
                        <li className='text-sm'>About us</li>
                        <li className='text-sm'>Policies</li>
                        <li className='text-sm'>Pricing</li>
                        <li className='text-sm'>Meet our team</li>
                        <li className='text-sm'>Accreditation</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-xl text-[#6F74E6] uppercase'>services</li>
                        <li className='text-sm'>Work</li>
                        <li className='text-sm'>Search profiles</li>
                        <li className='text-sm'>Licensing</li>
                        <li className='text-sm'>Resources</li>
                        <li className='text-sm'>Upcoming events</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-xl text-[#6F74E6] uppercase'>learn</li>
                        <li className='text-sm'>UX Design</li>
                        <li className='text-sm'>Creative skills</li>
                        <li className='text-sm'>Community</li>
                        <li className='text-sm'>Business resources</li>
                        <li className='text-sm'>Free tools</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-xl text-[#6F74E6] uppercase'>Collaborate</li>
                        <li className='text-sm'>Partner with us</li>
                        <li className='text-sm'>Become an affiliate</li>
                        <li className='text-sm'>FAQ's</li>
                        <li className='text-sm'>Work with us</li>
                        <li className='text-sm'>Contact us</li>
                    </ul>
                </div>
                <div className='flex space-x-3 lg:space-x-0 justify-start lg:justify-between w-full uppercase text-xs text-gray-400/70 flex-wrap'>
                    <p>terms of business</p>
                    <p>|</p>
                    <p>data usage & privacy policy</p>
                    <p>|</p>
                    <p>cancelation policy</p>
                    <p>|</p>
                    <p>our ethics statement</p>
                    <p>|</p>
                    <p>site map</p>
                </div>
                <div className='text-[.6rem] text-gray-600 my-12 space-y-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, placeat reprehenderit! Nobis, magnam vel quis eius dolor eaque unde assumenda ab modi. Blanditiis cum, assumenda, debitis asperiores excepturi corporis repellat dolorum doloremque minus corrupti consectetur aperiam fugit animi libero similique, quam vitae reprehenderit.</p>

                    <p className='uppercase'>GCC Limited &copy; ALL COPYRIGHT RESERVED </p>
                </div>
            </div>

        </div>

    </div>
)


export default Footer