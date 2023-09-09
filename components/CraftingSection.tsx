const CraftingSection = () => {
  return (
    <div className="pt-14 pb-16 relative flex flex-col items-center justify-between gap-8 p-8 h-full bg-[#202020]">

      <div className="flex flex-col w-3/5 h-96 gap-10">
          <div className="flex flex-row justify-between items-center">

               <span className="
               cursor-pointer
               flex flex-row items-center p-2 pr-4 pl-4 gap-1  bg-white w-1/4 h-14 overflow-hidden">
                   <img src="development-icon.svg" alt="" />
                   <p className="text-medium">Development</p>
               </span>

               <span className="
               cursor-pointer
               flex flex-row items-center p-2 pr-4 pl-4 gap-1  bg-white w-1/4 h-14 overflow-hidden">
                   <img src="design-icon.svg" alt="" />
                   <p className="text-medium">Design</p>
               </span>

               <span className="
               cursor-pointer
               flex flex-row items-center p-2 pr-4 pl-4 gap-1  bg-white w-1/4 h-14 overflow-hidden">
                   <img src="marketing-icon.svg" alt="" />
                   <p className="text-medium">Marketing</p>
               </span>
          </div>

          <div className="relative bg-white h-full w-full ">
             <div className="absolute flex justify-end bottom-0 p-3 pr-6 w-full bg-[#3D3D3D]">
                 <span className="w-32 bg-[#016CEC] flex flex-row text-white p-3 text-sm font-light 
                 cursor-pointer
                 transition
                 hover:bg-blue-600">
                 <button>Get a Quote</button>
                 <img src="right-arrow.svg" alt="" />
                 </span>
             </div>
          </div>
      </div>



      <div className="pt-10 w-full flex flex-row justify-between h-1/3 ">
        <div className="flex flex-col gap-3 w-1/3">
          <h1 className="text-5xl
           text-white
           font-semibold
            ">Crafting Distinctly</h1>
           <span className="text-5xl
           text-white
           font-extralight">With Passion</span>
           <p className="text-white
           font-extralight
           text-xl
           pt-4
           ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam reiciendis aperiam corrupti dolores, suscipit optio tenetur quas minus laborum amet sint ab voluptatibus maiores nesciunt, architecto non. Veniam, fugit.</p>
        </div>
        <div>
          <img src="video-block.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CraftingSection
