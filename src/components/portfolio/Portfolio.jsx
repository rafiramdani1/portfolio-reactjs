import React from 'react'
import SIMS from '../../../public/img/SIMS-PPOB - React JS + VITE.jpg'
import Tailwind from '../../../public/img/tailwindcss-onlineShop.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio' className='mb-36'>
      <div className='text-center'>
        <h1 className='text-textPrimary font-semibold text-3xl'>Portfolio</h1>
        <p className='text-zinc-500 font-normal text-sm'>My Project</p>
      </div>

      <div className='flex flex-wrap justify-center mt-6'>


        <div className='w-1/2 p-2'>
          <div className='border rounded-lg bg-zinc-100 shadow-md'>
            <div className='p-3'>
              <img src={SIMS} />
            </div>
            <div className='px-3 pb-3 bg-white h-24'>
              <h1 className='text-textPrimary font-semibold text-lg text-center pt-3'>SIMS-PPOB</h1>
              <p className='font-normal text-xs text-zinc-500 mt-2 text-center'>Fetching API with React JS + Vite, Axios, React-redux & Toolkit management state Access Token</p>
            </div>
          </div>
        </div>

        <div className='w-1/2 p-2'>
          <div className='border rounded-lg bg-zinc-100 shadow-md'>
            <div className='p-3'>
              <img src={Tailwind} />
            </div>
            <div className='px-3 pb-3 bg-white h-24'>
              <h1 className='text-textPrimary font-semibold text-lg text-center pt-3'>ONLINE SHOP</h1>
              <p className='font-normal text-xs text-zinc-500 mt-2 text-center '>React JS and TailwindCss</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Portfolio