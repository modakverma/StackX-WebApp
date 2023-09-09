const CompanyBanner= () => {
    const arr =[
        {
          ImgUrl:'fotoclash-icon.svg'
        },
        {
          ImgUrl:'init-logo.svg'
        },
        {
          ImgUrl:'Gt-logo.svg'
        },
        {
          ImgUrl:'jdmguide-logo.svg'
        },
        {
          ImgUrl:'craffic-logo.svg'
        },
        {
          ImgUrl:'removebg-logo.svg'
        },
        {
          ImgUrl:'boomsville-logo.svg'
        },
      ]
  return (
    <div className="flex overflow-auto flex-row justify-between w-full bg-[#202020]  pr-12 pl-12">
      {
          arr.map((item)=>(
              <img className="w-1/8
              cursor-pointer
               grayscale
               transition
               hover:grayscale-0
               " src={item.ImgUrl} alt="" />
          ))
      }
    </div>
  )
}

export default CompanyBanner
