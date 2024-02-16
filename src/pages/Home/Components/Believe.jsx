import React from 'react'
import img from '../../../assets/Home/Believe.svg'
import img1 from '../../../assets/Icons/foodsOnly-icon.png'
import img2 from '../../../assets/Icons/standarts-icon.svg'
import btnIcon from '../../../assets/chap-strelka.svg';

export const BelieveMiniCard = ({img, title, text}) => {
  try {
    return (
      <div className='px-4 py-2 flex items-center justify-center gap-4 rounded-lg hover:shadow-lg hover:shadow-blue-500 bg-gray-100'>
        <figure className='px-2.5 py-3 rounded-lg bg-white'> <img src={img} alt="" /> </figure>
        <div className="titles flex flex-col items-start justify-center gap-2">
          <h6 className='text-xl font-bold text-blue-900'>{title}</h6>
          <p className='w-[360px] '>{text}</p>
        </div>
      </div>
    )
  } catch (e) {console.log(e);}
}

export const Believe = () => {
  return (
    <div className='px-[5rem] py-[10rem] flex items-center justify-center bg-gray-50'>
      <figure> <img src={img} alt="" /> </figure>
      <div className="titless flex flex-col items-start justify-center">
        <p className='italic text-2xl font-semibold text-green-500'>About Us</p>
        <h5 className='w-[550px] mb-6 text-5xl font-bold text-blue-900'>We Believe in Working Accredited Farmers</h5>
        <p className=''>
          Simply dummy text of the printing and typesetting industry. Lorem had ceased to
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
        </p>
        <div className="mt-[2rem] flex flex-col items-start justify-center gap-6">
          <BelieveMiniCard img={img1} title={'Organic Foods Only'} text={'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'} />
          <BelieveMiniCard img={img2} title={'Quality Standards'} text={'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'} />
        </div>
        <button className='mt-[3rem] px-4 py-3 flex items-center justify-center gap-4 rounded-lg font-bold text-white bg-blue-900'>Shop Now <img src={btnIcon} alt="" /> </button>
      </div>
    </div>
  )
}
