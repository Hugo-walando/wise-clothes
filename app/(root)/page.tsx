'use client';

import GridPattern from '@/components/ui/grid-pattern';
import hoody from '../../public/images/hoody-main-landing.png';
import cutHoody from '../../public/images/cut-hoody.png';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <GridPattern
        width={100}
        height={105}
        x={-1}
        y={-1}
        className='absolute inset-0'
      />
      <section className='h-screen w-full flex flex-col justify-end bg-gradient-to-b to-landing_gradient_brown from-landing_gradient_blue'>
        <h1 className='w-full text-7xl lg:text-9xl max-w-[300px] px-2 lg:px-0 text-left lg:left-10 top-36 absolute lg:max-w-[500px] lg:leading-[100px]'>
          Begin the new chapter of Fashion
        </h1>
        <div className='hidden sm:block sm:w-full flex justify-center absolute top-24 sm:top-0 h-[80vh] sm:h-full'>
          <Image
            src={hoody}
            alt='hoody'
            width={1300}
            className='object-cover z-10'
          />
        </div>
        <div className='w-full sm:hidden flex justify-end h-full'>
          <Image src={cutHoody} alt='hoody' className='z-10 h-full w-auto' />
        </div>
        <div className='w-full absolute bottom-[-90px] lg:bottom-[-203px]  z-20  text-center'>
          <h2 className='text-[200px] lg:text-[450px] bg-gradient-to-t from-white text-transparent bg-clip-text'>
            Wise
          </h2>
        </div>
      </section>
      <section className='h-screen bg-white'></section>
    </>
  );
}
