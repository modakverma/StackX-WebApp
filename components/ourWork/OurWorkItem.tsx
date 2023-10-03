"use-client"

import Link from 'next/link';
import {twMerge} from "tailwind-merge";
import React from 'react'
import { usePathname } from 'next/navigation';

interface OurWorkItemProps{
    title:string;
    active?:boolean;
    href:string;
}

const OurWorkItem: React.FC<OurWorkItemProps>=({
    title,
    active,
    href
}) => {

  const pathname = usePathname();

  return (
    <div
         className=
          {twMerge(
          `
          text-xl
          rounded-3xl
          border-[1px]
          px-10
          py-[6px]
          transition
          `,
          pathname!=='/our-work' && "animate-bounce",
          active && "text-blue-500 font-bold animate-none"
          )}
          >
            <Link
            href={href}
            className={twMerge(
              `
              text-xl
              `,
              active && "text-blue-500 font-bold"
            )}
            >
              {title}
          </Link>
       </div>
  )
}

export default OurWorkItem
