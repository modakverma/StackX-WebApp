interface OurWorkProps {
  children: React.ReactNode;
}

const page:React.FC<OurWorkProps> = ({
  children
}) => {
  return (
//     <div className="
//     rotate-180
//     flex
//     w-full
//     items-center
//     justify-center
//     pt-[20px]
//     ">
//       <svg className="
//       rotate-180
//       bg-white
//       rounded-[50%]
//       animate-bounce
// w-[50px] h-[50px] p-[7px] text-[#016CEC]" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
//       <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//     </svg>
//     </div>
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
