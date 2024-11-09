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

      <div className='md:hidden z-20'>
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
      <div className='flex gap-3'>
        <ul className='bg-white  flex gap-6 rounded-full px-4 py-4 bg-opacity-30 backdrop-blur-sm'>
          {navLinks.map((page) => (
            <li key={page.href} className='text-lg'>
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))}
        </ul>
        <div className='bg-white rounded-full bg-opacity-30 backdrop-blur-sm px-4 py-4'>
          {
            <Link href='/cart' className='flex gap-2 text-lg'>
              <ShoppingCart className='w-6 h-6' />
              Cart
            </Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
