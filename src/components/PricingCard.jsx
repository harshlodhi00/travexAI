import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const PricingCard = () => {
  return (
    <div className="flex flex-row items-start  justify-between px-10 mt-10">
      <div className="w-[300px] bg-[rgb(87,60,255)] rounded-[20px] px-4 py-6 space-y-2 hover:scale-[1.05] transition-all  shadow-2xl">
        <div className="bg-white rounded-full px-4 py-[3px] mb-[3px] inline-block  ">
          <span className="text-[16px] font-[500] text-[rgb(87,60,255)] ">
            Try then Buy
          </span>
        </div>

        <div className="text-[40px] font-[600] text-white !my-0 ">Free</div>

        <div className="text-[35px] font-[600] text-[#FDDA0D] !my-0  ">
          ₹0/- <span className="text-[16px] font-[500]"> 1 Month</span>
        </div>

        <div className="space-y-2">
          <div className="flex flex-row items-center justify-start">
            <span className="text-[rgb(87,60,255)] px-[5px] rounded-full bg-white mr-2">
              ✓
            </span>
            <span className="text-white">No credit card required </span>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="text-[rgb(87,60,255)] px-[5px] rounded-full bg-white mr-2">
              ✓
            </span>
            <span className="text-white">1 month</span>
          </div>
        </div>
        <button className="w-full h-[50px] border-white bg-[rgb(87,60,255)] border-2 text-white hover:bg-[white] hover:text-[rgb(87,60,255)]  rounded-[12px] !mt-4 font-[500] active:bg-[rgb(87,60,255)]  active:text-white  flex flex-row items-center justify-center ">
          <span className="mr-2">Get Started</span> <FaExternalLinkAlt />
        </button>
      </div>

      <div className="w-[300px] bg-[rgb(87,60,255)] rounded-[20px] px-4 py-6 space-y-2 hover:scale-[1.05] transition-all shadow-2xl">
        <div className="bg-white rounded-full px-4 py-[3px] mb-[3px] inline-block  ">
          <span className="text-[16px] font-[500] text-[rgb(87,60,255)] ">
            Best
          </span>
        </div>

        <div className="bg-[rgb(217,255,216)] text-[16px] font-[500] px-4 py-[3px] inline-block rounded-full ">
          Limited time offer : 50% OFF!
        </div>

        <div className="text-[40px] font-[600] text-white !my-0 ">
          Quaterly Plan
        </div>

        <div className="text-[35px] font-[600] text-[#FDDA0D] !my-0  ">
          ₹3000/- <span className="text-[16px] font-[500]"> 3 Months</span>
        </div>

        <div className="space-y-2">
          <div className="flex flex-row items-center justify-start">
            <span className="text-[rgb(87,60,255)] px-[5px] rounded-full bg-white mr-2">
              ✓
            </span>
            <span className="text-white">100+ templates*</span>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="text-[rgb(87,60,255)] px-[5px] rounded-full bg-white mr-2">
              ✓
            </span>
            <span className="text-white">Number of downloads - 100</span>
          </div>
        </div>
        <button className="w-full h-[50px] border-white bg-[rgb(87,60,255)] border-2 text-white hover:bg-[white] hover:text-[rgb(87,60,255)]  rounded-[12px] !mt-4 font-[500] active:bg-[rgb(87,60,255)]  active:text-white ">
          Purchase Now
        </button>
      </div>

      <div className="w-[300px] bg-[rgb(87,60,255)] rounded-[20px] px-4 py-6 space-y-2 hover:scale-[1.05] transition-all shadow-2xl">
        <div className="bg-white rounded-full px-4 py-[3px] mb-[3px] inline-block  ">
          <span className="text-[16px] font-[500] text-[rgb(87,60,255)] ">
            Business
          </span>
        </div>

        <div className="bg-[rgb(217,255,216)] text-[16px] font-[500] px-4 py-[3px] inline-block rounded-full ">
          Limited time offer : 50% OFF!
        </div>

        <div className="text-[36px] font-[600] text-white !my-0 text-nowrap ">
          Half yearly Plan
        </div>

        <div className="text-[35px] font-[600] text-[#FDDA0D] !my-0  ">
          ₹5000/- <span className="text-[16px] font-[500]"> 6 Months</span>
        </div>

        <div className="space-y-2">
          <div className="flex flex-row items-center justify-start">
            <span className="text-[rgb(87,60,255)] px-[5px] rounded-full bg-white mr-2">
              ✓
            </span>
            <span className="text-white">25+ creative types </span>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="text-[rgb(87,60,255)] px-[5px] rounded-full bg-white mr-2">
              ✓
            </span>
            <span className="text-white">1000+ templates*</span>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="text-[rgb(87,60,255)] px-[5px] rounded-full bg-white mr-2">
              ✓
            </span>
            <span className="text-white">Number of downloads - 200</span>
          </div>
        </div>
        <button className="w-full h-[50px] border-white bg-[rgb(87,60,255)] border-2 text-white hover:bg-[white] hover:text-[rgb(87,60,255)]  rounded-[12px] !mt-4 font-[500] active:bg-[rgb(87,60,255)]  active:text-white ">
          Purchase Now
        </button>
      </div>

      <div className="w-[300px] bg-[rgb(87,60,255)] rounded-[20px] px-4 py-6 space-y-2 hover:scale-[1.05] transition-all shadow-2xl">
        <div className="bg-white rounded-full px-4 py-[3px] mb-[3px] inline-block  ">
          <span className="text-[16px] font-[500] text-[rgb(87,60,255)] ">
          Enterprise
          </span>
        </div>

        <div className="bg-[rgb(217,255,216)] text-[16px] font-[500] px-4 py-[3px] inline-block rounded-full ">
          Limited time offer : 50% OFF!
        </div>

        <div className="text-[40px] font-[600] text-white !my-0 ">
          Yearly Plan
        </div>

        <div className="text-[35px] font-[600] text-[#FDDA0D] !my-0  ">
          ₹8000/- <span className="text-[16px] font-[500]"> 3 Months</span>
        </div>

        <div className="space-y-2">
          <div className="flex flex-row items-center justify-start">
            <span className="text-[rgb(87,60,255)] px-[5px] rounded-full bg-white mr-2">
              ✓
            </span>
            <span className="text-white">25+ creative types </span>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="text-[rgb(87,60,255)] px-[5px] rounded-full bg-white mr-2">
              ✓
            </span>
            <span className="text-white">1000+ templates*</span>
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="text-[rgb(87,60,255)] px-[5px] rounded-full bg-white mr-2">
              ✓
            </span>
            <span className="text-white">Unlimited Downloads</span>
          </div>
        </div>
        <button className="w-full h-[50px] border-white bg-[rgb(87,60,255)] border-2 text-white hover:bg-[white] hover:text-[rgb(87,60,255)]  rounded-[12px] !mt-4 font-[500] active:bg-[rgb(87,60,255)]  active:text-white ">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
