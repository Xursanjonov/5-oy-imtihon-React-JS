import React from 'react'
import btnsIcon from '../../../assets/chap-strelka.svg'
import { Link } from 'react-router-dom'
import '../home.css'
import { Buttun } from '../../../Components/Buttun/Buttun'

export const HomeNewsBtn = ({title}) => {
  try {
    return (
      <button className="px-8 py-4 mt-[5rem] flex items-center justify-center gap-4 rounded-xl font-bold border-2 border-blue-950 text-black bg-white">
        {title}
        <div className="p-2 text rounded-full bg-blue-950 flex items-center justify-center">
          <img className='' src={btnsIcon} alt="" />
        </div>
      </button>
    )
  } catch (e) {}
}
export const HomeNewsCard1 = () => {
  try {
    return (
      <div className="HomeNewsCard1 relative w-[580px] h-[480px] mx-auto rounded-2xl flex items-end justify-center hover:shadow-xl hover:shadow-black">
        <div className="nov w-16 py-2 flex items-center text-center justify-center absolute top-[2rem] left-[2rem] rounded-full text-blue-900 bg-white">
          <h4 className='font-black'>25 <br /> Nov</h4>
        </div>
        <div className="w-[88%] py-8 px-4 flex flex-col items-start justify-center gap-1 rounded-2xl shadow-md mb-[-25px] bg-white">
          <p className='flex items-center justify-start gap-2 font-semibold text-black'>
            <i className="text-yellow-500 fa-solid fa-user"></i>
            By Rachi Card
          </p>
          <h3 className='text-xl font-bold text-blue-950'>The Benefits of Vitamin D & How to Get It</h3>
          <p className='font-semibold text-gray-600'>
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum
          </p>
          <Buttun title={'Read More'} icon={true} />
        </div>
      </div>
    )
  } catch (e) {}
}
export const HomeNewsCard2 = () => {
  try {
    return (
      <div className="HomeNewsCard2 relative w-[580px] h-[480px] mx-auto rounded-2xl flex items-end justify-center hover:shadow-xl hover:shadow-black">
        <div className="nov w-16 py-2 flex items-center text-center justify-center absolute top-[2rem] left-[2rem] rounded-full text-blue-900 bg-white">
          <h4 className='font-black'>25 <br /> Nov</h4>
        </div>
        <div className="w-[88%] py-8 px-4 flex flex-col items-start justify-center gap-1 rounded-2xl shadow-md mb-[-25px] bg-white">
          <p className='flex items-center justify-start gap-2 font-semibold text-black'>
            <i className="text-yellow-500 fa-solid fa-user"></i>
            By Rachi Card
          </p>
          <h3 className='text-xl font-bold text-blue-950'>The Benefits of Vitamin D & How to Get It</h3>
          <p className='font-semibold text-gray-600'>
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum
          </p>
          <Buttun title={'Read More'} icon={true} />
        </div>
      </div>
    )
  } catch (e) {}
}

export const HomeNews = () => {
  return (
    <section className='px-[8rem] pb-12'>
      <div className="homenews-title px-8 py-8 flex items-end justify-between">
        <div className="felx flex-col justify-center gap-2">
          <p className='text-xl italic font-semibold text-green-500'>News</p>
          <h2 className='w-[540px] mt-2 text-4xl font-bold text-blue-900'>Discover weekly content about organic food, & more</h2>
        </div>
        <Link to={'news'} > <HomeNewsBtn title={'More News'} /> </Link>
      </div>
      <div className="HomeNewsCard pb-6 grid grid-cols-2 items-center justify-center">
        <HomeNewsCard1 />
        <HomeNewsCard2 />
      </div>
    </section>
  )
}
