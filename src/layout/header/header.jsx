import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg'

export const Header = () => {
  return (
    <header className='px-[4rem] sticky top-0 z-50 flex items-center justify-between bg-white py-4'>
      <Link to='/'>
        <img src={logo} alt="Logo" />
      </Link>
      <div className="header-center flex items-center justify-center gap-6 font-bold">
        <p className='text-xl text-black hover:text-green-500'> <Link to='/'>Home</Link> </p>
        <p className='text-xl text-black hover:text-green-500'> <Link to='/about'>About</Link> </p>
        <p className='text-xl text-black hover:text-green-500'> <Link to='/pages'>Pages</Link> </p>
        <p className='text-xl text-black hover:text-green-500'> <Link to='/shop'>Shop</Link> </p>
        <p className='text-xl text-black hover:text-green-500'> <Link to='/projects'>Projects</Link> </p>
        <p className='text-xl text-black hover:text-green-500'> <Link to='/news'>News</Link> </p>
      </div>
      <div className="header-end flex items-center justify-center gap-4">
        <form className='w-[250px] flex items-center justify-center '>
          <input id="search" className='py-3 font-semibold italic ps-2.5 pe-[35px] text-black rounded-[40px] border-[1px] border-gray-100 bg-transparent' type="search" name="" />
          <div className="ms-[-45px] p-3 rounded-full flex items-center text-white justify-center bg-green-600">
            <i className="fa-solid fa-search"></i>
          </div>
        </form>
        <div className="header-shopLinks rounded-[2rem] p-1.5 flex items-center justify-center gap-2 text-black border-[1.5px]">
          <i className="w-[35px] h-[35px] flex items-center justify-center fa-solid fa-shopping-cart rounded-full text-white bg-blue-950"></i>
          <p className='px-1 font-medium text-medium text-blue-950'>Cart(0)</p>
        </div>
      </div>
    </header>
  )
}
