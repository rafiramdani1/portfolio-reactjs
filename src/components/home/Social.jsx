import React from 'react'

const Social = () => {
  return (
    <div className='max-w-fit mt-16 w-1/2 md:w-1/3'>
      <a href='https://www.instagram.com/mrafiiiiiii_/' className='block text-xl mb-5 text-textPrimary hover:text-hoverTextPrimary' target='_blank'>
        <i className='uil uil-instagram'></i>
      </a>
      <a href='#' className='block text-xl mb-5 text-textPrimary hover:text-hoverTextPrimary' target='_blank'>
        <i class="uil uil-dribbble"></i>
      </a>
      <a href='https://github.com/rafiramdani1' className='block text-xl mb-5 text-textPrimary hover:text-hoverTextPrimary' target='_blank'>
        <i className='uil uil-github-alt'></i>
      </a>
    </div>
  )
}

export default Social