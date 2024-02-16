import React from 'react'

export const GetCards1 = ({ url, title, text }) => {
    return (
        <div className='w-full h-[360px] text-white flex flex-col items-start justify-center ps-12 rounded-3xl hover:shadow-xl hover:shadow-pink-500'
            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${url})`, }}>
            <p className='text-2xl italic font-semibold'>{title}</p>
            <h6 className='w-[250px] text-4xl font-bold'>{text}</h6>
        </div>
    )
}
export const GetCards2 = ({ url, title, text }) => {
    return (
        <div className='w-full h-[360px] text-white flex flex-col items-start justify-center ps-12 rounded-3xl hover:shadow-xl hover:shadow-pink-500'
            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${url})`, }}>
            <p className='text-2xl italic text-green-500 font-semibold'>{title}</p>
            <h6 className='w-[250px] text-4xl font-bold text-blue-900'>{text}</h6>
        </div>
    )
}
