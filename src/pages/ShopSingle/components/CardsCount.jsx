import React from 'react'

export const CardsCount = () => {
  try {
    return (
      <div className="py-2 px-4 flex items-center justify-center gap-3 font-bold rounded-lg border-2 border-base-100 text-base-100">
        <button className='w-[30px] h-[30px text-2xl font-black'>-</button>
        <h4 className='px-2 text-center text-4xl'>1</h4>
        <button className='w-[30px] h-[30px text-2xl font-black'>+</button>
      </div>
    )
  } catch (e) { }
}
