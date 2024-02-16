import React from 'react'
import { Newsletter } from '../../Components/Newsletter/Newsletter'

export const ShopSingle = () => {
  try {
    return (
      <section className='bg-white'>
        <Newsletter />
      </section>
    )
  } catch (e) {}
}
