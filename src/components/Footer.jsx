import Image from "next/image";
import smallLogo from "../assets/miniLogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-[100vw] bg-black text-white px-[100px] pt-10 mt-10 ">
      <div className="flex flex-row items-start justify-between ">
        <div className="w-[30%] flex flex-col items-start justify-start ">
          <div className="flex flex-row items-center justify-center">
            <Image alt="logo" width={30} src={smallLogo} />
            <span className="ml-4 font-[500] text-[22px] ">TravexAI</span>
          </div>

          <div className="mt-6 w-[80%]">
            Grow your business with Quality Researched Data.We use data
            gathering tools and technique with the team of researchers to polish
            publicly available information to find insightful data to grow your
            business faster
          </div>

          <div className="mt-6 w-[80%] flex flex-row items-center justify-between">
            <FaInstagram color="white" size={25} />
            <FaLinkedin color="white" size={25} />
            <FaSquareXTwitter color="white" size={25} />
            <FaYoutube color="white" size={25} />
            <FaFacebookSquare color="white" size={25} />
          </div>
        </div>
        <div className="w-[65%] flex flex-row items-start justify-between ">
          <div className="flex flex-col justify-start items-start space-y-2">
            <Link href={"/"} className="text-[20px] text-gray-400">
              Features
            </Link>
            <Link href={"/"} className="footerLink">
              Poster Generation
            </Link>
            <Link href={"/"} className="footerLink">
              Itenary Planning
            </Link>
            <Link href={"/"} className="footerLink">
              Creative Ads
            </Link>
            <Link href={"/"} className="footerLink">
              Caption Generator
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start space-y-2">
            <Link href={"/"} className="text-[20px] text-gray-400">
              Use cases
            </Link>
            <Link href={"/"} className="footerLink">
              Poster Generation
            </Link>
            <Link href={"/"} className="footerLink">
              Itenary Planning
            </Link>
            <Link href={"/"} className="footerLink">
              Creative Ads
            </Link>
            <Link href={"/"} className="footerLink">
              Caption Generator
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start space-y-2">
            <Link href={"/"} className="text-[20px] text-gray-400">
              Social
            </Link>
            <Link href={"/"} className="footerLink">
              Instagram
            </Link>
            <Link href={"/"} className="footerLink">
              Facebook
            </Link>
            <Link href={"/"} className="footerLink">
              Linkedin
            </Link>
            <Link href={"/"} className="footerLink">
              X
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start space-y-2">
            <div className="text-[20px] text-gray-400">Company</div>
            <div className="footerLink">Blog</div>
            <Link href={"/pricing"} className="footerLink">
              Pricing
            </Link>
            <div className="footerLink">About us</div>
            <div className="footerLink">Careers</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start justify-start mt-[40px] pb-[20px] ">
        <div className="text-[14px] text-gray-400">
          TravexAI • Copyright © 2024
        </div>
        <div className="text-[14px] text-gray-400 mx-5">Terms of service</div>
        <div className="text-[14px] text-gray-400">Privacy policy</div>
      </div>
    </div>
  );
}
