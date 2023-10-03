import ServiceBlock from "@/components/about/ServiceBlock"
import Marquee from "@/components/common/Marquee"
import Footer from "@/components/common/Footer"
import PageBannerImg from "@/components/common/PageBannerImg"


const AboutUs = () => {


  const ServiceBlockData = {

    data:[
       {
           heading:"App Dev",
           description:"Our App Development Service brings your vision to life with cutting-edge technology and unmatched creativity. Elevate your brand with us today.",
           imgUrl:"/aboutImg/Union.svg"
       },
       {
           heading:"Web Dev",
           description:"Elevate Your Online Presence with Our Web Development Service. We turn concepts into captivating, user-friendly websites. Join us in shaping your digital footprint.",
           imgUrl:"/aboutImg/Union2.svg"
       },
       {
           heading:"UI/UX",
           description:"Elevate User Experiences with Our UI/UX Service. We blend design and functionality seamlessly, ensuring your digital products are intuitive, engaging, and unforgettable.",
           imgUrl:"/aboutImg/Union3.svg"
       },
       {
           heading:"SMM",
           description:"Boost Your Brand's Presence with Our Social Media Marketing Service. Our experts curate engaging content, spark conversations, and drive growth across platforms.",
           imgUrl:"/aboutImg/Union4.svg"
       },
       
    ]
 }


  const teamArr=[
    {
      name:"Sahil Negi",
      role:"App Developer,DevOps Engineer",
      img:"/aboutImg/person1.png"
    },
    {
      name:"Nikshit Sharma",
      role:"App Developer",
      img:"/aboutImg/person2.png"
    },
    {
      name:"Modak Verma",
      role:"App Developer & Web Developer",
      img:"/aboutImg/person3.png"
    },
    {
      name:"Aayush Sood",
      role:"App Developer",
      img:"/aboutImg/person4.png"
    },
    {
      name:"Abhishek Sharma",
      role:"Tech Lead",
      img:"/aboutImg/person5.png"
    },
  ]


  return (
    <div className="h-full">
      <div className="flex flex-col">

        {/* ====== page-image ========= */}

        <PageBannerImg imgUrl="/AboutImg/About-faded.png" title="About Us"/>

        {/* =========================== */}

       <div className="bg-white
       py-[45px]
       px-[20px]
       flex
       flex-row
       items-center
       justify-between
       ">
          <h1 className="font-extralight
          text-5xl
          ">
            We Go By
            <span className="font-medium
          text-5xl
          ">
             The Motto
            </span>
          </h1>

          <div className="
          font-extralight
          text-3xl
          ">
            Forging Futures, One Line Of Code At A Time
          </div>
       </div>
      </div>


      {/* ==== services ==== */}

      <div className="p-[50px]
      flex
      flex-col
      gap-20
      h-full
      ">
        <h1 className="text-white
        text-center
        font-medium
        text-6xl
        ">
          SERVICES
        </h1>
        <div className="
        w-full
        bg-red
        grid 
        gap-x-32
        gap-y-10
        grid-cols-3 
        grid-rows-2">
        {
          ServiceBlockData.data.map((item,index)=>(
            <ServiceBlock key={index} {...item} />
          ))
        }
        </div>
      </div>

      {/*======= Marquee ====== */}

      <Marquee/>


      {/* ==== Build together ====  */}

      <div className="
      grid
      grid-cols-2
      pt-[74px]
      pb-[120px]
      pl-[33px]
      ">
        <div className="w-5/6
        flex
        flex-col
        gap-[60px]
        pt-[50px]
        ">
        <h1 className="
        text-white
        text-xl
        flex
        flex-row
        items-center
        justify-end
        gap-[10px]
        ">
          Let's Build together
          <span className="pl-[15px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#016CEC"/>
         </svg>
          </span>
          <div className="bg-white
          rounded
          w-[150px]
          h-1/3
          "></div>
        </h1>

        <span className="text-4xl
        text-white
        font-bold
        ">We Build Your Dream Application
        </span>

        <p className="font-thin
        text-white
        text-2xl
        ">
        At StackX Solutions, we craft your dream app into reality. Our expert team is dedicated to transforming your vision into an exceptional digital experience. Let's bring your dream application to life together.
        </p>
        <div className="
        w-full
        flex
        flex-row
        justify-between
        text-white
        text-3xl
        font-extralight
        ">
          <div className="flex
          flex-col
          gap-[20px]
          ">
           <h1 className="
           text-[#016CEC]
           font-bold
           text-4xl
           ">25+</h1>
           <p>Projects</p>
          </div>
          <div className="flex
          flex-col
          gap-[20px]
          ">
          <h1 className="
          text-4xl
           text-[#016CEC]
           font-bold
           ">10+</h1>
           <p>Clients</p>
          </div>

          <div className="flex
          flex-col
          gap-[20px]
          ">
          <h1 className="
          text-4xl
           text-[#016CEC]
           font-bold
           ">98%</h1>
           <p>Recommending</p>
          </div>
        </div>

        <a href="https://www.fiverr.com/stackxsolutions" target="blank" >
          <div className="flex
          flex-row
          items-center
          text-white
          gap-[10px]
          text-2xl
          font-light
          ">
              
            <img src="/aboutImg/fiver.png" alt="img" />
            4.8 ⭐
          </div>
          </a>
        </div>
        <div className="
        relative
        w-full
        h-full
        ">
          <img src="/aboutImg/about-rect-img.png" alt="img" className="
          z-10
          top-0
          absolute
          right-[80px]
          bottom-0
          animate-bouncey
          ease-in-out
          " />
          <img src="/aboutImg/about-rect.png" alt="img" className="
          absolute
          right-0
          top-0
          bottom-0
          "/>
        </div>
      </div>


{/*===== OUR-TEAM======  */}

      <div className="p-10
      pt-20
      pb-20
      bg-white
      flex
      flex-row
      items-center
      justify-between
      ">
          <div>
              <span className="
              text-6xl
              font-extralight
              ">Our</span>
              <span className="
              pl-[10px]
              text-6xl
              font-bold
              ">Team</span>
          </div>

          <div className="
          w-1/2
          text-2xl 
          font-extralight
          ">
              <span>
                  <span className="font-semibold" >Meet Our Exceptional Team: </span>
                  Passionate innovators, tech enthusiasts, and creative minds. We're the driving force behind StackX Solutions, dedicated to turning your digital dreams into reality. Together, we <span className="font-semibold">redefine possibilities and create digital wonders</span>
              </span>
          </div>
      </div>



  <div className="flex 
 flex-col
 px-[70px]
 py-[84px]
 font-bold
 text-white
 text-5xl
 items-center
 ">
    <h1 className="pb-[10px]">
      The People
    </h1>
    <p className="font-extralight
    pb-[100px]
    ">That Make It Happen.</p>

    <div className="
    grid
    grid-cols-3
    gap-[80px]
    items-center
    text-center
    ">
     {
     teamArr.map((item)=>(
       <div className="flex
       flex-col
       gap-[10px]
       items-center
       cursor-pointer
       grayscale
       hover:grayscale-0
       transition
       duration-[1s]
       ">
         <img src={item.img} alt="img"/>
         <h1 className="text-xl">{item.name}</h1>
         <p className="text-base  font-extralight">{item.role}</p>
       </div>
     ))
     }
   </div>
</div>

      <Footer/>
    </div>
)
}

export default AboutUs