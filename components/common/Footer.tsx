const Footer = () => {

  return (
    <div>

      <div className="
      flex
      flex-row
      justify-between
      items-center
      px-20
      py-28
      bg-white
      ">
         <div>
             <h1 className="font-semibold
             text-4xl
             ">Do You Have A Project In Mind</h1>
             <span className="
             text-4xl
             font-extralight
             ">Let's Talk</span>
         </div>
         <div className="
         bg-[#016CEC]
         text-white
         font-light
         text-3xl
         py-4
         px-8
         ">
             <button>
                 Message Us
             </button>
         </div>
      </div>

      <div className="flex
      bg-[#202020]
      flex-row
      justify-between
      p-8
      text-white
      text-lg
      font-light
      ">
        <span>&#169;Copyright 2023 StackX Solutions. All Rights Reserved.</span>
        <span>Privacy Policy and Cookie Policy</span>
      </div>
       
    </div>
  )
}

export default Footer