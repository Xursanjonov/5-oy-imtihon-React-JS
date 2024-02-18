import React from 'react'
import weDo from '../../../assets/About/weDo.svg'
import modern from '../../../assets/About/modern.png'
import noGrowth from '../../../assets/About/noGrowth.png'
import noStars from '../../../assets/chap-strelka.svg'

export const CreativeMiniCard = ({ img, title }) => {
    return (
        <div className='w-[280px] my-8 p-2 flex items-center justify-center gap-4 rounded-lg hover:shadow-lg hover:shadow-blue-500 bg-gray-100'>
            <figure className='px-2.5 py-3 rounded-lg bg-white'> <img src={img} alt="" /> </figure>
            <div className="titles flex flex-col items-start justify-center gap-2">
                <h6 className='text-xl font-bold text-blue-900'>{title}</h6>
            </div>
        </div>
    )
}

export const CreativeBtn = ({ nameBtn }) => {
    return (
        <button className='px-[2rem] py-[1rem] flex items-center justify-center gap-6 font-semibold rounded-xl text-white border-2 border-blue-950 bg-blue-950'>
            <h1 className='font-bold'>{nameBtn}</h1>
            <i className="w-[1.37rem] h-[1.4rem] text-xl text-white bg-blue-800 flex items-center justify-center rounded-full">
                <img src={noStars} />
            </i>
        </button>
    )
}


export const Creative = () => {
    return (
        <div className='w-full py-4 flex items-center justify-start gap-6'>
            <figure className='w-[65rem]'> <img src={weDo} /> </figure>
            <div className="w-full py-[5rem] flex flex-col items-start justify-around">
                <p className="pageName text-2xl font-semibold italic text-green-500">About Us</p>
                <h2 className='w-[440px] text-5xl font-black text-blue-900'>We do Creative Things for Success</h2>
                <p className='w-[590px] px-2 pt-4 mb-3.5 font-semibold text-gray-600'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <p className='w-[590px] px-2 py-1 my-3.5 font-semibold text-gray-600'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className="flex items-center justify-center gap-6">
                    <CreativeMiniCard img={modern} title={'Modern Agriculture Equipment'} />
                    <CreativeMiniCard img={noGrowth} title={'No growth hormones are used'} />
                </div>
                <CreativeBtn nameBtn={'Explore More'} />
            </div>
        </div>
    )
}
