import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];
const Navbar = () => {
  return (
    <nav className='absolute w-full flex items-center justify-between p-10 z-10'>
      <Link href='/' className='text-6xl'>
        WISE
      </Link>
      <div className='flex gap-3'>
        <ul className='bg-white p-6 flex gap-6'>
          {navLinks.map((page) => (
            <li key={page.href} className='text-lg'>
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))}
        </ul>
        <div className='bg-white p-6'>
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
