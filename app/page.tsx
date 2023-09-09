import BestServices from "@/components/BestServices";
import CompanyBanner from "@/components/CompanyBanner";
import CraftingSection from "@/components/CraftingSection";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";

export default function Home() {
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
      <img src="fb-icon.svg" alt="" className="w-7 cursor-pointer" />
      <img src="insta-icon.svg" alt="" className="w-7 cursor-pointer" />
      <img src="twitter-icon.svg" alt="" className="w-7 cursor-pointer" />
    </div>

   </div>
   <BestServices/>
   <CraftingSection/>
   <Showcase/>
   <CompanyBanner/>
   <Footer/>
   </>
  )
}
