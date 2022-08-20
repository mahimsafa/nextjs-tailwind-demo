import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsGlobe } from 'react-icons/bs'

const Navbar: NextPage = () => {
    const router = useRouter()
    const [navbar, setNavbar] = useState(false)
    return (
        <div className='container pt-5 pb-5 lg:mb-0 mx-auto h-auto lg:h-20 flex flex-col items-end lg:items-center px-2 lg:bg-white  rounded-b-md'>
            <div className='flex items-end justify-end'>
                <button
                    className=" p-2 text-gray-700 rounded-md outline-none bg-blue-500/60 focus:border-gray-400 focus:border block lg:hidden"
                    onClick={() => setNavbar(!navbar)}
                >
                    {navbar ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div className={`w-full flex-col lg:flex-row justify-between lg:flex ${navbar ? 'flex' : 'hidden'}`}>
                {router.pathname === '/' ?
                    <ul className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 uppercase  lg:bg-inherit text-black w-full lg:w-auto mb-8 lg:mb-0'>
                        <li className='lg:underline decoration-4 decoration-blue-400 lg:underline-offset-8 border-b lg:border-none w-full lg:w-auto'>
                            <Link href='/company' >Company</Link>
                        </li>
                        <li className='border-b lg:border-none w-full lg:w-auto'>
                            <Link href='/services'>Services</Link>
                        </li>
                        <li className='border-b lg:border-none w-full lg:w-auto'>
                            <Link href='/pricing'>Pricing</Link>
                        </li>
                        <li className='border-b lg:border-none w-full lg:w-auto'>
                            <Link href='/resources'>Resources</Link>
                        </li>
                        <li className='border-b lg:border-none w-full lg:w-auto'>
                            <Link href='/enterprise'>Enterprise</Link>
                        </li>
                    </ul>
                    :
                    <ul className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 uppercase  lg:bg-inherit text-black w-full lg:w-auto mb-8 lg:mb-0'>
                        <li className='border-b lg:border-none w-full lg:w-auto'>
                            <Link href='/aboutus' >About us</Link>
                        </li>
                        <li className='border-b lg:border-none w-full lg:w-auto'>
                            <Link href='/benifits'>Benifits</Link>
                        </li>
                        <li className='border-b lg:border-none w-full lg:w-auto'>
                            <Link href='/services'>Services</Link>
                        </li>
                        <li className='border-b lg:border-none w-full lg:w-auto'>
                            <Link href='/pricing'>Pricing</Link>
                        </li>
                        <li className='border-b lg:border-none w-full lg:w-auto'>
                            <Link href='/resources'>Resources</Link>
                        </li>
                    </ul>
                }
                {router.pathname === '/' ?
                    <div className='flex flex-row gap-2 items-center justify-between w-full lg:w-auto mb-5 lg:mb-0'>
                        <BsGlobe className='text-lg mr-2 text-black' />
                        <p className='text-blue-500 font-bold'>LOGIN</p>
                        <p className='text-blue-500 font-bold'>CONTACT SALES</p>
                    </div>
                    :
                    <div className='flex flex-row gap-2 items-center justify-between uppercase w-full lg:w-auto mb-5 lg:mb-0 '>
                        <p className=''>Enterprise</p>
                        <p className='lg:flex-grow border-blue-600/60 border rounded-sm px-4 py-2 text-blue-600/60'>LOGIN</p>
                        <p className='bg-blue-600/60 rounded-sm p-2 border border-blue-600/60 text-white lg:flex-grow'>enquire now</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
