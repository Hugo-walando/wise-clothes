'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='absolute w-full flex items-center justify-between p-10 z-50'>
      <Link href='/' className='text-6xl'>
        WISE
      </Link>

      <div className='md:hidden bg-white bg-opacity-30 backdrop-blur p-2 rounded-full z-20'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full p-2 focus:outline-none`}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-[-1000px]'
        }  md:flex gap-3 bg-white md:translate-x-0 bg-opacity-40 md:bg-transparent transition-transform duration-500 ease-in-out backdrop-blur-sm md:backdrop-blur-none absolute md:static left-0 w-full h-screen md:w-auto md:h-auto top-0 py-16 md:p-0 z-10 px-20 md:px-0`}
      >
        <ul className='md:bg-white md:flex gap-6 md:rounded-full md:p-4 md:bg-opacity-30 md:backdrop-blur-sm'>
          {navLinks.map((page) => (
            <li key={page.href} className='text-5xl md:text-lg mt-6 md-mt-0'>
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))}
        </ul>
        <div className='md:bg-white md:rounded-full md:bg-opacity-30 md:backdrop-blur-sm md:p-4'>
          {
            <Link
              href='/cart'
              className='flex gap-2 text-5xl md:text-lg mt-6 md-mt-0'
            >
              <ShoppingCart className='w-10 h-10 md:w-6 md:h-6' />
              Cart
            </Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
