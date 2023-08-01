
import Image from 'next/image'
import FormLogin from './formLogin'

export default function page () {

  return (
    <div className='relative flex justify-center'>
      <div className='bg-[#EFF3DD] w-full h-[27rem] absolute -z-10 md:hidden'>
        <Image src={'login.svg'} alt='asd' layout='fill' objectFit='contain' />
      </div>
      <div className='md:p-10 rounded-3xl border bg-white bg-opacity-90 absolute mt-56 md:w-1/3 w-full py-4 px-5'>
        <div className='flex justify-between items-baseline'>
          <h2 className='font-extrabold text-3xl'>Hello,</h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </div>
        <label className='text-sm font-normal'>
          Please Login to your account
        </label>
        <div className='flex flex-col gap-2 mt-5'>
          <FormLogin />
          <label className='text-center text-xs font-semibold my-1'>OR</label>
          <div className='flex justify-between'>
            <button className='btn bg-[#4268B3] rounded-3xl w-20 text-white'>
              f
            </button>
            <button className='btn bg-[#D44837] rounded-3xl w-20 text-white'>
              G
            </button>
            <button className='btn bg-[#0177B5] rounded-3xl w-20 text-white'>
              in
            </button>
          </div>
          <label className='text-center text-xs font-semibold'>
            Don't have an account ? <a className='text-[#FF9738]'>Register</a>
          </label>
        </div>
      </div>
    </div>
  )
}
