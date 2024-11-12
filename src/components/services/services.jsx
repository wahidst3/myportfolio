import React from "react";
import Responsive from "../../assets/icons8-responsive-design-64.png";
import Frontend from "../../assets/frontend.png";
import Ui from "../../assets/ui.png";
import page from "../../assets/page.png";
import Git from "../../assets/git.png";
import Web from "../../assets/web.png";
import Comerce from "../../assets/comerce.png";
import Api from "../../assets/api.png";
import './style.css'

const services = () => {
  return (
    <div className="h-full w-full md:py-20 lg:py-20 py-10 px-2 md:px-60 lg:px-60 
    text-white bg-[#0E1225] services rounded-t-[5px]" id="services">
      <h3 className="text-xl md:pl-0 lg:pl-0 pl-[28px]  text-[#727272] ">Our Services</h3>
      <h5 className="mb-8 md:text-4xl lg:text-4xl text-3xl  md:text-left lg:text-left text-center">
        Turn <span className="text-blue-500"> Information</span> Into Actionable Insights
      </h5>

      <div className="container flex items-center gap-6  flex-wrap md:justify-start lg:justify-start justify-center">
        <div className="service w-[300px] lg:w-[220px]  md:w-[220px] bg-[#1b2631c4] h-56 p-3 relative  cursor-pointer" >
          <div className="circle w-0 h-0 rounded-full bg-blue-500 absolute -top-14 -left-14 opacity-60 transition-all  ease-in-out"> </div>
          <img
            src={Responsive}
            alt="responsive design"
            className="w-20 h-20 mb-6"
          />
          <h4 className="text-md font-bold">Responsive Web Design</h4>
          <p className="text-sm">
            Creating mobile-friendly, responsive websites for all devices.
          </p>
        </div>

        <div className="service w-[300px] bg-[#1b2631c4] h-56 p-3 relative lg:w-[220px]  md:w-[220px]">
        <div className="circle w-0 h-0 rounded-full bg-blue-500 absolute -top-14 -left-14 opacity-60 transition-all  ease-in-out"> </div>
          <img
            src={Frontend}
            alt="frontend dev"
            className="w-14 h-20 mb-2 pt-4"
          />
          <h4 className="text-md font-bold">Frontend Development</h4>
          <p className="text-sm">
            Building fast, interactive, and user-friendly interfaces.
          </p>
        </div>

        <div className="service w-[300px] lg:w-[220px]  md:w-[220px] bg-[#1b2631c4] h-56 p-3 relative">
        <div className="circle w-0 h-0 rounded-full bg-blue-500 absolute -top-14 -left-14 opacity-60 transition-all  ease-in-out"> </div>
          <img src={Ui} alt="ui ux" className="w-14 h-20 mb-3 pt-4" />
          <h4 className="text-md font-bold">UI/UX Integration</h4>
          <p className="text-sm">
            Seamlessly integrating UI/UX designs into functional code.
          </p>
        </div>

        <div className="service w-[300px] lg:w-[220px]  md:w-[220px] bg-[#1b2631c4] h-56 p-3 relative">
        <div className="circle w-0 h-0 rounded-full bg-blue-500 absolute -top-14 -left-14 opacity-60 transition-all  ease-in-out"> </div>
          <img
            src={page}
            alt="spa"
            className="w-14 h-20 mb-2 pt-4"
          />
          <h4 className="text-md font-bold">Single Page Applications</h4>
          <p className="text-sm">
            Building fast-loading single-page applications (SPA).
          </p>
        </div>

        <div className="service w-[300px] lg:w-[220px]  md:w-[220px] bg-[#1b2631c4] h-56 p-3 relative">
        <div className="circle w-0 h-0 rounded-full bg-blue-500 absolute -top-14 -left-14 opacity-60 transition-all  ease-in-out"> </div>
          <img
            src={Git}
            alt="version control"
            className="w-14 h-20 mb-2 pt-4"
          />
          <h4 className="text-lg font-bold">Version Control</h4>
          <p className="text-sm">
            Using Git for efficient version control and teamwork.
          </p>
        </div>

        <div className="service w-[300px] lg:w-[220px]  md:w-[220px] bg-[#1b2631c4] h-56 p-3 relative">
        <div className="circle w-0 h-0 rounded-full bg-blue-500 absolute -top-14 -left-14 opacity-60 transition-all  ease-in-out"> </div>
          <img
            src={Api}
            alt="api"
            className="w-14 h-20 mb-2 pt-4"
          />
          <h4 className="text-lg font-bold">API Integration</h4>
          <p className="text-sm">
            Implementing APIs for smooth backend communication.
          </p>
        </div>

        <div className="service w-[300px] lg:w-[220px]  md:w-[220px] bg-[#1b2631c4] h-56 p-3 relative ">
        <div className="circle w-0 h-0 rounded-full bg-blue-500 absolute -top-14 -left-14 opacity-60 transition-all  ease-in-out"> </div>
          <img
            src={Comerce}
            alt="ecommerce"
            className="w-14 h-20 mb-2 pt-4"
          />
          <h4 className="text-lg font-bold">E-commerce Solutions</h4>
          <p className="text-sm">
            Building custom, scalable e-commerce platforms.
          </p>
        </div>
        <div className="service lg:w-[220px] w-[300px]  md:w-[220px] bg-[#1b2631c4] h-56 p-3 relative">
        <div className="circle w-0 h-0 rounded-full bg-blue-500 absolute -top-14 -left-14 opacity-60 transition-all  ease-in-out"> </div>
          <img
            src={Web}
            alt="custom web apps"
            className="w-14 h-20 mb-2 pt-4"
          />
          <h4 className="text-lg font-bold">Custom Web Apps</h4>
          <p className="text-sm">
            Building tailored web apps to meet specific business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default services;
