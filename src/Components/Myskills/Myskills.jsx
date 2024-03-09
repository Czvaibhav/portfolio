import React from "react";
import "./Myskills.css";
import sketch from "../../assets/images/sketch.svg";
function Myskills() {
  return (
    <div className="wrap">
      <div className="svgs">
        <img className="allsvg sketch" />
      </div>
      <div className="skills-container">
        <div className="skillhead grad">
          Skills
        </div>
        <div className="skills flex">
          <div className="category flex">
            <div className="categoryhead">DEVOPS/SHELL :</div>
            <div className="cate-skills flex">
              <div className="skillwrap">
                <div className="skill">Docker/Docker-compose</div>
              </div>
              <div className="skillwrap">
                <div className="skill">Linux</div>
              </div>
              <div className="skillwrap">
                <div className="skill">Kubernetes</div>
              </div>
            </div>
          </div>

          <div className="category flex">
            <div className="categoryhead">CLOUD SERVICES :</div>
            <div className="cate-skills flex">
              <div className="skillwrap">
                <div className="skill">EC2</div>
              </div>
              <div className="skillwrap">
                <div className="skill">S3</div>
              </div>
              <div className="skillwrap">
                <div className="skill">IAM</div>
              </div>
              <div className="skillwrap">
                <div className="skill">VPC</div>
              </div>
              <div className="skillwrap">
                <div className="skill">EKS</div>
              </div>
            </div>
          </div>

          <div className="category flex">
            <div className="categoryhead">BACKEND :</div>
            <div className="cate-skills flex">
              <div className="skillwrap">
                <div className="skill">Django</div>
              </div>
              <div className="skillwrap">
                <div className="skill">Rest FRAMEWORK</div>
              </div>
              <div className="skillwrap">
                <div className="skill">KUBERNETES</div>
              </div>
            </div>
          </div>

          <div className="category flex">
            <div className="categoryhead">DATABASE :</div>
            <div className="cate-skills flex">
              <div className="skillwrap">
                <div className="skill">MySql</div>
              </div>
              <div className="skillwrap">
                <div className="skill">Postgresql</div>
              </div>
              <div className="skillwrap">
                <div className="skill">sqllite</div>
              </div>
            </div>
          </div>

          <div className="category flex">
            <div className="categoryhead">PROGRAMMING LANG :</div>
            <div className="cate-skills flex">
              <div className="skillwrap">
                <div className="skill">Python</div>
              </div>
              <div className="skillwrap">
                <div className="skill">Cpp</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myskills;
