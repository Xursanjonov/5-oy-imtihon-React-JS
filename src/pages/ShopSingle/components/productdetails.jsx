import React from 'react'
import { CreativeBtn } from '../../About/components/creative'
import { CardsCount } from './CardsCount'
import imgs from '../../../assets/Shop/Banana.svg'

export const Productdetails = () => {
    try {
        return (
            <div className="pt-28 pb-16 flex items-center justify-center gap-20">
                <div className='p-6 flex flex-col items-start justify-center bg-white rounded-xl'>
                    <p className="productTyoes px-4 py-1 text-center font-bold rounded-md text-white bg-blue-950">Millets</p>
                    <img className='w-full' src={imgs} alt="" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className='pb-1 text-3xl font-bold text-blue-950'>Health Pistachios</h1>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <p className='mt-4 font-semibold flex items-center justify-start gap-2'>
                        <s>$20.00</s>
                        <span className='font-bold text-blue-900'>$13.00</span>
                    </p>
                    <p className='w-[550px] my-8 font-normal text-gray-500'>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <div className="flex items-center justify-start gap-4">
                        <p className='text-lg font-bold text-blue-950'>Quantity:</p>
                        <CardsCount />
                        <CreativeBtn nameBtn={'Add To Cart'} />
                    </div>
                </div>
            </div>
        )
    } catch (e) { }
}
