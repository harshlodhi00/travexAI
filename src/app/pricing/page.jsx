import React from "react";
import PricingCard from "@/components/PricingCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center my-10 w-[100vw]">
        <div className="bg-[rgb(87,60,255)] rounded-full px-4 py-[3px] mb-[3px] inline-block  ">
          <span className="text-[16px] font-[500] text-white ">Pricing</span>
        </div>
        <div className="text-[50px] font-[600] text-center w-[800px]">
          Pick a plan, or try{" "}
          <span className="text-[rgb(87,60,255)]">travexAI</span> for free.
        </div>
      </div>
      <PricingCard />

      <div className="flex flex-row items-center justify-center  py-10 mt-5  ">
        <div className="mx-4 text-[18px] font-[500] ">
          Looking for an unlimited use, managed services, or a customized plan?
          Let's talk!
        </div>
        <button className="border-white bg-[rgb(87,60,255)] border-2 text-white hover:bg-[white] hover:border-[rgb(87,60,255)]  hover:text-[rgb(87,60,255)]  rounded-[12px] font-[500] active:bg-[rgb(87,60,255)]  active:text-white  px-4 py-2">
          Contact Sales
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
