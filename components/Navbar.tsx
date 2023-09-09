"use client";
import { usePathname } from 'next/navigation'
import { useMemo } from 'react';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import NavItem from './NavItem'

interface NavProps {
    children: React.ReactNode;
}

const Navbar: React.FC<NavProps> = ({ children }) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Our Work',
            active: pathname === '/',
            href: '/',
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
           p-4
           pr-8
           flex
           flex-row
           justify-between
           '>
         <div className='
        flex
        text-white
        items-center
        '>
            <img src="Logo-transparent.svg" alt="Logo" />
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
