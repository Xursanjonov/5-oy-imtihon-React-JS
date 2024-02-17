import React from 'react'

export const OurProductsCard = ({types, url, title, price, sprice, star}) => {
  try {
    return (
        <div className="card glass w-[300px] px-4 py-3 bg-gray-50 hover:shadow-xl hover:shadow-blue-600">
            <p className='w-[85px] mt-3 z-10 rounded-lg flex items-center justify-center px-2.5 py-1.5 text-white bg-blue-950'>{types}</p>
            <figure className='h-[18rem]'> <img src={url} alt="" /> </figure>
            <div>
                <h2 className="card-title my-2 font-bold text-blue-900">{title}</h2>
                <hr />
                <p className='my-2 flex items-center justify-between'>
                    <div className="flex items-center justify-start gap-3">
                        <s className='text-gray-300'>${sprice}.00</s>
                        <span className='text-blue-900 font-bold'>${price}.00</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={star} alt='' />
                        <img src={star} alt='' />
                        <img src={star} alt='' />
                        <img src={star} alt='' />
                        <img src={star} alt='' />
                    </div>
                </p>
            </div>
        </div>
    )
  } catch (e) {}
}
