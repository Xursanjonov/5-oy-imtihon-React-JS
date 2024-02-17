import React from 'react'
import { OurProductsCard } from '../home/Components/OurProductsCard'
import { Newsletter } from '../../Components/Newsletter/newsletter'
import { Products } from '../../data/Products'
import { Link } from 'react-router-dom'
import { ShopHero } from './components/shopHero'

export const Shop = () => {
  return (
    <section className='bg-white'>
      <ShopHero />
      <div className="px-[5rem] py-[4rem]  flex flex-wrap items-center justify-center gap-6">
        {Products?.map((item)=> (
          item.categoryAll? <Link to={`/shop/${item.id}`}> <OurProductsCard key={item.id} {...item} /> </Link>: ''
        ))}
      </div>
      <Newsletter />
    </section>
  )
}
