import CompanyBanner from "@/components/CompanyBanner"
import CraftingSection from "@/components/CraftingSection"
import Footer from "@/components/Footer"

const AboutUs = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-10 pb-20">
        <h1 className="text-center
        text-white
        text-8xl
        font-light
        ">
          About <span className="
          cursor-pointer
          font-bold
          hover:text-[#016CEC]
          transition
          ">Us</span>
        </h1>

        <div className="border-y
        border-[#FFF]
        text-white
        text-xl
        font-extralight
        ">
          <p className="p-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis nesciunt natus eveniet voluptates repellendus provident vero ad rerum? Iusto totam aspernatur quasi, eos a corrupti quidem nisi ipsum minus. A, sint vel!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est voluptatem obcaecati temporibus sunt illum dolorum maiores ratione numquam nesciunt asperiores voluptatum blanditiis non commodi vitae, veritatis ad tenetur architecto id similique. Cum.
          </p>
        </div>
      </div>
      <CompanyBanner/>
      <Footer/>
    </div>
  )
}

export default AboutUs