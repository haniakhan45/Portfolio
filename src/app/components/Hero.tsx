"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <section className="text-gray-100 body-font h-full">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">
          <div className="flex justify-center items-center">
            <Image
              className="object-cover object-center mx-auto border-4 border-teal-600 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:border-teal-400"
              alt="hero"
              src={require("../../../public/assests/pictures/profile.jpg")}
              width={750}
              height={750}
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-100">
              Hello, <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["I'm Hania", "Welcome to My Portfolio"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-teal-500"></div>
            <p className="mb-8 leading-relaxed text-xl font italic">
              I am a web developer. I am proficient in HTML, CSS, JavaScript,
              and TypeScript. Currently, I am learning React alongside Next.js
              and Tailwind CSS. In my projects, I implement new techniques and
              design patterns to create modern and user-friendly web
              applications. I am always ready to learn new skills and work hard
              to improve my portfolio.
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
                <button className="inline-flex text-gray-800 bg-teal-500 border-0 py-2 px-4 rounded text-2xl focus:outline-none transform transition-transform duration-300 hover:scale-105 font-bold italic">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
