import React from 'react'
import { Newsletter } from '../../Components/Newsletter/Newsletter'
import { Products } from '../../data/Products'

export const ShopSingle = () => {
  try {
    return (
      <section className='bg-white'>
        <div className="px-[5rem] py-[4rem]  flex flex-wrap items-center justify-center gap-6">
          {Products?.slice(0,4).map((item) => (
            item.categoryAll ? <Link to={`/shop/${item.id}`}> <OurProductsCard key={item.id} {...item} /> </Link> : ''
          ))}
        </div>
        <Newsletter />
      </section>
    )
  } catch (e) {}
}
