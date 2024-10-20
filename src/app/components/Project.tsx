import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Simple Calculator",
    description:
      "A user-friendly command-line calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and division. Effortlessly input numbers and select operations to receive instant results.",
    codeLink: "https://github.com/haniakhan45/hk-simple-calculator.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Number Guessing Game",
    description:
      "A command-line number guessing game where players attempt to guess a randomly generated number within a specified range.",
    codeLink: "https://github.com/haniakhan45/cli-number-guessing-game.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "ATM Machine",
    description:
      "A TypeScript-based ATM simulator offering core banking functionalities like cash withdraw and fast cash. Implements object-oriented design principles for modularity and extensibility.",
    codeLink: "https://github.com/haniakhan45/ATM-machine.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Todo List",
    description:
      "Efficiently manage tasks with this TypeScript-powered todo list, offering seamless organization and dynamic updates for enhanced productivity.",
    codeLink: "https://github.com/haniakhan45/todo-list.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Currency Converter",
    description:
      "Easily convert currencies with this TypeScript-based currency converter, providing accurate exchange rates and intuitive user experience for hassle-free transactions.",
    codeLink: "https://github.com/haniakhan45/currency-converter.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Word Counter",
    description:
      "Simple TypeScript word counter tool, counts the number of words in a given input message and provides an option to repeat the process.",
    codeLink: "https://github.com/haniakhan45/word-counter.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Student Management System",
    description:
      "This TypeScript script facilitates student enrollment in courses and viewing enrollment status. Users input their name and select a course, with confirmation required for enrollment. Enrolled students' information, including ID, name, courses, and fees, can be viewed.",
    codeLink: "https://github.com/haniakhan45/Student-Management-System.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Quiz Game",
    description:
      "Test your AI knowledge with this quiz! Answer questions ranging from the basics of artificial intelligence to its applications in various fields. Challenge yourself and see how much you know about the fascinating world of AI!",
    codeLink: "https://github.com/haniakhan45/Quiz-game.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Adventure Game",
    description:
      "In this text-based adventure game, you, as the player, face off against various opponents such as Skeletons, Assassins, and Zombies. Choose your actions wisely as you engage in combat, drink health potions, or attempt to flee. Be strategic with your decisions to emerge victorious and survive the challenges ahead",
    codeLink: "https://github.com/haniakhan45/Adventure-Game.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Countdown Timer",
    description:
      "This TypeScript project is a command-line timer application. It prompts users to input a duration in seconds, then counts down from that duration, displaying the remaining time in minutes and seconds until expiration.",
    codeLink: "https://github.com/haniakhan45/countdown-timer.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Object Oriented Programming",
    description:
      "This Node.js script employs object-oriented programming to simulate a virtual doctor's office. It defines Patient and Doctor classes to manage patient information and provide symptom-based medical advice. Using inquirer for user prompts and chalk for styled output, it interactively collects symptoms and gives relevant advice.",
    codeLink: "https://github.com/haniakhan45/object-oriented-programming.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Object Oriented Programming Mybank",
    description:
      "This project is a simple command-line virtual bank application implemented in TypeScript using Inquirer.js for user interaction. It allows users to log in or sign up, check their account balance, deposit money, and withdraw money. Predefined customers with initial balances are included for demonstration purposes.",
    codeLink:
      "https://github.com/haniakhan45/object--oriented-programming-my-bank.git",
    imageSrc: require("../../../public/assests/pictures/simple.jpg"),
  },
  {
    title: "Milestone",
    description:
      "Milestone of my project, which involves building a resume generator. The project allows users to create, edit, download resumes as a PDF, and generate shareable links for their resumes.",
    codeLink:
      "https://github.com/haniakhan45/Unique-Path---Shareable-Link-resume-create-in-Milestone-5-by-Haniakhan.git",
    imageSrc: require("../../../public/assests/pictures/milestone.png"),
  },
  {
    title: "Student ID Card",
    description:
      "Responsive Student ID Card application built with React and Tailwind CSS, displaying dynamic student information in a clean card layout.",
    codeLink:
      "https://github.com/haniakhan45/Student_I-D_Card_4_assignment.git",
    imageSrc: require("../../../public/assests/pictures/card.png"),
  },
];

const Project = () => {
  return (
    <div id="project">
      <section className="text-white body-font bg-gray-900 h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-6xl text-xl mb-8 font-medium text-teal-500">
              My Projects
            </h1>
            <p className="leading-relaxed font italic text-white">
              "Here’s an innovative showcase of my web development projects,{" "}
              <br />
              highlighting creativity and technical expertise in building
              dynamic and responsive applications."
            </p>
          </div>
          <div className="flex flex-wrap -m-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 opacity-100"
                    src={project.imageSrc}
                    layout="fill"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-500 group-hover:bg-opacity-100">
                    <h1 className="tracking-widest text-xl title-font font-medium text-yellow-400 mb-1">
                      {project.title}
                    </h1>

                    <p className="leading-relaxed text-center px-4 line-clamp-2">
                      {project.description}
                    </p>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-4 text-gray-800 bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg font-bold italic transform transition-transform duration-300 hover:scale-105">
                        View Code
                      </button>
                    </a>
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

export default Project;
