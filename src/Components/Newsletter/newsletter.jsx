import React from 'react'
import './newslatter.css'

export const Newsletter = () => {
    return (
        <section className='newsletterCard w-[88%] h-[48vh] mx-auto px-[5rem] flex items-center justify-between'>
            <div className="title"> <h1 className='w-[280px] text-4xl font-bold text-white'>Subscribe to <br /> our Newsletter</h1> </div>
            <form className='w-[540px] flex items-center justify-center gap-3'>
                <input id="email" className="w-[64%] px-[1.4rem] py-4 font-bold italic text-xl rounded-xl text-black bg-white"
                    type="email" name="" placeholder='Your Email Address' />
                <button className="w-[36%] text-xl py-4 font-bold rounded-xl bg-blue-950 text-white">Subscribe</button>
            </form>
        </section>
    )
}
