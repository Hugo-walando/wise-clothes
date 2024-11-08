'use client';

import GridPattern from '@/components/ui/grid-pattern';

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
      <section className='h-screen w-full bg-gradient-to-b to-landing_gradient_brown from-landing_gradient_blue '></section>
      <section className='h-screen bg-white'></section>
    </>
  );
}
