import React from 'react'
import { Newsletter } from '../../Components/Newsletter/newsletter'
import { AboutHero } from './components/aboutHero'
import { Creative } from './components/creative'
import { WhyChoose } from './components/whyChoose'
import { Products } from '../../data/Products'
import { AboutOrganicCard } from './components/Team'
import { AboutOffers } from './components/AboutOffers'

export const About = () => {
  return (
    <section className="bg-white">
      <AboutHero />
      <Creative />
      <WhyChoose />
      <section className='aboutTeam py-[10rem] flex flex-col items-center justify-center'>
        <p className='text-lg italic font-semibold text-green-500'>Team</p>
        <h1 className='text-5xl  mb-6 font-black text-blue-900'>Our Organic Experts</h1>
        <p className='w-[750px] mb-8 text-center font-semibold text-gray-500'>
          Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {Products?.map((item) => (
            item.category == 'AboutOrganic' ? <AboutOrganicCard key={item.id} {...item} insta={item.id == 20 ? '' : <i className="fa-brands fa-instagram"></i>}
              facebook={<i className="fa-brands fa-facebook"></i>} twitter={<i className="fa-brands fa-twitter"></i>} /> : ''
          ))}
        </div>
      </section>
      <section className='p-[8rem] flex flex-col items-center justify-center bg-cyan-950'>
        <p className='text-xl italic font-semibold text-green-500'>About Us</p>
        <h1 className='text-5xl mb-10 font-black text-white'>What We Offer for You</h1>
        <div className="mt-6 flex items-center justify-center gap-4">
          {Products?.map((item) => (
            item.category == 'AboutOffer' ? <AboutOffers url={item.url} title={item.title} /> : ''
          ))}
        </div>
      </section>
      <Newsletter />
    </section>
  )
}
