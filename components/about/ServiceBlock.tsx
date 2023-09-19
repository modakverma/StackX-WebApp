interface ServiceBlockProps{
    heading:string;
    description:string;
    imgUrl:string;
  }
const ServiceBlock:React.FC<ServiceBlockProps> = ({
   heading,
   description,
   imgUrl
  }) => {
  return (
    <div className="flex
    cursor-pointer
    w-full
    justify-end
    bg-red
    flex-col
    gap-[20px]
    w-[150px]
    ">
      <img src={imgUrl} alt="img" className="
      fill-white
      w-3/4
      " />
      <h1 className="
      font-medium
      text-white
      text-4xl
      w-full

      ">{heading}</h1>
      <p className="font-thin
      text-white
      ">
        {description}
      </p>
      <span className="w-32 bg-[#016CEC] flex flex-row text-white p-3 text-sm font-light 
                 cursor-pointer
                 transition
                 hover:bg-blue-600">
                 <button>Get a Quote</button>
                 <img src="right-arrow.svg" alt="" />
                 </span>
    </div>
  )
}

export default ServiceBlock
