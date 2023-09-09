const BestServices = () => {
  return (
    <div
    className="relative flex flex-col pr-14 pb-8  bg-white"
    >
     <div className="relative
     cursor-pointer 
     flex 
     flex-row 
     w-full 
     h-4/5 ">
     <div className=" w-3/4
     ">
       <div className="
       absolute
       top-0
       bottom-0
       left-0
       right-0
       transition
       duration-[1s]
       bg-white/2
       hover:backdrop-blur-sm
       group
       ">
        <div className="
        absolute
        left-14
        bottom-14
        text-white
        opacity-80
        transition
        group-hover:opacity-100
        flex
        flex-row
        ">
          <div className="
          border-r-2
          pr-6
          ">
             <span className="
             text-[#BDBDBD]
             font-extralight
             text-xl
             flex
             flex-col
             ">We are based in</span>
             <span  className="
             text-white
             font-medium
             text-xl
             ">Himachal Pradesh</span>
          </div>
          <div className="
          pl-6">
             <span className="
             text-[#BDBDBD]
             font-extralight
             text-xl
             flex
             flex-col
             ">We've completed</span>
             <span className="
             text-white
             font-medium
             text-xl
             ">25+ Projects</span>
          </div>
        </div>
       </div>
     <img 
      src="https://s3-alpha-sig.figma.com/img/7773/0348/48cf07a01e3784d2543b128352924684?Expires=1694390400&Signature=gyaIoK1uA13PFwzPl9fD04Mfv8VWqWavZTLmm51zVj09s12rUXjgOQRbBcKQspHFDzA82~-T-0UhjumsIWfq0HSSjHloFhgfEe9YSzc5jBOc~tGFXY6TrqJ7fpUHiarvzdoGCExbPtCC9iAvOvSYi7FpvshYYtk72psdSzg5pQ~octa-Uh2~0TDy2roeCbnNb3JJk62TrVYJejfwjiIhI6yP1OCYKv4SfCJPRKbHVq~6mHyOvanpf6HS5hjFOing2fy6eKKRrs3AIBjZhLAH0mFAAgysww7YbR9VF0X380X9beC-rVrtjfjyZc~Dz7TJLZjkG0zN9XuI4UUIIJ0CZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""
      className="
      w-full
      transition"
      />
     </div>

      <div className=" absolute h-screen bottom-0 left-3/4 
      ">
      <div className="flex 
      flex-col 
      items-center 
      w-72 
      pt-10 
      h-full 
      realtive 
      bg-white 
      flex 
      flex-col p-4">
       <img src="./LetsTalk.svg" alt="img" className="
       absolute
       hover:scale-[1.02]
       transition
       -translate-y-3/4
       " />
      <div className="overflow-auto 
      w-full 
      flex 
      flex-col 
      items-center">
      <div className="pt-20 
      flex 
      flex-col 
      items-center 
      gap-3 ">
          <span>
           <img src="slider.svg" alt="" />
           </span>
          <span className="cursor-pointer 
          transition 
          flex 
          items-center 
          justify-center 
          bg-black 
          rounded-3xl 
          w-8 
          h-8">
            <img src="down-arrow.png" alt="" />
          </span>
       </div>
       <span className="mt-8 text-2xl font-medium" >
         Explore More
       </span>
       <p className="pt-4 font-light text-[#888] ">Scroll Down</p>
      </div>
      </div>
      </div>
      
    </div>

    <div className="flex flex-row items-center justify-between p-7 pr-0 pt-10">
        <span>
            <h1 className="text-4xl font-bold">Best Services</h1>
            <p className="text-4xl
            font-extralight">For Customers</p>
        </span>

        <div className="
          w-1/2
          pt-8
          pb-8
          text-xl 
          font-extralight
          ">
              <span>
                As a <span className="font-semibold" >modern digital agency, </span>
                  we redefine excellence in service. Our commitment to you drives us to deliver <span className="font-semibold" >innovative solutions </span> tailored to your needs. Partner with us to experience digital transformation that goes beyond the ordinary. Your success, our mission.
              </span>
          </div>

    </div>
    </div>
  )
}

export default BestServices
