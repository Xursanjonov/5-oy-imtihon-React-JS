import React from 'react'
import { useParams } from 'react-router-dom'
import { Newsletter } from '../../Components/Newsletter/Newsletter'
import { Products } from '../../data/Products'
import { OurProductsCard } from '../Home/Components/OurProductsCard'
import { Description } from './components/description'
import { Link } from 'react-router-dom'
import { CreativeBtn } from '../About/components/creative'
import { CardsCount } from './components/CardsCount'
import './shopsingle.css'

export const Productdetails = ({ url, title, types, price, sprice, description }) => {
  try {
    return (
      <div className="pt-28 pb-16 flex items-center justify-center gap-20">
        <div className='p-6 flex flex-col items-start justify-center bg-white rounded-xl'>
          <p className="productTyoes px-4 py-1 text-center font-bold rounded-md text-white bg-blue-950">{types}</p>
          <img className='w-full' src={url} alt="" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className='pb-1 text-3xl font-bold text-blue-950'>{title}</h1>
          <div className="rating rating-xs">
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
          </div>
          <p className='mt-4 font-semibold flex items-center justify-start gap-2'>
            <s>${sprice}.00</s>
            <span className='font-bold text-blue-900'>${price}.00</span>
          </p>
          <p className='w-[550px] my-8 font-normal text-gray-500'>{description}</p>
          <div className="flex items-center justify-start gap-4">
            <p className='text-lg font-bold text-blue-950'>Quantity:</p>
            <CardsCount />
            <Link to={'/notFound'}> <CreativeBtn nameBtn={'Add To Cart'} /> </Link>
          </div>
        </div>
      </div>
    )
  } catch (e) { }
}

export const ShopSingle = () => {
  const { id } = useParams();
  const product = Products?.find((item) => item.id == parseInt(id));
  console.log(product);

  if (!product) {
    return <div className="bg-white">
      <section className='shopSingleHero w-full h-[50vh] flex flex-col items-center justify-center bg-white'>
        <h1 className='text-6xl font-bold text-blue-950'>Shop Single</h1>
      </section>
      <section className='w-full mt-8 flex flex-col items-center justify-center bg-white'>
        <Description />
      </section>
      <section className='p-[5rem] flex flex-col items-center justify-center bg-white'>
        <h1 className='text-4xl font-black text-blue-950'>Related Products</h1>
        <div className="mt-[3rem] flex flex-wrap items-center justify-center gap-6">
          {Products?.slice(0, 4).map((item) => (
            <Link to={`/shopSingle/${item.id}`} > <OurProductsCard key={item.id} {...item} /> </Link>
          ))}
        </div>
      </section>
      <section className='bg-white'>
        <Newsletter />
      </section>
    </div>
  }

  const { url, title, types, price, sprice, description } = product;

  return (
    <div className="bg-white">
      <section className='shopSingleHero w-full h-[50vh] flex flex-col items-center justify-center bg-white'>
        <h1 className='text-6xl font-bold text-blue-950'>Shop Single</h1>
      </section>
      <section className='w-full flex flex-col items-center justify-center bg-gray-100'>
        <Productdetails url={url} title={title} types={types} sprice={sprice} price={price} description={description}  />
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