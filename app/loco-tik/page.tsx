import Footer from "@/components/common/Footer"

const page = () => {
  return (
    <div>
      <div className="
    bg-[#202020]/90
    py-[45px]
    px-[32px]
    absolute
    text-white
    w-full
    flex
    flex-row
    justify-between
    items-center
    ">
      <div>
        <h1 className="font-bold text-4xl">LOCO TIK</h1>
      </div>
      <div className="font-light text-white text-md flex gap-[35px]">
        <button className="bg-[#016CEC] px-[15px] py-[7px] items-center rounded-full">APP DEVELOPMENT</button>
        <button className="bg-[#016CEC] px-[15px] py-[7px] items-center rounded-full" >UI/UX DESIGN</button>
      </div>
    </div>
    <img className="bg-[#D06929] w-full" src="/ourWorkImg/loco-tik1.svg/" alt="img" />

    <div className="
    flex 
    flex-row
    text-white
    ">
    <div className="
    py-[40px]
    pl-[32px]
    pr-[15px]
    w-[70%]
    flex
    flex-col
    gap-[32px]
    font-extralight text-white text-xl
    ">
      <h1 className="
      font-bold
      text-4xl
      pb-[10px]
      ">PROJECT OVERVIEW</h1>

      <p>
      It is a cross-platform quiz app developed in Flutter with Firebase as a database, utilizing its robust database capabilities.
      </p>
      <p>
      The app was given a user-friendly UI, meticulously crafted to provide an intuitive and visually stunning interface. Powered by Flutter's extensive widget library, it incorporates Firebase Authentication to ensure secure user access. Users can easily create accounts, log in securely, and enjoy personalized features tailored to their preferences.
      </p>
      <img src="/ourWorkImg/loco-tik2.png" alt="img" />
      <h1 className="
      font-bold
      text-4xl
      pb-[10px]
      ">OBJECTIVE</h1>

      <p>
      Develop a cross-platform quiz application with user login and signup functionality, offering video-based quizzes presented in a scrollable format similar to reels. Users can create and participate in contests, requiring the use of virtual coins that can be purchased through in-app purchases.
      </p>
      <p>
      The app includes a wallet to store the acquired coins, and upon winning a contest, the joining fees are distributed as prize money among the top three winners. The collected prize money is deposited into the app's wallet and can be withdrawn by the user at their convenience.
      </p>

      <img className="w-full pb-[250px]" src="/ourWorkImg/loco-tik3.svg" alt="" />
    </div>


      <div className="
      w-[30%]
      py-[40px]
      border-l-[1px]
      border-[#FFF]
      flex
      flex-col
      gap-[40px]
      ">
      <div className="
      border-b-[1px]
      border-[#FFF]
      px-[15px]
      pb-[40px]
      w-full
      flex
      flex-col
      gap-[40px]">
      <h1 className="font-bold
      text-3xl
      ">Technology Used</h1>
      <div className="text-slate-500
      font-bold
      text-3xl
      ">
       <img src="/ourWorkImg/loco-tik4.png" alt="img" />
      </div>
      <div className="text-slate-500
      font-bold
      text-3xl
      ">
        <img src="/ourWorkImg/loco-tik5.png" alt="img" />
      </div>
      </div>

      <div className="px-[15px]">
        <button className="text-white 
        bg-[#016CEC]
        px-[70px]
        py-[15px]
        rounded-full
        font-bold
        text-3xl
        ">Preview</button>
      </div>
      </div>
    </div>

    <Footer/>
    </div>
  )
}

export default page
