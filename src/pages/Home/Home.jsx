import React from 'react'
import { HomeHero } from './Components/HomeHero'
import { GetCards1, GetCards2 } from './Components/GetCards'
import garden from '../../assets/Home/garden.svg'
import vegatables from '../../assets/Home/vegetables.svg'
import { Believe } from './Components/Believe'
import { HomeOurProduct } from './Components/HomeOurProduct'
import { Newsletter } from '../../Components/Newsletter/Newsletter'
import { HomeNews } from './Components/homeNews'

export const Home = () => {
  return (
    <section className=' bg-white'>
      <HomeHero />
      <div className='w-full py-24 px-[10rem] flex items-center justify-center gap-12 bg-white'>
        <GetCards1 url={garden} title={'Natural!!'} text={'Get Garden Fresh Fruits'} />
        <GetCards2 url={vegatables} title={'Offer!!'} text={'Get 10% off on Vegetables'} />
      </div>x
      <Believe />
      <HomeOurProduct />
      <HomeNews />
      <Newsletter />
    </section>
  )
}
