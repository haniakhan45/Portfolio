import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-700">
      <footer className="text-white body-font">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
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
          </a>
          <p className="text-xl text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4">
            © 2024 Portfolio —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href="https://github.com/haniakhan45"
              className="text-white hover:text-black mr-4"
            >
              <FaGithub className="text-3xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              className="text-white hover:text-blue-500"
            >
              <FaLinkedin className="text-3xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
