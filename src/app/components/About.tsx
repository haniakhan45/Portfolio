import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="About"
      className="bg-gray-900 text-gray-100 min-h-screen flex items-center"
    >
      {" "}
      
      <section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-xl mb-4 font-medium text-teal-500">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed font italic">
            I am a passionate web developer. I am proficient in HTML, CSS,
            JavaScript, and TypeScript, which help me create new projects in the
            world of web development. Currently, I am learning React alongside
            Next.js and Tailwind CSS to enhance my skills further.
            <br />
            I enjoy facing new challenges and utilizing new techniques and
            design patterns in my projects. My goal is to create modern and
            user-friendly web applications that not only look good but also
            function effectively.
            <br />I am always eager to learn new skills and work hard to improve
            my portfolio. My aim is to make a name for myself in the field of
            web development and to inspire others.
          </p>
          <div className="flex justify-center">
            <a href={"/assests/CV/cv.pdf"}>
              <button className="inline-flex text-gray-800 bg-teal-500 border-0 py-2 px-4 focus:outline-none hover:bg-teal-600 rounded text-2xl font-bold italic transform transition-transform duration-300 hover:scale-105">
                View CV
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            className="object-cover object-center mx-auto border-4 border-teal-500 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:border-teal-400"
            alt="profile"
            src={require("../../../public/assests/pictures/profile.jpg")}
            width={600}
            height={600}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
