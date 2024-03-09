import React from "react";
import "./Aboutpage.css";
import ellipse from "../../assets/images/Ellipse.svg";
import bar from "../../assets/images/bar_3.svg";

function Aboutpage() {
  return (
    <div className="wrap">
      <div className="svgs">
        <img src={ellipse} alt="svg" className="ellipse asvg" />
        <img src={bar} alt="svg" className="bar asvg" />
      </div>
      <div className="about-container flex" id="about">
        <div className="ab-head">About me</div>
        <div className="about-text">
        "Hello, I'm Vaibhav Kumar Sharma, an AWS Cloud Certified Practitioner with a passion for DevOps.
         With expertise in cloud architecture and automation, I excel in optimizing infrastructure
         and fostering seamless collaboration between development teams.
         My portfolio showcases innovative solutions and streamlined workflows and
         commitment to driving efficiency and scalability in modern IT environments."
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
