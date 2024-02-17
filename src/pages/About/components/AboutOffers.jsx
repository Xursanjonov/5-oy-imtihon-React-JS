import React from 'react'

export const AboutOffers = ({ url, title}) => {
  return (
      <div className="card w-[300px] h-[350px] flex flex-col items-center justify-center rounded-t-3xl bg-transparent hover:shadow-xl hover:shadow-blue-500">
          <figure className='w-full rounded-3xl bg-white'> <img src={url} /> </figure>
          <div className="titles mt-4 w-full pb-4 px-5">
              <h4 className='text-xl text-center text-white'>{title}</h4>
          </div>
      </div>
  )
}
