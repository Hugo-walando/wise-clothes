'use client';

import GridPattern from '@/components/ui/grid-pattern';
import hoody from '../../public/images/hoody-main-landing.png';
import cutHoody from '../../public/images/cut-hoody.png';
import chromeHoody from '../../public/images/chrome-hoody.jpg';
import Image from 'next/image';

import { ArrowDownRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className='h-screen w-full flex flex-col justify-end bg-gradient-to-b to-col_landing_gradient_brown from-col_landing_gradient_blue'>
        <GridPattern
          width={100}
          height={100}
          x={-1}
          y={-1}
          className='absolute  inset-0'
        />
        <h1 className='w-full text-7xl lg:text-9xl max-w-[300px] px-2 lg:px-0 text-left lg:left-10 top-36 absolute lg:max-w-[500px] lg:leading-[100px]'>
          Digital Fashion is <br /> a new chapter
        </h1>
        <div className='hidden sm:w-full sm:flex justify-center absolute top-0 h-full'>
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
      <section className='h-auto relative bg-black padding-x flex justify-center'>
        <GridPattern
          width={100}
          height={100}
          x={-1}
          y={-1}
          className='absolute inset-0'
        />
        <div className='flex flex-col items-center md:flex-row md:justify-between md:items-end gap-4 lg:gap-10 pt-20 md:pt-40 pb-20 max-w-[1600px] '>
          <div className='w-[250px] sm:w-[300px] lg:w-[400px] xl:w-[500px] h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px] order-2 md:order-1 z-20'>
            <Image
              src={chromeHoody}
              alt='hoody'
              className='w-full object-cover h-full'
            />
          </div>
          <div className='flex flex-col md:max-w-[50%] z-10 order-1 md:order-2'>
            <div className='flex py-4 md:py-16'>
              <div className='rounded-full ml-12 md:ml-0 bg-col_green_primary w-14 h-14 lg:w-20 lg:h-20 z-10 flex items-center justify-center'>
                <ArrowDownRight className='w-10 h-10 lg:w-14 lg:h-14' />
              </div>
              <span></span>
            </div>
            <div className='text-center md:text-left mb-4 md:mb-0 px-2 md:px-0 '>
              <span className='roboto text-lg font-medium text-col_light_grey '>
                About Wise
              </span>
              <h2 className='big-text font-medium pt-10 text-col_light_grey '>
                We are a digital fashion house{' '}
                <span className='text-col_dark_grey'>
                  that mixes technology and creativity
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className='h-screen '></section>
    </>
  );
}
