import type { NextPage } from 'next'

const Hero: NextPage = () => {
    return (
        <div className='w-full mx-0 bg-[#24243C] bg-[url(/ripple.svg)] h-[700px] lg:h-[800px] text-white  flex flex-col justify-center lg:p-40'>
            <p className='font-semi-bold text-[6rem] text-center lg:text-left'>Resources</p>
            <p className='text-[1.6rem] w-9/12 lg:w-full mx-auto lg:mx-0'>In publishing and graphic design, Lorem ipsum is a <br/> placeholder text commonly used to demonestrate.</p>
        </div>
    )
}

export default Hero
