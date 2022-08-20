import type { NextPage } from 'next'
import { useRef } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import Book from './Book'
import Event from './Event'
import Related from './Related'

type Props = {
    title: string
    items: any[]
    viewall?: boolean
    description?: string
    type?: string
}


const CarouselSlider: NextPage<Props> = ({ title, items, viewall, description, type }) => {
    const ref = useRef(null)

    const sideScroll = (
        element: any,
        speed: number,
        distance: number,
        step: number
    ) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
        }, speed);
    };

    return (
        <div className='container mx-auto mt-10'>
            <div className='flex flex-row items-end justify-between'>
                <div className='flex flex-col max-w-12/7'>
                    <p className='text-[2.5rem] font-semibold mb-5'>{title}</p>
                    {description &&
                        <p className='text-lg text-ellipsis mb-10' dangerouslySetInnerHTML={{ __html: description }} />
                    }
                </div>
                <div className='flex flex-row gap-2 mb-4'>
                    <div className='p-3 border-2 hover:cursor-pointer' onClick={() => sideScroll(ref.current, 100, 375, -375)}>
                        <IoIosArrowBack />
                    </div>
                    <div className='p-3 border-2 hover:cursor-pointer' onClick={() => sideScroll(ref.current, 100, 375, 375)}>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div >
            <div
                id='scroller'
                className='flex flex-row gap-9 overflow-x-scroll snap-mandatory snap-x scroll-smooth' ref={ref}>
                {items.map((item, idx) => {
                    switch (type?.toLowerCase()) {
                        case 'book':
                            return <Book key={idx} item={item} />
                        case 'event':
                            return <Event key={idx} item={item} />
                        default:
                            return <Related key={idx} item={item} />
                    }
                })}
            </div>

            {
                viewall && <div className='flex justify-center w-full my-10 '>
                    <button className='border-4 px-14 rounded-md py-2 text-blue-400 text-xl font-semibold border-blue-400 hover:cursor-pointer'>View all {title.toLowerCase()}</button>
                </div>
            }

        </div>
    )
}

export default CarouselSlider