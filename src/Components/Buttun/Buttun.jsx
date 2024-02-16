import React from 'react'
import btnsIcon from '../../assets/chap-strelka.svg'


export const Buttun = ({ title, icon }) => {
    return (
        <button className='mt-6 py-2.5 px-3 rounded-md flex items-center justify-center gap-2 bg-yellow-500'>
            <h6 className='font-semibold text-black'>{title}</h6>
            <div className="w-[1rem] h-[1rem] rounded-full bg-blue-950 flex items-center justify-center">
                <img className='' src={icon == true ? btnsIcon : ''} alt="" />
            </div>
        </button>
    )
}
