import BestServices from "@/components/BestServices";
import CompanyBanner from "@/components/CompanyBanner";
import CraftingSection from "@/components/CraftingSection";
import Footer from "@/components/common/Footer";
import Showcase from "@/components/Showcase";

export default function Home() {
  const arr= [
    {
      count:'10+',
      description:'Clients',
    },
    {
      count:'98%',
      description:'Clients \nRecommending',
    },
    {
      count:'25+',
      description:'Projects \nCompleted',
    },
  ];
  return (
   <>
   <div className='
   flex
   flex-col
   gap-12
   pl-12
   pt-20
   pb-48
   pr-8
   '>

    <div
    className="
    text-white
    text-sm
    "
    >
      <span
      className="
      font-extralight
      "
      >We're a </span>
      <span className="
      font-semibold
      ">Cutting-Edge Digital Collective</span>
    </div>

    <div className="text-white
    text-7xl
    ">
      <span className="font-extralight">We're Your </span>
      <span className="font-semibold">Next-Gen </span>
      <br/>
      <span className="font-extralight">Digital Partner</span>
    </div>

    <div className="flex
    flex-col
    gap-4
    absolute
    right-6
    ">
      <img src="fb-icon.svg" alt="fb" className="w-7 cursor-pointer" />
      <img src="insta-icon.svg" alt="insta" className="w-7 cursor-pointer" />
      <img src="twitter-icon.svg" alt="twitter" className="w-7 cursor-pointer" />
    </div>

   </div>
   <BestServices/>
   <CraftingSection/>
   <Showcase/>
   <CompanyBanner/>

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
              <h1 className="
              text-4xl
              font-bold
              ">Unvelling our Tech Tale</h1>
              <span className="
              text-4xl
              font-extralight
              ">Through Numbers</span>
          </div>

          <div className="
          w-1/2
          text-xl 
          font-extralight
          ">
              <span>
                  <span className="font-semibold" >Digits Define Us:</span>
                  Where <span className="font-semibold" >Tech Innovation Counts.</span> Welcome to a world where <span className="font-semibold" >naumbers narrate our tech journey.</span> Each figure encapsulates <span className="font-semibold" >innovaion, growth, and impact, </span>outlining our path of excellence.
              </span>
          </div>
      </div>

   <div className="flex
  items-center 
  flex-row
  justify-between
  overflow-hidden
  bg-[#202020]
  ">
    {
       arr.map((item)=>(
   <div className="
          relative
          w-1/3
          cursor-pointer
          p-10
          pt-32
          pb-20
          flex 
          flex-col
          gap-10
          group
          ">
              <h1 className="
              text-[#016CEC]
              group-hover:text-white
              group-hover:z-20
              delay-100
              duration-1000
              font-semibold
              text-6xl
              z-20
              ">{item.count}
              </h1>
              <span className="
              group-hover:text-white
              group-hover:z-20
              delay-100
              z-20
              duration-1000
              whitespace-pre
              text-4xl
              font-light
              text-[#7E7E7E]
              ">{item.description}</span>

              <div className="
              z-10
              absolute
              top-[-50px]
              left-0
              right-0
              bottom-[-80px]
              bg-[#016CEC]
              translate-y-full
              group-hover:translate-y-0
              transition
              delay-100
              duration-[2.8s]
              ">
               <svg className="
               absolute
               top-[-80px]
               "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#016CEC" fill-opacity="1" d="M0,192L60,208C120,224,240,256,360,229.3C480,203,600,117,720,106.7C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
              </div>
              <div className="
              z-0
              absolute
              top-[-130px]
              left-0
              right-0
              bottom-[-95px]
              bg-[#0189F1]
              translate-y-full
              group-hover:translate-y-6
              transition
              delay-0
              duration-[2.8s]
              ">
             <svg className="
               absolute
               top-[-80px]
               "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0189F1" fill-opacity="1" d="M0,64L40,96C80,128,160,192,240,213.3C320,235,400,213,480,181.3C560,149,640,107,720,117.3C800,128,880,192,960,192C1040,192,1120,128,1200,101.3C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
              </div>
          </div>

))
 }
</div>

   <Footer />
   </>
  )
}
