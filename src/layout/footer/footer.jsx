import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import instagram from '../../assets/Icons/insta-icon.svg'
import facebook from '../../assets/Icons/facebook-icon.svg'
import twitter from '../../assets/Icons/twitter-icon.svg'
import pinterest from '../../assets/Icons/pinterest-icon.svg'

export const FooterTop = () => {
  return (
    <div className="w-full py-[2rem] footer-top flex items-start justify-center gap-12">
      <div className="footer-start flex flex-col items-end justify-center gap-4 text-gray-500">
        <h2 className='text-2xl font-bold text-blue-950'>Contact Us</h2>
        <p className='text-end '>
          <strong>Email</strong>
          <p>needhelp@Organia.com</p>
        </p>
        <p className='text-end'>
          <strong>Phone</strong>
          <p>666 888 888</p>
        </p>
        <p className='text-end'>
          <strong>Address</strong>
          <p>88 road, borklyn street, USA</p>
        </p>
      </div>
      <div className="footer-center flex flex-col items-center justify-center gap-6 border-x-2 px-12">
        <Link> <img src={logo} alt="Logo" /> </Link>
        <p className='font-semibold text-gray-400'>
          Simply dummy text of the printing and typesetting industry. <br />
          Lorem Ipsum simply dummy text of the printing
        </p>
        <div className="footer-icons flex items-center justify-center gap-4">
          <div className="flex items-center justify-center p-4 text-xl rounded-full bg-gray-100">
            <img src={instagram} alt="" />
          </div>
          <div className="flex items-center justify-center p-4 text-xl rounded-full bg-gray-100">
            <img src={facebook} alt="" />
          </div>
          <div className="flex items-center justify-center p-4 text-xl rounded-full bg-gray-100">
            <img src={twitter} alt="" />
          </div>
          <div className="flex items-center justify-center p-4 text-xl rounded-full bg-gray-100">
            <img src={pinterest} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-end flex flex-col items-start justify-center gap-4 text-gray-500">
        <h2 className='text-2xl font-bold text-blue-950'>Utility Pages</h2>
        <p>Style Guide</p>
        <p>404 Not Found</p>
        <p>Password Protected</p>
        <p>Licences</p>
        <p>Changelog</p>
      </div>
    </div>
  )
}
export const FooterBottom = () => {
  return (
    <div className="w-full pt-4 flex items-center justify-center font-medium border-t-2 text-gray-400">
      Copyright © <strong className='text-gray-600 px-2'>Organick</strong> | Designed by <strong className='text-gray-600 px-2'>VictorFlow
      </strong> Templates - Powered by <strong className='text-gray-600 px-2'>Webflow</strong>
    </div>
  )
}


export const Footer = () => {
  return (
    <footer className='pt-[4rem] pb-4 flex flex-col items-center justify-center bg-white'>
      <FooterTop />
      <FooterBottom />
    </footer>
  )
}
