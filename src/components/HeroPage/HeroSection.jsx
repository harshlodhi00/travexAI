import { FaExternalLinkAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className=" flex flex-col items-center justify-between py-[120px] my-10   space-y-8 ">
      <div className=" w-[80%] font-[700] text-center text-6xl bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-800">
        Effortlessly create stunning social media and ad creatives with TravexAI
        in seconds!
      </div>

      <div className="text-[18px] font-[500] ">
        TravexAI is an advanced AI tool that automates the creation of engaging
        social media and ad content.
      </div>
      <div className="flex flex-col items-center">
        <button className="flex flex-row items-center justify-center border-[rgb(87,60,255)] bg-[rgb(87,60,255)] border-2 text-white hover:bg-[white] hover:border-[rgb(87,60,255)]  hover:text-[rgb(87,60,255)]  rounded-[8px] font-[500] active:bg-[rgb(87,60,255)]  active:text-white  px-4 py-2 min-h-[40px]">
          <span className="mr-2"> Generate your free ad content Now</span>
          <FaExternalLinkAlt />
        </button>
        <span className="text-sm mt-[2px]">No credit card required</span>
      </div>
    </div>
  );
}
