import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="h-screen bg-gray-900 text-gray-100">
      <section className="text-gray-600 body-font relative h-full">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="title-font sm:text-6xl text-xl mb-4 font-medium text-teal-500">
              Contact Us
            </h1>
            <p className="mb-8 leading-relaxed font italic text-white">
              Feel Free To Contact...
            </p>
          </div>
          <form>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sl text-gray-300 font-semibold italic"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-teal-400"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sl text-gray-300 font-semibold italic"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-teal-400"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sl text-gray-300 font-semibold italic"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-teal-400"
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-black bg-teal-500 border-0 py-2 px-4 focus:outline-none hover:bg-teal-600 rounded text-2xl font-bold italic transform transition-transform duration-300 hover:scale-105">
                    Submit
                  </button>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xm">
                    EMAIL
                  </h2>
                  <a className="text-teal-500 leading-relaxed">
                    hanikhan0202@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
