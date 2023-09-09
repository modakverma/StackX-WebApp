import React from 'react'

const Showcase = () => {
  return (

    <div className='relative flex flex-col  pt-24 p-8 h-screen bg-white'>

      <div className='flex w-full flex-row justify-between'>
        <div className='w-1/2'>
          <h1 className='
    text-4xl
    font-bold
    '>Showcasing Our</h1>
          <span
            className='text-4xl
    font-extralight
    '
          >Contemporary Craftsmenship</span>
        </div>
        <div className="
          w-1/2
          text-xl 
          font-extralight
          ">
          <span>
            <span className="font-semibold" >Enter a relm of digital marvels,</span>
            where <span className="font-semibold" >client triumphs illuminate.</span> As pioneers and architects of contemporary success, we seamlessly fuse creativity and technology in every project, reshaping boundaries.
          </span>
        </div>
      </div>

      <div className='w-full  relative h-full flex 
      justify-center items-center'>

        <div className='relative w-3/5 flex justify-center items-center group '>

          <div className="
        z-30
        scale-[1.60]
        left-0
        hover:z-30
        w-92
        h-92
        group-hover:scale-[1]
        hover:!scale-[1.7]
transition
        ">
            <img className='
      object-cover 
      z-30
      left-0
      cursor-pointer
      ' src="frame1.svg" alt="" />
          </div>

          <div className="
z-20
scale-[1.52]
left-1/4
 w-92
 h-92
 group-hover:scale-[1.2]
 hover:!scale-[1.7]
 hover:z-30
transition
">
            <img className='
      object-cover
      cursor-pointer
      '  src="rect-2.svg" alt="" />
          </div>

          <div className="
z-10
scale-[1.6]
hover:z-30
left-2/4
 w-92
 h-92
 group-hover:scale-[1.35]
 hover:!scale-[1.7]
transition
">
            <img className='
      z-10
      object-cover
      cursor-pointer
      '  src="rect-3.svg" alt="" />
          </div>

          <div className=" 
scale-[1.50]
left-3/4
hover:z-30
w-98
 h-98
 group-hover:scale-[1.2]
 hover:!scale-[1.8]
transition
">
            <img className='
      cursor-pointer
      z-0
      '  src="rect-4.svg" alt="" />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Showcase
