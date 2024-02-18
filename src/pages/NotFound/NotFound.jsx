import React from 'react'
import { CreativeBtn } from '../About/components/creative'
import { Link } from 'react-router-dom'
import './notfound.css'

export const NotFound = () => {
  try {
    return (
      <>
        <section className='NotFound w-full px-5 h-[100vh] flex justify-end'>
          <div className="mt-16 pe-24 flex flex-col items-start">
            <h1 className='text-[13rem] font-black'>404</h1>
            <h4 className='ps-4 mt-[-3rem] text-5xl font-bold text-blue-950'>Page not found</h4>
            <p className='mt-4 mb-8 font-medium text-black'>The page you are looking for doesn't exist or has been moved</p>
            <Link to={`/`} > <CreativeBtn nameBtn={'Go to Homepage'} /> </Link>
          </div>
        </section>
      </>
    )
  } catch (e) { }
}
