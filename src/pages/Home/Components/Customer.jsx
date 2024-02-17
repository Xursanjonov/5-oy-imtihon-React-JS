import React from 'react'
import women from '../../../assets/Home/sayingWomen.svg'
import star from '../../../assets/Icons/Star.svg'

export const CustomerProsent = ({ h1, p }) => {
    return (
        <div className="w-[10rem] h-[10rem] flex flex-col items-center justify-center rounded-full border-2 border-green-600 bg-gray-100">
            <h2 className='text-4xl font-black text-blue-950'>{h1}</h2>
            <p className='text-md font-semibold text-black'>{p}</p>
        </div>
    )
}

export const Customer = () => {
    return (
        <div className='py-[8rem]'>
            <div className="customer-title flex flex-col items-center justify-center">
                <div className="carousel w-[550px]">
                    <div id="item1" className="carousel-item w-[580px] flex flex-col items-center justify-center">
                        <p className='italic text-lg font-semibold text-green-600'>Testimonial</p>
                        <h2 className='text-4xl mb-10 font-black text-gray-800'>What Our Customer Saying?</h2>
                        <figure className='w-[8rem] '> <img src={women} className="rounded-full" /> </figure>
                        <div className="stars-div mt-4 flex items-center justify-center">
                            <img className='w-[1.4rem]' src={star} />
                            <img className='w-[1.4rem]' src={star} />
                            <img className='w-[1.4rem]' src={star} />
                            <img className='w-[1.4rem]' src={star} />
                            <img className='w-[1.4rem]' src={star} />
                        </div>
                        <p className='w-[660px] my-4 text-center font-semibold text-gray-500'>
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                        </p>
                        <h4 className='text-2xl font-semibold text-blue-900'>Sara Taylor</h4>
                        <p className='font-semibold text-gray-600'>Consumer</p>
                    </div>
                </div>
                <div className="w-full py-2 gap-2 flex justify-center">
                    <a href="#item1" className="w-[1rem] h-[1rem] rounded-full bg-gray-500"></a>
                    <a href="#item2" className="w-[1rem] h-[1rem] rounded-full bg-gray-500"></a>
                    <a href="#item3" className="w-[1rem] h-[1rem] rounded-full bg-gray-500"></a>
                </div>
            </div>
            <p className='w-full h-[2px] my-[3rem] bg-gray-200'></p>
            <div className="customer-prosent flex items-center justify-around gap-6">
                <CustomerProsent h1={'100%'} p={'Organic'} />
                <CustomerProsent h1={'285'} p={'Active Product'} />
                <CustomerProsent h1={'350+'} p={'Organic Orchads'} />
                <CustomerProsent h1={'25+'} p={'Years of Farming'} />
            </div>
        </div>
    )
}
