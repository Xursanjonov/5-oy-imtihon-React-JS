import React from 'react'
import econis from '../../../assets/Home/econis.svg'

export const EconisTitle = ()=>{
    return (
        <div className="econist-title w-[700px] p-[3rem] ms-[-8rem] flex flex-col items-start justify-center gap-3 rounded-xl shadow-md bg-white">
            <p className='italic font-semibold text-lg text-green-500'>Eco Friendly</p>
            <h2 className='w-[350px] mb-[1.8rem] text-4xl font-black text-blue-950'>Econis is a Friendly Organic Store</h2>
            <div className="my-2 flex flex-col items-start justify-center">
                <span className='font-semibold text-black'>Start with Our Company First</span>
                <p className='w-[555px] text-gray-600'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
            </div>
            <div className="my-2 flex flex-col items-start justify-center gap-2">
                <span className='font-semibold text-black'>Learn How to Grow Yourself</span>
                <p className='w-[555px] text-gray-600'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
            </div>
            <div className="my-2 flex flex-col items-start justify-center gap-2">
                <span className='font-semibold text-black'>Farming Strategies of Today</span>
                <p className='w-[555px] text-gray-600'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
            </div>
        </div>
    )
}

export const Ecoins = () => {
    return (
        <section className='w-full flex items-center justify-start bg-white'>
            <figure className='left-0 w-[50%]'> <img src={econis} alt="" /> </figure>
            <EconisTitle />
        </section>
    )
}
