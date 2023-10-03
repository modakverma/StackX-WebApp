"use client"

import { useRouter } from "next/navigation"

const page = () => {
  const router = useRouter();

  return (
    <div className='
    grid
    grid-cols-2
    gap-10
    gap-y-20
    text-white
    pb-[150px]
    pt-10
    px-[30px]
    '>
     <div className='relative
     group
     '>
       <img src="/ourWorkImg/app-dev1.png" alt="" />

       <div className='absolute
       top-10
       bottom-10
       left-[55px]
       right-[55px]
       bg-[#3F3F3FCC]
       hidden
       group-hover:block
       transition
       duration-500
       cursor-pointer
       '>
        <div className='relative
        w-full
        h-full
        '>
        <span className='absolute
        bottom-[30px]
        left-[30px]
        '>
        <h1 className='text-[#016CEC] 
         text-xl
         font-bold'>
           LOCO TIK
         </h1>
         <p className='font-extralight'>Video Quiz App</p>
        </span>
        </div>
       </div>

       <button 
        onClick={
          ()=>{
            router.push('/loco-tik')
          }
       }
       className='absolute
       right-[20px]
       bottom-[25px]
       bg-[#016CEC]
       py-[10px]
       px-[26px]
       rounded-3xl
       font-light
       '>
         READ MORE
       </button>
     </div>

     <div className='relative group'> 
     <div className='absolute
       top-10
       bottom-10
       left-[55px]
       right-[55px]
       bg-[#3F3F3FCC]
       hidden
       group-hover:block
       transition
       duration-500
       cursor-pointer
       '>
        <div className='relative
        w-full
        h-full
        '>
        <span className='absolute
        bottom-[30px]
        left-[30px]
        '>
        <h1 className='text-[#016CEC] 
         text-xl
         font-bold'>
           LOCO TIK
         </h1>
         <p className='font-extralight'>Video Quiz App</p>
        </span>
        </div>
       </div>
       <button className='absolute
       right-[20px]
       bottom-[25px]
       bg-[#016CEC]
       py-[10px]
       px-[26px]
       rounded-3xl
       font-light
       '>
         READ MORE
       </button>
       
       <img src="/ourWorkImg/app-dev2.png" alt="" />
     </div>

     <div className='relative group'>
     <div className='absolute
       top-10
       bottom-10
       left-[55px]
       right-[55px]
       bg-[#3F3F3FCC]
       hidden
       group-hover:block
       transition
       duration-500
       cursor-pointer
       '>
        <div className='relative
        w-full
        h-full
        '>
        <span className='absolute
        bottom-[30px]
        left-[30px]
        '>
        <h1 className='text-[#016CEC] 
         text-xl
         font-bold'>
           LOCO TIK
         </h1>
         <p className='font-extralight'>Video Quiz App</p>
        </span>
        </div>
       </div>

       <button className='absolute
       right-[20px]
       bottom-[25px]
       bg-[#016CEC]
       py-[10px]
       px-[26px]
       rounded-3xl
       font-light
       '>
         READ MORE
       </button>

       <img src="/ourWorkImg/app-dev3.png" alt="" />
     </div>
    </div>
  )
}

export default page
