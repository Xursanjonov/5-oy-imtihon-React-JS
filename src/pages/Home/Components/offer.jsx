import React from 'react'
import { Buttun } from '../../../Components/Buttun/Buttun'
import { Products } from '../../../data/Products'
import { OfferCard } from './offerCard'
import { Link } from 'react-router-dom'
import '../home.css'


export const Offer = () => {
    return (
        <section className='px-[8rem] py-[8rem] bg-cyan-950'>
            <div className="offer-title pb-4 px-8 flex items-center justify-between">
                <div className="titles">
                    <p className='my-2 italic text-2xl text-green-500'>Offer</p>
                    <h1 className='text-5xl font-bold text-white'>We Offer Organic For You</h1>
                </div>
                <Link to={`shop`}> <Buttun title={'View All Product'} icon={true} /> </Link>
            </div>
            <div className="mt-12 grid grid-cols-4 items-center justify-center gap-8">
                {Products?.map((item) => (
                    item.category == 'Offer' ? <Link to={`/shopSingle/${item.id}`}> <OfferCard key={item.id} {...item} /> </Link> :''
                ))}
            </div>
        </section>
    )
}
