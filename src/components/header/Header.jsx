import React, { useState } from 'react'

const Header = () => {
  const [toggle, showMenu] = useState(false)
  return (
    <div>
      <header className='w-full h-14 fixed left-0 z-50 bg-white bottom-0 border-b border-zinc-300  px-3 md:top-0'>

        <nav className='container h-10 flex justify-between gap-4 mt-4 pb-4 px-5'>

          <a href='#home' className='text-textPrimary hover:text-hoverTextPrimary font-medium text-sm lg:text-base'>Muhammad Rafi Ramdani</a>

          <div className='md:hidden cursor-pointer text-base -mt-1 text-textPrimary hover:text-hoverTextPrimary' onClick={() => showMenu(true)}>
            <i className='uil uil-apps'></i>
          </div>
          <div className={toggle ? 'bottom-0 fixed w-full bg-zinc-50 px-8 py-7 border rounded-lg shadow-inner left-0 md:flex md:bottom-3/4 md:bg-transparent md:-top-2 lg:-ml-[128px] md:justify-end lg:fixed md:border-none md:shadow-none' : 'md:block hidden'}>

            <i class="uil uil-times text-textPrimary text-2xl hover:text-hoverTextPrimary block absolute right-7 bottom-7 cursor-pointer md:hidden" onClick={() => showMenu(false)}></i>

            <ul className='md:flex md:gap-8 grid gap-8 grid-cols-3 mb-8 md:py-0'>
              <li>
                <a href='#home' className='block text-center text-textPrimary hover:text-hoverTextPrimary font-medium text-xs md:text-xs lg:text-sm'>
                  <i className='uil uil-home block text-2xl text-textPrimary hover:text-hoverTextPrimary md:hidden'></i> Home
                </a>
              </li>
              <li>
                <a href='#about' className='block text-center text-textPrimary hover:text-hoverTextPrimary font-medium text-xs md:text-xs lg:text-sm'>
                  <i className='uil uil-user-circle block text-2xl text-textPrimary hover:text-hoverTextPrimary md:hidden'></i> About
                </a>
              </li>
              <li>
                <a href='#skills' className='block text-center text-textPrimary hover:text-hoverTextPrimary font-medium text-xs md:text-xs lg:text-sm'>
                  <i className='uil uil-clipboard-notes block text-2xl text-textPrimary hover:text-hoverTextPrimary md:hidden'></i> Skills
                </a>
              </li>
              <li>
                <a href='#portfolio' className='block text-center text-textPrimary hover:text-hoverTextPrimary font-medium text-xs md:text-xs lg:text-sm'>
                  <i className='uil uil-picture block text-2xl text-textPrimary hover:text-hoverTextPrimary md:hidden'></i> Portfolio
                </a>
              </li>
              <li>
                <a href='#contact' className='block text-center text-textPrimary hover:text-hoverTextPrimary font-medium text-xs md:text-xs lg:text-sm'>
                  <i className='uil uil-message block text-2xl text-textPrimary hover:text-hoverTextPrimary md:hidden'></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header