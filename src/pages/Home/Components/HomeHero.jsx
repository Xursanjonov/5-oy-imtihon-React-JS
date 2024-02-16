import React from 'react'
import btnsIcon from '../../../assets/chap-strelka.svg'
import '../home.css'
import { Buttun } from '../../../Components/Buttun/Buttun'

export const HomeHero = () => {
    return (
        <section className='homeHero w-full h-[90vh] flex items-center'>
            <div className="hero-title ps-[12rem]">
                <p className='italic font-semibold text-green-500'>100% Natural Food</p>
                <h1 className='w-[380px] text-5xl text-blue-950 font-bold'>Choose the best healthier way <br /> of life</h1>
                <Buttun title={'Explore Now'} icon={true} />
            </div>
        </section>
    )
}
