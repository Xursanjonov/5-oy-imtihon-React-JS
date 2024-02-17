import React from 'react'

export const AboutOrganicCard = ({ url, name, kasb, insta, facebook, twitter }) => {
    return (
        <div className="card w-[380px] flex flex-col items-center justify-center rounded-t-3xl hover:shadow-lg hover:shadow-pink-600">
            <figure className='w-full rounded-t-3xl'> <img src={url} /> </figure>
            <div className="titles mt-4 w-full pb-4 px-5">
                <h4 className='text-2xl font-black text-black'>{name}</h4>
                <div className="flex items-center justify-between">
                    <p className='text-lg italic font-semibold text-green-500'>{kasb}</p>
                    <div className="flex items-center justify-center gap-3 text-xl text-blue-900">
                        {insta ? insta : ''}
                        {facebook ? facebook : ''}
                        {twitter ? twitter : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}
