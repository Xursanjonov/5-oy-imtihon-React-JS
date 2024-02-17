import React from 'react'
import img from '../../../assets/Icons/returnPolicy-icon.svg'
import img2 from '../../../assets/Icons/fresh-icon.svg'
import img3 from '../../../assets/Icons/support-icon.svg'
import img4 from '../../../assets/Icons/Secured-icon.svg'
import choose from '../../../assets/About/whyChoose.png'
import img5 from '../../../assets/Icons/naturalProduct-icon.svg';

export const ChooseMiniCard = ({ url, title }) => {
    return (
        <div className='w-[222px] h-[280px] py-5 flex flex-col items-center justify-center gap-6 rounded-3xl hover:shadow-xl hover:shadow-green-500 bg-white'>
            <figure className='px-4 py-3 rounded-lg bg-gray-100'> <img src={url} alt="" /> </figure>
            <div className="titles flex flex-col items-center justify-center gap-2">
                <h6 className='text-xl font-bold text-blue-900'>{title}</h6>
                <p className='w-[180px] font-semibold text-center text-gray-600'>Simply dummy text of the printintypesetting industry.</p>
            </div>
        </div>
    )
}


export const WhyChoose = () => {
    return (
        <div className='py-[8rem] bg-gray-100'>
            <div className="pb-8 px-[5rem] flex items-center justify-center gap-12">
                <div className="chooseTitle">
                    <p className='italic text-lg mb-2 font-semibold text-green-500'>Why Choose us?</p>
                    <h2 className="w-[470px] mb-6 text-4xl font-black text-blue-900">We do not buy from the open market & traders.</h2>
                    <p className="w-[640px] text-lg text-gray-500">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
                    </p>
                    <div className="w-[250px] mt-8 mb-3 px-4 py-3.5 text-gray-600 font-semibold flex items-center justify-start gap-2 rounded-3xl bg-gray-200">
                        <img src={img5} alt="" />
                        <p>100% Natural Product</p>
                    </div>
                    <p className='w-[380px] ms-[3rem] mb-3 font-medium text-gray-600'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                    <div className="w-[250px] mb-3 px-4 py-3.5 text-gray-600 font-semibold flex items-center justify-start gap-2 rounded-3xl bg-gray-200">
                        <img src={img5} alt="" />
                        <p>Increases resistance</p>
                    </div>
                    <p className='w-[380px] ms-[3rem] mb-3 font-medium text-gray-600'>
                        Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
                    </p>
                </div>
                <figure className='w-[50rem]'> <img src={choose} /> </figure>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6">
                <ChooseMiniCard url={img} title={'Return Policy'} />
                <ChooseMiniCard url={img2} title={'100% Fresh'} />
                <ChooseMiniCard url={img3} title={'Support 24/7'} />
                <ChooseMiniCard url={img4} title={'Secured Payment'} />
            </div>
        </div>
    )
}
