import React from 'react'

const Footer = () => {
  return (
    <section id='contact' className='bottom-0 w-full font-url bg-white h-32 border-t border-zinc-300'>
      <div className='container flex flex-wrap py-5 justify-center'>

        <div className='w-1/2'>
          <h1 className='text-base font-medium text-textPrimary underline'>Muhammad Rafi Ramdani</h1>
          <div className='mt-1'>
            <h3 className='font-normal text-sm text-textPrimary'>Contact me <i class="uil uil-message"></i></h3>
            <div className='mt-2'>
              <h3 className='text-xs font-medium text-zinc-500'><i class="uil uil-envelope"></i> rafiramdani321@gmail.com</h3>
              <h3 className='text-xs font-medium text-zinc-500'><i class="uil uil-whatsapp"></i> 08551773136</h3>
            </div>
          </div>
        </div>

        <div className='w-1/2'>
          <div className='flex flex-wrap justify-center'>

            <a href='https://www.instagram.com/mrafiiiiiii_/' className='block text-xl text-textPrimary hover:text-hoverTextPrimary px-2' target='_blank'>
              <i className='uil uil-instagram'></i>
            </a>

            <a href='#' className='block text-xl text-textPrimary hover:text-hoverTextPrimary px-2' target='_blank'>
              <i class="uil uil-dribbble"></i>
            </a>
            <a href='https://github.com/rafiramdani1' className='block text-xl text-textPrimary hover:text-hoverTextPrimary px-2' target='_blank'>
              <i className='uil uil-github-alt'></i>
            </a>

          </div>

          <div className='flex flex-wrap justify-center mt-2'>
            <div className='flex'>
              <a href='#home' className='px-2 text-center text-textPrimary hover:text-hoverTextPrimary font-medium text-xs md:text-xs lg:text-sm'>
                Home
              </a>
              <a href='#home' className='px-2 text-center text-textPrimary hover:text-hoverTextPrimary font-medium text-xs md:text-xs lg:text-sm'>
                About
              </a>
              <a href='#home' className='px-2 text-center text-textPrimary hover:text-hoverTextPrimary font-medium text-xs md:text-xs lg:text-sm'>
                Skill
              </a>
              <a href='#home' className='px-2 text-center text-textPrimary hover:text-hoverTextPrimary font-medium text-xs md:text-xs lg:text-sm'>
                Portfolio
              </a>
              <a href='#home' className='px-2 text-center text-textPrimary hover:text-hoverTextPrimary font-medium text-xs md:text-xs lg:text-sm'>
                Contact
              </a>
            </div>
            <div className='mt-2'>
              <h2 className='text-xs font-medium text-zinc-500'>Design By : muhammad rafi ramdani</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer