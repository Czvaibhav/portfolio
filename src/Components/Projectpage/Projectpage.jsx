import React from "react";
import "./Projectpage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/api1.png";
import img2 from "../../assets/images/api2.png";
import img3 from "../../assets/images/api3.png";
import lib1 from "../../assets/images/lib1.png";
import lib2 from "../../assets/images/lib2.png";
import lib3 from "../../assets/images/lib3.png";
import mon1 from "../../assets/images/mon1.png";
import mon2 from "../../assets/images/mon2.png";

import sqaure from '../../assets/images/Square_1.svg'
import onefour from '../../assets/images/One-Forth-Ellipse.svg'

function Projectpage() {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
  };
  return (
    <div className="wrap">
      <div className="svgs">
        <img src={sqaure} alt="svg" className="square allsvg" />
        <img src={onefour} alt="svg" className="onefour allsvg" />
      </div>
      <div className="project-container" id="project">
        <div className="prohead">My Projects</div>

        <div className="project-section flex">
          <div className="pro-img">
            <Carousel
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    className="slide-btn flex"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                )
              }
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    className="slide-btn flex"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <i class="fa-solid fa-arrow-left-long"></i>
                  </button>
                )
              }
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              swipeable={true}
            >
              <div className="carousel-img">
                <img src={img1} alt="project1" />
              </div>
              <div className="carousel-img">
                <img src={img2} alt="project2" />
              </div>
              <div className="carousel-img">
                <img src={img3} alt="project3" />
              </div>
            </Carousel>
          </div>
          <div className="project-info flex">
            <div className="pro-title">API Devolopment</div>
            <div className="pro-desc">

              I have showcased four APIs developed using Django, Python, and REST Framework,
              all backed by PostgreSQL. My involvement in creating these APIs not only
              demonstrated my proficiency in these technologies but also underscored
              my deep understanding of the project's requirements and objectives. This experience
              solidified my skills and provided valuable hands-on expertise in backend development.
            </div>
            <div className="pro-tech">
              <b className="grad">Tech stack : </b> Django, REST Framework, AWS(deployment), Docker(container), Postgresql, Javascript.
            </div>
            <div className="pro-link flex">
              <a href="https://github.com/Czvaibhav/recipe-python-api-app" className="btn" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github"></i> &nbsp;Code
              </a>
              <a href="http://ec2-35-94-125-235.us-west-2.compute.amazonaws.com/api/docs/#/" target="_blank" rel="noreferrer" className="btn">
                Deployed&nbsp; <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          className="project-section flex"
          style={{ flexDirection: "row-reverse" }}
        >
          <div className="pro-img">
            <Carousel
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    className="slide-btn flex"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                )
              }
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    className="slide-btn flex"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <i class="fa-solid fa-arrow-left-long"></i>
                  </button>
                )
              }
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              swipeable={true}
            >
              <div className="carousel-img">
                <img src={lib1} alt="project1" />
              </div>
              <div className="carousel-img">
                <img src={lib2} alt="project2" />
              </div>
              <div className="carousel-img">
                <img src={lib3} alt="project3" />
              </div>
            </Carousel>
          </div>
          <div className="project-info flex">
            <div className="pro-title">Library management system.</div>
            <div className="pro-desc">
              This project illustrates the fundamental operations of a library management system.
              It incorporates a user authentication system to ensure genuine student registrations,
              verified by librarians. Features include adding new books,
              removing old ones, issuing books, and various other library functionalities. </div>
            <div className="pro-tech">
              <b className="grad">Tech stack : </b> HTML, CSS, FLASK, PYTHON, SQL, Javascript.
            </div>
            <div className="pro-link flex">
              <a href="https://github.com/Czvaibhav/libweb" target="_blank" className="btn">
                <i class="fa-brands fa-github"></i> &nbsp;Code
              </a>
              <a href="https://vaibhavksharma.pythonanywhere.com/" target="_blank"  className="btn">
                Deployed&nbsp; <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="project-section flex">
          <div className="pro-img">
            <Carousel
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    className="slide-btn flex"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                )
              }
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    className="slide-btn flex"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <i class="fa-solid fa-arrow-left-long"></i>
                  </button>
                )
              }
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              swipeable={true}
            >
              <div className="carousel-img">
                <img src={mon1} alt="project1" />
              </div>
              <div className="carousel-img">
                <img src={mon2} alt="project2" />
              </div>
            </Carousel>
          </div>
          <div className="project-info flex">
            <div className="pro-title">Cloud Native Monitoring APP</div>
            <div className="pro-desc">
              This project involves building a monitoring application in Python using Flask and Psutil.
              Initially deployed locally, it's later containerized using Docker.
              Docker commands are used to create an image, followed by running a Docker container.
              The process continues with creating an Amazon Elastic Container Registry (ECR) using Python Boto3 and pushing the Docker image to it.
              Finally, an
              Amazon EKS Kubernetes cluster and nodes are created to complete the setup.
            </div>
            <div className="pro-tech">
              <b className="grad">Tech stack : </b> Python, Docker,  Aws ECR, Aws EKS, AWS IAM,
              Kubernetes.
            </div>
            <div className="pro-link flex">
              <a href="https://github.com/Czvaibhav/cloud-native-monitoring-appThis project involves building a monitoring application in Python using Flask and Psutil. Initially deployed locally, it's later containerized using Docker. Docker commands are used to create an image, followed by running a Docker container. The process continues with creating an Amazon Elastic Container Registry (ECR) using Python Boto3 and pushing the Docker image to it. Finally, an Amazon EKS Kubernetes cluster and nodes are created to complete the setup." className="btn" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github"></i> &nbsp;Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projectpage;
