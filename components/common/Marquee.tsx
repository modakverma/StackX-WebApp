import React from 'react'

const Marquee = () => {
    const textStyle = {
        WebkitTextStrokeWidth: '1.5px',
        WebkitTextStrokeColor:'#fff',
        color:'transparent',
      };
  return (
     <div className="
     relative
     p-10
     flex
     items-center
     w-full
     overflow-x-hidden ">
       <div className="
 
       text-6xl
       text-white
       whitespace-nowrap
       whitespace-nowrap
       tracking-wide
       gap-10
       font-extrabold
       uppercase
       flex
       flex-row
       animate-marquee
       "
       style={textStyle}
       >
         
    Turning Dreams into Digital Wonders
    <img src="/aboutImg/marquee-star.svg" alt="img" />
    Elevate Your Brand with Innovative Apps 
    <span></span>
    <span></span>

     </div>
       <div className="

       text-6xl
       text-white
       whitespace-nowrap
       whitespace-nowrap
       tracking-wide
       gap-10
       font-extrabold
       uppercase
       flex
       flex-row

       animate-marquee2
       "
       style={textStyle}
       >
         
    Turning Dreams into Digital Wonders
    <span><img src="/aboutImg/marquee-star.svg" alt="img" /></span>
    Elevate Your Brand with Innovative Apps 

     </div>
     </div>
  )
}

export default Marquee
