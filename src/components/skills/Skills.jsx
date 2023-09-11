import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section id='skills' className='mb-36'>
      <div className='text-center'>
        <h1 className='text-textPrimary font-semibold text-3xl'>Skills</h1>
        <p className='text-zinc-500 font-normal text-sm'>My Technical level</p>
      </div>

      <div className='grid-cols-2 gap-8 justify-center mt-7 px-5'>
        <div className='block lg:flex justify-center gap-8'>

          <Frontend />
          <Backend />

        </div>
      </div>

    </section>
  )
}

export default Skills