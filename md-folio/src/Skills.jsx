import React from 'react'

function Skills() {
    return (
        <div>
            <section className='container-fluid my-5 py-5 px-5' id='summary'>
                <h3 className='text-center text-danger'>LANGUAGES AND FRAMEWORK</h3>
                <h4 className='text-center fw-bold pt-4'>SKILLS</h4>
                <div className="row d-flex justify-content-between pt-3 mt-3">
                    <div className="col-md-2"><h6 className='fw-bold'>Front-end Development</h6>
                        <ul className="mt-3 card-li ">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                        </ul></div>
                    <div className="col-md-2"><h6 className='fw-bold'>Back-end Development</h6>
                        <ul className="mt-3 card-li">
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Flask</li>
                        </ul></div>
                    <div className="col-md-2"> <h6 className='fw-bold'>Database</h6>
                        <ul className="mt-3 card-li">
                            <li>MongoDB</li>
                            <li>Oracle SQL</li>
                            <li>MySQL</li>
                            <li>Tailwind CSS</li>
                        </ul></div>
                    <div className="col-md-2"> <h6 className='fw-bold'>Cloud Services</h6>
                        <ul className="mt-3 card-li">
                            <li>AWS (Amazon Web Services)</li>
                            <li>EC2 (Elastic Compute Cloud)</li>
                            <li>Lambda</li>
                            <li>S3 (Simple Storage Service)</li>
                            <li>RDS (Relational Database Service)</li>
                            <li>VPC (Virtual Private Cloud)</li>
                            <li>CloudWatch</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div className="col-md-2 "><h6 className='fw-bold'>Testing and Automation</h6>
                        <ul className="mt-3 card-li">
                            <li>Selenium</li>
                            <li>Cucumber</li>
                            <li>TestNG</li>
                            <li>Jest (for React testing)</li>
                            <li>JMeter</li>
                        </ul>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-md-3"><h6 className='fw-bold'>Machine Learning and Artificial Intelligence</h6>
                        <ul className="mt-3 card-li ">
                            <li>Python</li>
                            <li>scikit-learn</li>
                            <li>TensorFlow</li>
                            <li>PyTorch</li>
                        </ul></div>
                    <div className="col-md-3"><h6 className='fw-bold'>DevOps</h6>
                        <ul className="mt-3 card-li">
                            <li>Git</li>
                            <li>Jenkins</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Ansible</li>
                        </ul></div>
                    <div className="col-md-3"><h6 className='fw-bold'>Java Frameworks</h6>
                        <ul className="mt-3 card-li">
                            <li>Spring Boot</li>
                            <li>Spring MVC</li>
                            <li>Hibernate</li>
                        </ul></div>
                    <div className="col-md-3"> <h6 className='fw-bold'>Other Tools</h6>
                        <ul className="mt-3 card-li">
                            <li>JIRA</li>
                            <li>Bitbucket</li>
                            <li>Confluence</li>
                            <li>Postman</li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills