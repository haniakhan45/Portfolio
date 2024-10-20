import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCloudDownload } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-gray-700 z-50 sticky top-0">
      <header className="text-gray-100 body-font">
        <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={require("../../../public/assests/pictures/logo.png")}
                alt="logo"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
            <span className="ml-5 text-2xl">Portfolio</span>
          </a>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center">
            <div className="flex flex-wrap">
              <Link href={"/"} className="mr-5 hover:text-teal-500 ">
                Home
              </Link>
              <Link href={"#About"} className="mr-5 hover:text-teal-500 ">
                About
              </Link>
              <Link href={"#Skills"} className="mr-5 hover:text-teal-500 ">
                Skills
              </Link>
              <Link href={"#project"} className="mr-5 hover:text-teal-500">
                Projects
              </Link>
              <Link href={"#Contact"} className="mr-5 hover:text-teal-500">
                Contact
              </Link>
            </div>
          </nav>

          <a href="/assests/CV/cv.pdf" className="group">
            <button className="inline-flex items-center bg-teal-500 border-0 py-3 px-5 focus:outline-none hover:bg-teal-600 hover:scale-105 transition-transform duration-300 rounded text-base mt-4 md:mt-0 group-hover:bg-teal-600 font-bold italic text-gray-800">
              Download CV
              <BsCloudDownload className="text-xl text-gray-800 ml-3" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
