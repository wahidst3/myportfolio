import React, { useState } from "react";

const contact = () => {
  const [isfocused, setfocused] = useState(false);
  return (
    <div className="w-full  md:h-[80vh] px-8 md:px-60 lg:px-60  bg-[#0E1225] pt-10 overflow-hidden" id="contact">
      <h3 className="text-xl text-[#727272] ">Get In Touch</h3>
      <h5 className="mb-8 text-4xl text-white ">
        Lets Talk About <span className="text-blue-500"> Your Projects</span>
      </h5>
      <p className="text-white text-xl mb-5">
        "We’d love to hear more about your ideas and how we can help bring them
        to life. Fill out the form below or reach us through any of our contact
        methods!
      </p>
      <div className="w-full flex md:flex-row lg:flex-row flex-col items-center justify-between">
        <input
          type="text"
          placeholder="Full Name"
          className="md:w-[48%] lg:w-[48%] w-full py-3 px-7 h-12 rounded-lg my-5 text-lg outline-0"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="md:w-[48%] lg:w-[48%] w-full py-3 px-7 h-12 rounded-lg my-5 text-lg outline-0"
        />
      </div>

      {/* <input type="text" placeholder='Subject' className='w-[40%] py-3 px-7 h-12 rounded-lg my-5' /> */}
      <textarea
        name=""
        id=""
        placeholder="Your Queries"
        onFocus={() => setfocused(true)}
        onBlur={() => setfocused(false)}
        className={`w-[100%] py-3 outline-0 ${
          isfocused ? "h-40" : "h-14"
        } px-7  rounded-lg my-5 text-xl`}
      ></textarea>
      <span className="md:hidden lg:hidden block
      md:w-[35%%] lg:w-[35%] w-full m-auto text-center  py-3 px-7 h-12 rounded-lg bg-blue-500 text-white my-5 z-0">Submit</span>
      <div>
        <div className=" w-full items-center justify-between text-white h-full md:flex lg:flex  hidden">
          <button className="md:w-[35%%] lg:w-[35%] w-full py-3 px-7 h-12 rounded-lg bg-blue-500 text-white my-5 z-0">
            Submit
          </button>
          <span className="text-[#727272]">ali76wahid@gmail.com</span>
          <span className="text-[#727272]">+92 3232379368</span>
          <span className="text-[#727272]">
            Abidabad Baldia Town Karachi Pakistan
          </span>
        </div>
        `
      </div>
    </div>
  );
};

export default contact;
