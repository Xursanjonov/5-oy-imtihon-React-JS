import React from 'react'
import { Newsletter } from '../../Components/Newsletter/Newsletter'
import { Products } from '../../data/Products'
import { OurProductsCard } from '../Home/Components/OurProductsCard'
import { Description } from './components/description'
import { Link } from 'react-router-dom'
import './shopsingle.css'
import { Productdetails } from './components/productdetails'


export const ShopSingle = () => {

  return (
    <div className="bg-white">
      <section className='shopSingleHero w-full h-[50vh] flex flex-col items-center justify-center bg-white'>
        <h1 className='text-6xl font-bold text-blue-950'>Shop Single</h1>
      </section>
      <section className='w-full flex flex-col items-center justify-center bg-gray-100'>
        <Productdetails />
      </section>
      <section className='w-full mt-8 flex flex-col items-center justify-center bg-white'>
        <Description />
      </section>
      <section className='p-[5rem] flex flex-col items-center justify-center bg-white'>
        <h1 className='text-4xl font-black text-blue-950'>Related Products</h1>
        <div className="mt-[3rem] flex flex-wrap items-center justify-center gap-6">
          {Products?.slice(0, 4).map((item) => (
            <Link to={`/${item.id}`} > <OurProductsCard key={item.id} {...item} /> </Link>
          ))}
        </div>
      </section>
      <section className='bg-white'>
        <Newsletter />
      </section>
    </div>
  )
}
