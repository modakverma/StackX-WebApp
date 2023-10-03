"use client";
import { usePathname } from 'next/navigation'
import { useMemo } from 'react';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import NavItem from './NavItem'
import Link from "next/link";

interface NavProps {
    children: React.ReactNode;
}

const Navbar: React.FC<NavProps> = ({ children }) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Our Work',
            active: pathname === '/our-work',
            href: '/our-work',
        },
        {
            icon: BiSearch,
            label: 'Services',
            active: pathname === '/services',
            href: '/services'
        },
        {
            icon: BiSearch,
            label: 'About Us',
            active: pathname === '/about-us',
            href: '/about-us'
        },
        {
            icon: BiSearch,
            label: 'Products',
            active: pathname === '/products',
            href: '/products'
        },
    ], [pathname]);
    return (
        <div
        className='bg-[#202020]'> <div className='
           p-1
           pr-8
           flex
           flex-row
           justify-between
           '>
    <Link href='/'>
    <div className='
        flex
        text-white
        items-center
        '>
            <img src="/Logo-transparent.svg" alt="Logoz" />
            <div className='flex
         gap-2
         text-xl
         font-medium
         '>
            <span className='
            bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-300
            '>STACKX</span>
            <span>SOLUTIONS</span>
            </div>
        </div>
    </Link>
   <div className="
    text-sm
    flex
    flex-row
    gap-y-4
    gap-24
    items-center
    ">
        {
            routes.map((item) => (
                <div>
                    <NavItem
                        key={item.label}
                            {...item}
                    />
                </div>

                ))
        }
        </div>
    </div>

   <main>
        {children}
    </main>

    </div>
)
}

export default Navbar
