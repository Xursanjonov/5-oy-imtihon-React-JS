import React from 'react'
import { Products } from '../../../data/Products'
import { OurProductsCard } from './OurProductsCard'
import btnsIcon from '../../../assets/chap-strelka.svg'
import { Link } from 'react-router-dom'

export const BtnBlue = ({ title }) => {
    return (
        <button className='mt-[5rem] px-5 py-4 flex items-center justify-center gap-4 rounded-xl font-bold text-white bg-blue-900'>
            {title}
            <div className="p-2 text rounded-full bg-blue-950 flex items-center justify-center">
                <img className='' src={btnsIcon} alt="" />
            </div>
        </button>
    )
}

export const HomeOurProduct = () => {
    return (
        <section className='pt-[4.8rem] pb-[12.5rem] flex flex-col items-center justify-center bg-white'>
            <p className='my-2 italic text-2xl text-green-500'>Categories</p>
            <h1 className='text-5xl font-bold text-black'>Our Products</h1>
            <div className="mt-[5rem] grid grid-cols-4 justify-center gap-8">
                {Products?.slice(0, 8).map((item) => (
                    <Link to={`/shopSingle/${item.id}`} > <OurProductsCard key={item.id} {...item} /> </Link>
                ))}
            </div>
            <Link to={'/shop'} > <BtnBlue title={'Load More'} /> </Link>
        </section>
    )
}
