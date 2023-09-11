import React from 'react'
import imgProfile from '../../../public/img/rafi.png'
import Social from './Social'
import Data from './Data'

const Home = () => {
  return (
    <section id='home' className='pt-20 lg:pt-48 md:pt-40 pl-5 lg:pl-4 md:pl-6 mb-36'>

      <div className='w-full flex flex-wrap md:justify-between'>

        <Social />
        <Data />

        <div className='w-full md:w-1/3 md:mr-5 md:-mt-16 mt-6 lg:-mt-24'>
          <div className='relative'>
            <img src={imgProfile} className='relative mx-auto h-96 lg:h-96 lg:w-72 md:w-60 md:h-80' />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Home