import React from "react";
// import sett from "../assets/img/settings.png";
// import java from "../assets/img/java.png";
// import project from "../assets/img/project.png";
// import db from "../assets/img/database.png";
import java from "./Assets/images/icons8-java-75.png"
import project from "./Assets/images/project.png"
import db from "./Assets/images/icons8-database-75.png"
import python from "./Assets/images/icons8-python-75.png"
import setting from "./Assets/images/icons8-setting-75.png"
import sellcast from "./Assets/images/icons8-sellcast.png"
import cpu from "./Assets/images/icons8-cpu-75.png"
import list from "./Assets/images/icons8-list-view-75.png"



function Technical() {
  return (
    <div className="overflow-hidden" id="technicalskill">
       
      <section className="container">
        <div className="text-center mt-5">
        <span class="subtitle sub-title mt-3" style={{ fontFamily: '"Montserrat", sans-serif' }}>TECHNICAL</span>
                    <h2 class="title sec-title" style={{ color: "black" }}>EXCELLENCE
                    </h2>
        
         
        </div>
        <div className="row d-flex mt-5">
          <div className="col-md-3 mt-5  ">
            <div className="card techcard rounded-4 align-items-center zooming-effect">
              <div className=" col-md-9 text-center">
                <div className=" icondiv mt-3">
                  <img
                    src={setting}
                    style={{backgroundColor:"red"}}
                    className="align-items-center  img-fluid"
                    alt=""
                  />
                </div>
                <h3 className="mt-2">Automation Testing Tools</h3>
                <p className="mt-4">Selenium WebDriver, REST-assured</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 ">
            <div className="card techcard rounded-4  align-items-center zooming-effect">
              <div className=" col-md-9 text-center">
                <div className="icondiv mt-3">
                  <img src={cpu} alt="" />
                </div>
                <h3 className="mt-2">Framework</h3>
                <p className="mt-4">
                  React JS, Angular, Spring Boot, CUCUMBER, TestNG
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 ">
            <div className="card techcard rounded-4 align-items-center zooming-effect">
              <div className=" col-md-9 text-center">
                <div className="icondiv mt-3">
                  <img src={java} alt="" />
                </div>
                <h3 className="mt-2">Languages</h3>
                <p className="mt-4">Java, Python and JavaScript.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 ">
            <div className="card techcard rounded-4 align-items-center zooming-effect">
              <div className=" col-md-9 text-center">
                <div className="icondiv mt-3">
                  <img src={db} alt="" />
                </div>

                <h3 className="mt-2">Database</h3>
                <p className="mt-4">
                  ORACLE SQL, PL/SQL, MYSQL, PGSQL, MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex ">
          <div className="col-md-3 mt-5 ">
            <div className="card techcard rounded-4 align-items-center zooming-effect">
              <div className=" col-md-9 text-center">
                <div className="icondiv mt-3">
                  <img src={list} alt="" />
                </div>
                <h3 className="mt-2">Project Management Tool</h3>
                <p className="mt-4">JIRA, ClickUp</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 ">
            <div className="card techcard rounded-4 align-items-center zooming-effect">
              <div className=" col-md-9 text-center">
                <div className="icondiv mt-3">
                  <img src={sellcast} alt="" />
                </div>
                <h3 className="mt-2">CI/CD tools</h3>
                <p className="mt-4">
                  Git, Jenkins, Docker, Kubernetes, Ansible
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 ">
            <div className="card techcard rounded-4 align-items-center zooming-effect">
              <div className=" col-md-9 text-center">
                <div className="icondiv mt-3">
                  <img src={setting} alt="" />
                </div>
                <h3 className="mt-2">Tools</h3>
                <p className="mt-4">
                  Swagger, BitBucket, Confluence, JMeter, GTmetrix
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 ">
            <div className="card techcard rounded-4 align-items-center zooming-effect">
              <div className=" col-md-9 text-center">
                <div className="icondiv mt-3">
                  <img src={python} alt="" />
                </div>

                <h3 className="mt-2">Web services Testing Tools</h3>
                <p className="mt-4">Postman, REST-assured</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technical;