import React from 'react'
import '../home.css'

export const ThreeOrganicTitle = ({title}) => {
  return (
    <button className='px-8 py-3 font-semibold rounded-xl text-black bg-white'>{title}</button>
  )
}

export const ThreeOrganic = () => {
  return (
    <section className='py-[8rem] flex items-center justify-between gap-6 bg-green-50'>
      <div className="OrganicJuice w-[450px] h-[380px] flex items-center justify-center">
        <ThreeOrganicTitle title={'Organic Juice'} />
      </div>
      <div className="OrganicFood w-[450px] h-[380px] flex items-center justify-center">
        <ThreeOrganicTitle title={'Organic Food'} />
      </div>
      <div className="NutsCookis w-[450px] h-[380px] flex items-center justify-center">
        <ThreeOrganicTitle title={'Nuts Cookis'} />
      </div>
    </section>
  )
}
