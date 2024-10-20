import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const skillsData = [
  { name: "HTML", percentage: "90%" },
  { name: "CSS", percentage: "70%" },
  { name: "Javascript/Typescript", percentage: "95%" },
  { name: "Next.js", percentage: "40%" },
  { name: "Tailwind CSS", percentage: "50%" },
];

const Skills = () => {
  return (
    <div id="Skills" className="h-screen bg-gray-900 text-gray-100">
      <section className="text-gray-600 body-font h-full">
        <div className="container mx-auto px-5 py-24 h-full">
          <div className="text-center w-full mb-12">
            <h2 className="title-font sm:text-5xl text-xl mb-8 font-medium text-teal-500">
              My Skills
            </h2>
            <h1 className="sm:text-sl text-sm font-medium title-font text-white">
              Mastery in frontend development, including a strong grasp of HTML,
              CSS, JavaScript, and frameworks like React and Next.js. <br />
              My focus is on creating responsive, interactive, and modern web
              applications using the latest technologies.
            </h1>
          </div>
          <div className="flex flex-wrap justify-center -m-8">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="p-4 md:w-1/2 lg:w-1/3 w-full transition-transform duration-300 transform hover:scale-105"
              >
                <div className="flex rounded-lg p-6 bg-gray-800 shadow-lg hover:shadow-2xl flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white">
                      <FaCheckCircle className="text-xl" />
                    </div>
                    <h2 className="text-lg font-medium text-white">
                      {skill.name}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-2 w-full bg-gray-300 rounded">
                      <div
                        className="absolute top-0 left-0 bg-teal-500 h-2 rounded"
                        style={{ width: skill.percentage }}
                      ></div>
                    </div>
                    <p className="text-sm text-white font-bold mt-2 text-right">
                      {skill.percentage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
