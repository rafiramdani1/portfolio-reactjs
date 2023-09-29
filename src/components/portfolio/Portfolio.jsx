import React from 'react'

const Portfolio = () => {
  return (
    <section id='portfolio' className='mb-36'>
      <div className='text-center'>
        <h1 className='text-textPrimary font-semibold text-3xl'>Portfolio</h1>
        <p className='text-zinc-500 font-normal text-sm'>My Project</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 content-center gap-6 md:gap-4 mt-6 mx-3'>


        <div className='border bg-white shadow-md rounded-md'>
          <img src='/public/img/project1.jpg' className='w-full md:h-60 mb-3' />
          <div className='px-4 py-3 rounded-lg border-t'>
            <h1 className='text-textPrimary font-semibold text-lg text-center'>SIMP</h1>
            <p className='font-normal text-xs text-zinc-500 mt-2 text-center truncate'>Fetching API with React JS + Vite, Axios, React-redux & Toolkit management state Access Token</p>
            <a href='https://github.com/rafiramdani1/sims-ppob' className='block text-center w-full bg-textPrimary text-white py-1 rounded-lg mt-3 text-base hover:bg-hoverTextPrimary'>Show Detail</a>
          </div>
        </div>

        <div className='border bg-white shadow-md rounded-md'>
          <img src='/public/img/project2.jpg' className='w-full md:h-60 mb-3' />
          <div className='px-4 py-3 rounded-lg border-t'>
            <h1 className='text-textPrimary font-semibold text-lg text-center'>ONLINE SHOP</h1>
            <p className='font-normal text-xs text-zinc-500 mt-2 text-center truncate'>Full Stack Mern Stack - Authentication and Authorization user role - token and refreh token</p>
            <a href='https://github.com/rafiramdani1/mern-stack-online-shop' className='block text-center w-full bg-textPrimary text-white py-1 rounded-lg mt-3 text-base hover:bg-hoverTextPrimary'>Show Detail</a>
          </div>
        </div>

        <div className='border bg-white shadow-md rounded-md'>
          <img src='/public/img/project3.jpg' className='w-full md:h-60 mb-3' />
          <div className='px-4 py-3 rounded-lg border-t'>
            <h1 className='text-textPrimary font-semibold text-lg text-center'>Shopping Cart</h1>
            <p className='font-normal text-xs text-zinc-500 mt-2 text-center truncate'>React Js + vite - management cart state global redux toolkit</p>
            <a href='https://github.com/rafiramdani1/cart-product-redux-toolkit' className='block text-center w-full bg-textPrimary text-white py-1 rounded-lg mt-3 text-base hover:bg-hoverTextPrimary'>Show Detail</a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Portfolio