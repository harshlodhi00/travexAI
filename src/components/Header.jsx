import Image from "next/image";
import logo from "../assets/logoDark.png";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className=" fixed top-0 px-8 py-5 w-[100%] backdrop-blur-lg opacaity-100 bg-transparent shadow-lg ">
        <div className="flex flex-row items-center justify-between ">
          <Link href={"/"}>
            <Image width={150} src={logo} />
          </Link>

          <div className="flex flex-row items-start justify-between w-[30%] text-white ">
            <Link
              className="relative text-[rgb(87,60,255)] font-[500] text-[18px] group "
              href={"/"}
            >
              Demo
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[rgb(87,60,255)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link
              className="relative text-[rgb(87,60,255)] font-[500] text-[18px] group "
              href={"/pricing"}
            >
              Pricing
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[rgb(87,60,255)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link
              className="relative text-[rgb(87,60,255)] font-[500] text-[18px] group "
              href={"/"}
            >
              About us
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[rgb(87,60,255)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link
              className="relative text-[rgb(87,60,255)] font-[500] text-[18px] group"
              href={"/"}
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[rgb(87,60,255)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </div>

          <div className="flex flex-row items-center justify-center text-white  ">
            <Link
              href={"/"}
              className="bg-white border-[rgb(87,60,255)] border-2 text-[rgb(87,60,255)] hover:bg-[rgb(87,60,255)] hover:border-[rgb(87,60,255)]  hover:text-white  rounded-[8px] font-[500] active:bg-white active:text-[rgb(87,60,255)]  px-4 py-2 mr-2 min-h-[40px] "
            >
              Sign In
            </Link>
            <Link
              href={"/"}
              className=" flex flex-row items-center justify-center border-[rgb(87,60,255)] bg-[rgb(87,60,255)] border-2 text-white hover:bg-[white] hover:border-[rgb(87,60,255)]  hover:text-[rgb(87,60,255)]  rounded-[8px] font-[500] active:bg-[rgb(87,60,255)]  active:text-white  px-4 py-2 min-h-[40px]"
            >
              <span className="mr-2">Get Started</span> <FaExternalLinkAlt />
            </Link>
          </div>
        </div>
      </div>

      <div className="block w-full mt-10  ">l</div>
    </>
  );
}
