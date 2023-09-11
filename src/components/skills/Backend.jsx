import React from 'react'

const Backend = () => {
  return (
    <div className='flex justify-center'>
      <div className='border bg-zinc-50 rounded-xl py-8 px-10'>
        <h3 className='text-center text-textPrimary font-medium text-base'>Backend Developer</h3>

        <div className='flex flex-wrap mt-6 justify-start'>
          <div className='border border-none w-40'>
            <div className='flex p-3'>
              <i className='bx bx-badge-check text-textPrimary mr-2'></i>
              <div className='block'>
                <h3 className='text-textPrimary font-normal text-base'>PHP</h3>
                <p className='text-zinc-500 font-normal text-sm'>Intermediate</p>
              </div>
            </div>
          </div>

          <div className='border border-none w-40'>
            <div className='flex p-3'>
              <i className='bx bx-badge-check text-textPrimary mr-2'></i>
              <div className='block'>
                <h3 className='text-textPrimary font-normal text-base'>Laravel</h3>
                <p className='text-zinc-500 font-normal text-sm'>Basic</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap justify-start'>
          <div className='border border-none w-40'>
            <div className='flex p-3'>
              <i className='bx bx-badge-check text-textPrimary mr-2'></i>
              <div className='block'>
                <h3 className='text-textPrimary font-normal text-base'>Node JS</h3>
                <p className='text-zinc-500 font-normal text-sm'>Basic</p>
              </div>
            </div>
          </div>

          <div className='border border-none w-40'>
            <div className='flex p-3'>
              <i className='bx bx-badge-check text-textPrimary mr-2'></i>
              <div className='block'>
                <h3 className='text-textPrimary font-normal text-base'>Express JS</h3>
                <p className='text-zinc-500 font-normal text-sm'>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap justify-start'>
          <div className='border border-none w-40'>
            <div className='flex p-3'>
              <i className='bx bx-badge-check text-textPrimary mr-2'></i>
              <div className='block'>
                <h3 className='text-textPrimary font-normal text-base'>MySQL</h3>
                <p className='text-zinc-500 font-normal text-sm'>Intermediate</p>
              </div>
            </div>
          </div>

          <div className='border border-none w-40'>
            <div className='flex p-3'>
              <i className='bx bx-badge-check text-textPrimary mr-2'></i>
              <div className='block'>
                <h3 className='text-textPrimary font-normal text-base'>MongoDB</h3>
                <p className='text-zinc-500 font-normal text-sm'>Basic</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap justify-start'>
          <div className='border border-none w-40'>
            <div className='flex p-3'>
              <i className='bx bx-badge-check text-textPrimary mr-2'></i>
              <div className='block'>
                <h3 className='text-textPrimary font-normal text-base'>Rest API</h3>
                <p className='text-zinc-500 font-normal text-sm'>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Backend