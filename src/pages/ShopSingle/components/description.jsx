import React from 'react'

export const Description = () => {
    try {
        return (
            <>
                <div className="my-6 flex items-center justify-center gap-4">
                    <button className="w-[280px] font-bold text-xl text-white bg-cyan-950 px-6 py-3 rounded-lg hover:shadow-md hover:shadow-pink-500">Product Description</button>
                    <button className="w-[280px] font-bold text-xl text-cyan-950 bg-white px-6 py-3 rounded-lg hover:shadow-md hover:shadow-pink-500">Additional Info</button>
                </div>
                <p className='w-3/4 text-center'>
                    Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8-10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
                </p>
            </>
        )
    } catch (e) { }
}
