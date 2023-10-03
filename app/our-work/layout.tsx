"use client";

import React, { useMemo } from 'react'
import Footer from '@/components/common/Footer'
import Marquee from '@/components/common/Marquee';
import PageBannerImg from '@/components/common/PageBannerImg';
import { usePathname } from 'next/navigation';
import OurWorkItem from '@/components/ourWork/OurWorkItem';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    const workItem = useMemo(()=>[
      {
        title:'APP DEV',
        href:'/our-work/app-dev',
        active:pathname === '/our-work/app-dev',
      },
      {
        title:'WEB DEV',
        href:'/our-work/web-dev',
        active:pathname === '/our-work/web-dev',
      },
      {
        title:'MARKETING',
        href:'/our-work/marketing',
        active:pathname === '/our-work/marketing',
      },
  
    ],[pathname])
    return (
          <div className='bg-[#202020]'>
          <PageBannerImg title="Our Work" imgUrl='/ourWorkImg/our-work-banner.png' />
     
           <Marquee/>
     
           <div className='w-full
           flex
           justify-center
           items-center
           p-10
           pt-0
           '>
             <div className='flex
           flex-row
           items-center
           justify-center
           gap-20
           w-full
           text-white
           '>
        {
         workItem.map(
            (item)=>
            <OurWorkItem {...item}/>
         )
        }
         </div>
        </div>
     
        <div>
            {children}
        </div>
     
           <Footer/>
         </div>
    )
  }