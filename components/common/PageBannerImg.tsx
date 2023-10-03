import React from 'react'

interface PageBannerImgProps{
    title:string;
    imgUrl:string;
}

const PageBannerImg:React.FC<PageBannerImgProps> = ({
    title,
    imgUrl
}) => {

    const heading = title.split(' ');

  return (
    <div className="
        h-96
        w-full
        bg-cover
        bg-center
        relative
        " >
        <div className="absolute
        top-0
        left-0
        bottom-0
        w-full
        bg-gradient-to-r
        z-20
        from-[#202020]
        via-[#202020bb]
        to-transparent
        "></div>
        <img src={imgUrl} alt="img" className="absolute 
        object-cover
        w-full
        h-full
        mix-blend-overlay
        "/>
        <h1 className="
        translate-x-1/2	
        translate-y-1/3	
        right-1/2
        absolute
        w-full
        h-full
        text-center
        text-white
        text-8xl
        font-light
        z-30
        ">
         {heading[0]} <span className="
          cursor-pointer
          font-bold
          hover:text-[#016CEC]
          transition
          duration-500
          ">{heading[1]}</span>
        </h1>
        </div>
  )
}

export default PageBannerImg
