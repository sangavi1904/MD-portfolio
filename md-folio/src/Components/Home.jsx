import React from 'react'
import { Link } from 'react-router-dom'
import java from '../Assets/images/icons8-java-60.png'
import db from '../Assets/images/icons8-database-60.png'
import python from '../Assets/images/icons8-python-60.png'
import setting from '../Assets/images/icons8-setting-60.png'
import sellcast from '../Assets/images/icons8-sellcast.png'
import cpu from '../Assets/images/icons8-cpu-60.png'
import list from '../Assets/images/icons8-list-60.png'
import Scroll from './Scroll'
// import linked from '../src/Assets/images/Linkedin1.png'
// import reactnative from '../src/Assets/images/React native.png'
// import angular from '../src/Assets/images/Angular.png'
// import spring from '../src/Assets/images/Spring boot.png'
import linked from '../Assets/images/Linkedin1.png'
import angular from '../Assets/images/Angular.png'
import reactnative from '../Assets/images/React native.png'
import spring from '../Assets/images/Spring boot.png'
import Typed from './Typed'


function Home() {

    return (
        <div>
            {/* Nav-Start */}
            <div>
                <nav class="navbar navbar-expand-lg " id='home'>
                    <div class="container-fluid bg-body-tertiary home-nav border-bottom">
                        <Link class="navbar-brand" to="#">
                            <img src="https://venkatesanj.com/wp-content/uploads/2023/06/logo-vertical-2.png" alt=" navlogo" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-3 p-4 mb-lg-0 text-center ">
                                <li class="nav-item heading6 ">
                                    {/* <Link class="nav-link active" aria-current="page" to=''>Home</Link> */}
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href='#home'> Home</a>
                                </li>
                                <li class="nav-item heading6">
                                    <a class="nav-link active px-3 " aria-current="page" id='name-nav' href="#summary">Summary</a>
                                </li>
                                {/* <li class="nav-item heading5">
                                    <a class="nav-link active " aria-current="page" href="#certificate">Certificate</a>
                                </li> */}
                                <li class="nav-item heading6 ">
                                    {/* <Link class="nav-link active" aria-current="page" to="#">Testimonial</Link> */}
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#technicalskill">Technical Skills</a>

                                </li>
                                {/* <li class="nav-item heading5">
                                    <a class="nav-link active " aria-current="page" href="#card">My Project</a>

                                </li> */}
                                <li class="nav-item heading6">
                                    {/* <Link class="nav-link active" aria-current="page" to="#">Resume</Link> */}
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#resume">Resume</a>

                                </li>

                                <li class="nav-item heading6 ">
                                    {/* <Link class="nav-link active" aria-current="page" to="#">Contact</Link> */}
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#testimonial">Testimonial</a>
                                </li>
                                <li class="nav-item heading6">
                                    {/* <Link class="nav-link active" aria-current="page" to="#">Contact</Link> */}
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            {/* Nav-End*/}



            {/* Banner-Start */}
            <div className="container mt-4 pt-4">
                <div className="row">
                    <div className="col-md-6 mt-5 pt-3  ">
                        <div className=" mx-auto">
                            <div className='rounded-3 md-img-shadow mx-2'>
                                <img src="https://venkatesanj.com/wp-content/uploads/2023/06/Image.png" className='img-fluid' alt="md-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                       <div className='mt-5'>
                        <p className='display-3' style={{fontWeight:"1000"}}> <span className='mt-4 pt-4 heading2 ' >Hi,</span> <span className="heading2">I'm</span>  <span className='heading float-end  mx-3'>Venkatesan J </span>
                        <Typed/></p>
                       </div>


                        <p className='heading3'> I am a highly skilled and experienced software developer with expertise in MERN Stack and MEAN Stack development, Java development,
                            ArtIficial intelligence and Machine Learning, AWS DevOps tools, and automation testing. I am also certified in Oracle and AWS, further
                            validating my knowledge and proficiency in these areas. Over the years, I have honed my skills and gained valuable experience in creating
                            robust and scalable applications, implementing intelligent algorithms, and leveraging cloud technologies to deliver efficient solutions.
                            In this portfolio, I will showcase some of my notable projects and accomplishments, demonstrating my versatility and proficiency across
                            various domains of software development. Whether it's building web applications using the MERN Stack, developing Java-based enterprise solutions,
                            harnessing the power of AI and ML to drive data insights, or ensuring high-quality through automation testing, I bring a comprehensive skill set
                            and a passion for innovation to every project I undertake. With a strong foundation in software engineering principles and a dedication to continuous
                            learning, I am confident in my ability to tackle complex challenges and deliver outstanding results. Join me on this journey as we explore the
                            exciting world of software development and technology innovation.</p>

                        <div className='row pt-3 mt-3 '>
                            <div className='col-6' style={{ color: "#1e2125", fontWeight: "500" }}>
                                <p>MY LINKEDIN PROFILE</p>
                                <Link to="#">
                                    <img src={linked} alt="Linkedin logo" className='img-fluid p-2' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '38px' }} /></Link>
                            </div>
                            <div className='col-6' style={{ color: "#1e2125", fontWeight: "500" }}>
                                <p>BEST SKILLED IN</p>
                                <div>
                                    <Link to="#">
                                        <img src={reactnative} alt='React logo' className=' img-fluid mx-1 p-2 ' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '38px' }}></img>
                                        <img src={angular} alt='Angular logo' className=' img-fluid mx-1 p-2 ' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '38px' }}></img>
                                        <img src={spring} alt='Spring logo' className=' img-fluid  mx-1 p-2' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '38px' }}></img>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Banner-End */}

            {/* Skills-start */}
            <div>
                <section className='container my-5 py-3 px-5' id='summary'>
                    <h3 className='text-center mb-3 ' style={{ color: "#f9004d" }}>LANGUAGES AND FRAMEWORK</h3>
                    <h4 className='title sec-title text-center mb-5 p-0 heading6  fw-bold' style={{ color: "black"  }}>SKILLS</h4>
                    <div className="row d-flex justify-content-between px-md-5">
                        <div className="col-md-2 "><h6 style={{ color: "#27272E", fontWeight: "700" }} className='heading6' >Front-end Development</h6>
                            <ul className="mt-3 card-li ">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                            </ul></div>
                        <div className="col-md-2"><h6 style={{ color: "#27272E", fontWeight: "700" }}  className='heading6' >Back-end Development</h6>
                            <ul className="mt-3 card-li">
                                <li>Java</li>
                                <li>Spring Boot</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Python</li>
                                <li>Django</li>
                                <li>Flask</li>
                            </ul></div>
                        <div className="col-md-2"> <h6 style={{ color: "#27272E", fontWeight: "bold" }}  className='heading6'>Database</h6>
                            <ul className="mt-3 card-li">
                                <li>MongoDB</li>
                                <li>Oracle SQL</li>
                                <li>MySQL</li>
                                <li>Tailwind CSS</li>
                            </ul></div>
                        <div className="col-md-2"> <h6 style={{ color: "#27272E", fontWeight: "bold" }}  className='heading6'>Cloud Services</h6>
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
                        <div className="col-md-2 "><h6 style={{ color: "#27272E", fontWeight: "bold" }}  className='heading6'>Testing and Automation</h6>
                            <ul className="mt-3 card-li">
                                <li>Selenium</li>
                                <li>Cucumber</li>
                                <li>TestNG</li>
                                <li>Jest (for React testing)</li>
                                <li>JMeter</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between px-md-5 mt-3">
                        <div className="col-md-2">
                            <h6 style={{ color: "#27272E", fontWeight: "700" }}  className='heading6'>Machine Learning </h6>
                            <ul className="mt-3 card-li ">
                                <li>Python</li>
                                <li>scikit-learn</li>
                                <li>TensorFlow</li>
                                <li>PyTorch</li>
                            </ul></div>
                        <div className="col-md-3"><h6 style={{ color: "#27272E", fontWeight: "bold" }}  className='heading6'>DevOps</h6>
                            <ul className="mt-3 card-li">
                                <li>Git</li>
                                <li>Jenkins</li>
                                <li>Docker</li>
                                <li>Kubernetes</li>
                                <li>Ansible</li>
                            </ul></div>
                        <div className="col-md-3"><h6 style={{ color: "#27272E", fontWeight: "bold" }}  className='heading6'>Java Frameworks</h6>
                            <ul className="mt-3 card-li">
                                <li>Spring Boot</li>
                                <li>Spring MVC</li>
                                <li>Hibernate</li>
                            </ul></div>
                        <div className="col-md-3"> <h6 style={{ color: "#27272E", fontWeight: "bold" }}  className='heading6'>Other Tools</h6>
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
            {/* Skills-end */}

            {/* Certificate-Start */}
            <div className='container overflow-hidden' id='certificate'>

                <h3 className='text-center' style={{ color: "#f9004d" }}>CERTIFICATIONS</h3>




                <div className='row d-flex justify-content-evenly mt-4 pt-4'>
                    <div className='col-md-5 certification mt-3'>
                        <div className='text-center heading5'>
                            <h2 className='pt-4 mt-4'>CERTIFICATE</h2>
                            <p>OF COURSE COMPLETION</p>

                            <p>Proudly Presented To </p>
                            <h4 style={{ color: "#ff014f" }}>Mr. VENKATESAN J</h4>
                            <p>Certified SQL developer, ORACLE</p>
                            <hr />
                            <button className='certi-bts rounded-4 mt-4'>2020</button>
                        </div>
                    </div>
                    <div className='col-md-5 certification mt-3 '>
                        <div className='text-center heading5'>
                            <h2 className='pt-4 mt-4'>CERTIFICATE</h2>
                            <p>OF COURSE COMPLETION</p>

                            <p>Proudly Presented To </p>
                            <h4 style={{ color: "#ff014f" }}>Mr. VENKATESAN J</h4>
                            <p>AWS Solutions Architect, Amazon Web Services</p>
                            <hr />
                            <button className='certi-bts rounded-4 mt-4'>2022</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Certificate-end */}

            {/* Technical-start */}
            <div className="overflow-hidden" id="technicalskill">

                <section className="container">
                    <div className="text-center mt-5">
                    <span class="subtitle sub-title" style={{ fontFamily: '"Montserrat", sans-serif' }}>TECHNICAL</span>
                    <h4 className='title sec-title text-center mb-5 p-0 heading6  fw-bold' style={{ color: "black"  }}>EXPERIENCE</h4>



                    </div>
                    <div className="row d-flex mt-5">
                        <div className="col-md-3 mt-5  ">
                            <div className="card techcard rounded-4 align-items-center zooming-effect">
                                <div className=" col-md-9 text-center">
                                    <div className=" mt-3 my-3 py-3  ">
                                        <img
                                            src={setting}
                                            // style={{backgroundColor:"red"}}
                                            className="align-items-center  img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <h3 className="mt-2 heading6">Automation Testing Tools</h3>
                                    <p className=" heading3">Selenium WebDriver, REST-assured</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5 ">
                            <div className="card techcard rounded-4  align-items-center zooming-effect">
                                <div className=" col-md-9 text-center">
                                    <div className=" mt-3 my-3 py-3">
                                        <img src={cpu} alt="" />
                                    </div>
                                    <h3 className="mt-2 heading6">Framework</h3>
                                    <p className="heading3">
                                        React JS, Angular, Spring Boot, CUCUMBER, TestNG
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5 ">
                            <div className="card techcard rounded-4 align-items-center zooming-effect">
                                <div className=" col-md-9 text-center">
                                    <div className=" mt-3 my-3 py-3">
                                        <img src={java} alt="" />
                                    </div>
                                    <h3 className="mt-2 heading6">Languages</h3>
                                    <p className="heading3">Java, Python and JavaScript.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5 ">
                            <div className="card techcard rounded-4 align-items-center zooming-effect">
                                <div className=" col-md-9 text-center">
                                    <div className=" mt-3 my-3 py-3">
                                        <img src={db} alt="" />
                                    </div>

                                    <h3 className="mt-2 heading6">Database</h3>
                                    <p className="heading3">
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
                                    <div className=" mt-3 my-3 py-3">
                                        <img src={list} alt="" />
                                    </div>
                                    <h3 className="mt-2 heading6">Project Management Tool</h3>
                                    <p className="heading3">JIRA, ClickUp</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5 ">
                            <div className="card techcard rounded-4 align-items-center zooming-effect">
                                <div className=" col-md-9 text-center">
                                    <div className=" mt-3 my-3 py-3">
                                        <img src={sellcast} alt="" />
                                    </div>
                                    <h3 className="mt-2 heading6">CI/CD tools</h3>
                                    <p className="heading3">
                                        Git, Jenkins, Docker, Kubernetes, Ansible
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5 ">
                            <div className="card techcard rounded-4 align-items-center zooming-effect">
                                <div className=" col-md-9 text-center">
                                    <div className=" mt-3 my-3 py-3">
                                        <img src={setting} alt="" />
                                    </div>
                                    <h3 className="mt-2 heading6">Tools</h3>
                                    <p className="heading3">
                                        Swagger, BitBucket, Confluence, JMeter, GTmetrix
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5 ">
                            <div className="card techcard rounded-4 align-items-center zooming-effect">
                                <div className=" col-md-9 text-center">
                                    <div className=" mt-3 my-3 py-3 ">
                                        <img src={python} alt="" />
                                    </div>

                                    <h3 className="mt-2 heading6">Web services Testing Tools</h3>
                                    <p className="heading3">Postman, REST-assured</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Technical-end */}

            {/* Card-Start */}
            <div>
                <div class="elementor-widget-container" id='card' style={{ margin: "3rem" }}>
                    <div class="section-title text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                        <span class="subtitle sub-title" style={{ fontFamily: '"Montserrat", sans-serif' }}>VISIT MY PROJECTS</span>
                        <h2 class="title sec-title" style={{ color: "black", }}>MY PROJECTS
                        </h2>
                    </div>
                </div>
                <div className='container'>
                    <div className='row gx-5 gy-4'>
                        <div className='col-md-4'>
                            <div class="card custom-card p-5" >

                                <a href="/">
                                    <img src="https://venkatesanj.com/wp-content/uploads/2023/07/12085313_20944139-340x250.jpg"
                                        className="card-img-top zoom-effect"
                                        alt="..."

                                    />
                                </a>
                                <div class="card-body heading5">
                                    <div class="content" style={{ padding: "18px" }}>
                                        <div class="category-info">

                                            <div class="category-list">
                                                <a href="/Idfc" className='anchor'>project</a>
                                            </div>

                                        </div>
                                        <h4 class="title">
                                            <a href="/Idfc" data-url="" data-toggle="modal">IDFC First Bank
                                                <i class="feather-arrow-up-right"></i></a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 '>
                            <div class="card custom-card p-5" >
                                <a href="/">
                                    <img src="https://venkatesanj.com/wp-content/uploads/2023/07/4342541_19471-340x250.jpg"
                                        className="card-img-top zoom-effect"
                                        alt="..."

                                    />
                                </a>                       <div class="card-body heading5">
                                    <div class="content" style={{ padding: "18px" }}>
                                        <div class="category-info">

                                            <div class="category-list">
                                                <a href="/cardinside" className='anchor'>project</a>
                                            </div>

                                        </div>
                                        <h4 class="title">
                                            <a href="/cardinside" data-url="" data-toggle="modal">Signet Jewelers
                                                <i class="feather-arrow-up-right"></i></a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card custom-card p-5" >
                                <a href="/">
                                    <img src="https://venkatesanj.com/wp-content/uploads/2023/07/9464140_36136-340x250.jpg"
                                        className="card-img-top zoom-effect"
                                        alt="..."

                                    />
                                </a>                        <div class="card-body heading5">
                                    <div class="content" style={{ padding: "18px" }}>
                                        <div class="category-info">

                                            <div class="category-list">
                                                <a href="/Trading" className='anchor'>project</a>
                                            </div>

                                        </div>
                                        <h4 class="title">
                                            <a href="/Trading" data-url="" data-toggle="modal">Trading 212
                                                <i class="feather-arrow-up-right"></i></a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card custom-card p-5">
                                <a href="/">
                                    <img src="https://venkatesanj.com/wp-content/uploads/2021/08/26765739_2109.i607.018.S.m012.c12.fintech-isometric-icons-340x250.jpg"
                                        className="card-img-top zoom-effect"
                                        alt="..."

                                    />
                                </a>                       <div class="card-body heading5">
                                    <div class="content" style={{ padding: "18px" }}>
                                        <div class="category-info">

                                            <div class="category-list">
                                                <a href="/Smart" className='anchor'>project</a>
                                            </div>

                                        </div>
                                        <h4 class="title">
                                            <a href="/Smart" data-url="" data-toggle="modal">Small Billing and CRM Sytem
                                                <i class="feather-arrow-up-right"></i></a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card custom-card p-5">
                                <a href="/">
                                    <img src="https://venkatesanj.com/wp-content/uploads/2021/08/15909026_1905.i039.037_online-payment-isometric-icons-340x250.jpg"
                                        className="card-img-top zoom-effect"
                                        alt="..."

                                    />
                                </a>                         <div class="card-body heading5">
                                    <div class="content" style={{ padding: "18px" }}>
                                        <div class="category-info">

                                            <div class="category-list">
                                                <a href="/Transaction" className='anchor'>project</a>
                                            </div>

                                        </div>
                                        <h4 class="title">
                                            <a href="/Transaction" data-url="" data-toggle="modal">Transaction Managment 
                                                <i class="feather-arrow-up-right"></i></a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card-End */}

            {/*Experience-Start  */}
            <div className="container">
                <div className="overflow-hidden" id="resume">
                    <div className="text-md-center text-center mt-5">
                        <span class="subtitle sub-title" style={{ fontFamily: '"Montserrat", sans-serif' }}>7+ YEARS OF EXPERIENCE</span>
                        <h2 class="title sec-title" style={{ color: "black" }}>MY RESUME
                        </h2>
                    </div>
                    <div className="row justify-content-md-center  mt-5">
                        <div className="col-md-11 nav-div exp heading4 rounded-4 ">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                                <li class="nav-item" role="presentation">
                                    <button
                                        class="nav-link active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                        className="mt-4 mx-5 text-md-center rounded-4 nav-button"
                                    >
                                        <h4 className='heading6'>Experience</h4>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button
                                        class="nav-link"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="true"
                                        className=" text-md-center rounded-4  mt-4 nav-button"
                                    >
                                        <h4 className='heading6'>Professional</h4>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div
                            class="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                            tabindex="0"
                        >
                            <section>
                                <div className="row d-flex justify-content-around ">
                                    <div className="col-md-3 mt-5 rounded-4 experience">
                                        <div className="row container-fluid">
                                            <div className="col-md-6 pt-4  mt-3">
                                                <h4 className="heading6">Software Engineer</h4>
                                            </div>
                                            <div className="col-md-6 justify-content-end text-md-end text-center mt-5 ">
                                                <button className="mt-2 px-3 py-2 rounded-3  cards-button ">
                                                    Chennai
                                                </button>
                                            </div>
                                        </div>
                                        <div className="py-1 px-2 my-5 ">
                                            <ul className="heading3">
                                                <li>
                                                    Implemented React JS code to handle cross browser
                                                    compatibility issues in Mozilla, IE 7, 8, 9, Safari and FF.
                                                </li>
                                                <li>
                                                    Used React-Router to turn application into Single Page
                                                    Application
                                                </li>
                                                <li>
                                                    {" "}
                                                    Worked in using React JS components, Forms, Events, Keys,
                                                    Router,Animations and Flux concept
                                                </li>
                                                <li>
                                                    Used Web services (SOAP and RESTful) for transmission of
                                                    large blocks of XML/JSON
                                                </li>
                                                <li>
                                                    Worked on responsive design and developed a single
                                                    ISOMORPHIC responsive website that could be served to
                                                    desktop, Tablets and mobile users using React.js
                                                </li>
                                                <li>
                                                    Maintained states in the stores and dispatched the actions
                                                    using Redux
                                                </li>
                                                <li>
                                                    Implemented the Drag and Drop functionality using
                                                    React-Draggable Component for UX-Library consisted of
                                                    Button, Checkbox, Input, Icons, Toggle Button, Dropdown,
                                                    Multi-Level Dropdown and many more
                                                </li>
                                                <li>
                                                    In Phase Two, worked closely with the Back-End team to
                                                    display data using the Custom Components, library
                                                    Components, and Redux
                                                </li>
                                                <li>
                                                    Used Middleware, Redux-Promise in application to retrieve
                                                    data from Back-End and to also perform RESTFUL services
                                                </li>
                                                <li>
                                                    Added Dynamic Functionality by creating and dispatching
                                                    Action Creators that deployed Actions
                                                </li>
                                                <li>
                                                    Created and used Reducers that received said Actions to
                                                    modify the Store State Tree
                                                </li>
                                                <li>
                                                    Worked with backend engineers to optimize existing API calls
                                                    to create efficiencies by deprecating unneeded API calls
                                                    Called the Restful web services calls for and GET methods
                                                    POST, PUT, DELETE
                                                </li>
                                                <li>
                                                    {" "}
                                                    Have worked on AWS for fetch the pictures files from AWS to
                                                    Ul
                                                </li>
                                                <li>
                                                    Used React flux to polish the data and for single
                                                    directional flow Used Object Oriented Programming concepts
                                                    to develop Ul components that could be reused across the Web
                                                    Application.
                                                </li>
                                                <li>
                                                    Design, develop and test HTMLS, CSS3 Bootstrap, JavaScript,
                                                    jQuery and ReactJS that meets accessibility and web browser
                                                    standards for website
                                                </li>
                                                <li>
                                                    Designed CSS templates for use in all pages on the website
                                                    working with CSS Background, positioning, text, border,
                                                    margin, padding, and table
                                                </li>
                                                <li>
                                                    Applied optimization techniques to reduce page size and load
                                                    times to enhance user experience using sprites
                                                </li>
                                                <li>
                                                    Developed user interface by using the React JS, Flux for SPA
                                                    development Extensively used Git for version controlling and
                                                    regularly pushed the code to GitHub
                                                </li>
                                                <li>
                                                    Used JIRA as the bug tracking system to track and maintain
                                                    the history of bugs/issues on everyday basis.
                                                </li>
                                                <li>
                                                    Used React-Autocomplete for creating google maps location
                                                    search on the webpage Added Excel-Builder to download the
                                                    Tabular data in Excel format using React
                                                </li>
                                                <li>
                                                    Used Excel Builder 3rd Party open source library and tweak
                                                    it to make sure it will work with IE 11
                                                </li>
                                                <li> Used flickity.js for creating carousel-images.</li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="col-md-3 mt-5 rounded-3 experience">
                                        <div className="row container-fluid">
                                            <div className="col-md-6 pt-4  mt-3">
                                                <h4 className="heading6">Software Engineer</h4>
                                            </div>
                                            <div className="col-md-6 justify-content-end text-md-end text-center mt-5 ">
                                                <button className="mt-2 px-3 py-2 rounded-3  cards-button ">
                                                    Chennai
                                                </button>
                                            </div>
                                        </div>
                                        <div className="py-1 px-2 my-5 ">
                                            <ul className="heading3 ">
                                                <li>
                                                    Implemented various screens for the front end using React.js
                                                    and used various predefined components from NPM (Node
                                                    Package Manager) and Redux library
                                                </li>
                                                <li>
                                                    Worked in using React JS components, Forms, Events, Keys,
                                                    Router, Animations, and Flux concept
                                                </li>
                                                <li>Responsible for React Ul and architecture</li>
                                                <li>
                                                    Building components library, including Tree, Slide-View, and
                                                    Table Grid Implemented stable React components and
                                                    stand-alone functions to be added to any future pages
                                                </li>
                                                <li>
                                                    Used React JS for templating for faster compilation and
                                                    developing reusable components
                                                </li>
                                                <li>
                                                    Used React-Autocomplete for creating google maps location
                                                    search on the webpage
                                                </li>
                                                <li>
                                                    Configured Web pack to execute linters, magnifiers,
                                                    pre/post-processors,tests, transpires, etc
                                                </li>
                                                <li>
                                                    Based on build target Utilized React for its efficient data
                                                    flow architecture to create a lightweight and render
                                                    efficient web app that searched projects via the GitHub API
                                                    through keywords.
                                                </li>
                                                <li>
                                                    Worked on an Agile (Scrum) Development Team to deliver
                                                    regular updates to business team and project managers
                                                </li>
                                                <li>
                                                    Involved designing in web pages using HTML 5, CSS3,
                                                    JavaScript, Bootstrap, SASS, LESS, React.js, Redux , Flex,
                                                    Mongo DB
                                                </li>
                                                <li>
                                                    Responsible to Style, look and feel of the web page with
                                                    SASS that extends CSS with dynamic behavior such as
                                                    variable, mixing, operations and functions
                                                </li>
                                                <li>
                                                    Researching JavaScript based frameworks like React Native
                                                    and Ionic/Cordova for frontend
                                                </li>
                                                <li>
                                                    Worked on ReactJS Virtual Dom and React views, rendering
                                                    using components which contains additional components called
                                                    custom HTML tags
                                                </li>
                                                <li>
                                                    Implemented React container and presentational components
                                                    (as Stateless and Functional components when applicable)
                                                </li>
                                                <li>
                                                    Added Excel-Builder to download the Tabular data in Excel
                                                    format using React
                                                </li>
                                                <li>
                                                    {" "}
                                                    Implemented flux pattern by using redux framework as a core
                                                    dependency
                                                </li>
                                                <li>
                                                    Have worked on AWS to integrate the server side and client
                                                    side code Experience in RESTful web services to integrate
                                                    between Server side to Client Side
                                                </li>
                                                <li>
                                                    Worked with JASMINE unit test framework to write unit tests
                                                    for JavaScript code
                                                </li>
                                                <li>
                                                    Involved in complete SDLC - Requirement Analysis,
                                                    Development, System and Integration Testing
                                                </li>
                                                <li>
                                                    Handled cross browser/platform compatibility issues (IE,
                                                    Firefox, and Safari) on both Windows
                                                </li>
                                                <li>
                                                    As an onsite coordinator, I have interacted with offshore
                                                    team to give the Functional and Technical Knowledge and to
                                                    track the status of the project
                                                </li>
                                                <li>
                                                    Used HP Quality Centre to keep track of outstanding bugs to
                                                    reduce downtime, increase productivity, and improve
                                                    communication.
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="col-md-3 mt-5 rounded-3 experience">
                                        <div className="row container-fluid">
                                            <div className="col-md-6 pt-4 mt-3">
                                                <h4 className="heading6">Software Engineer</h4>
                                            </div>
                                            <div className="col-md-6 justify-content-end text-md-end text-center mt-5 ">
                                                <button className="mt-2 px-3 py-2 rounded-3  cards-button ">
                                                    Chennai
                                                </button>
                                            </div>
                                        </div>
                                        <div className="py-1 px-2 my-5 ">
                                            <ul className="heading3">
                                                <li>
                                                    Used Python and Django to interface with the jQuery IJI and
                                                    manage the storage and deletion of content
                                                </li>
                                                <li>
                                                    Worked on several python packages like Scipy, Scikit Learn,
                                                    Pandas, Numpy,Matplotlib,Seaborn etc
                                                </li>
                                                <li>
                                                    Used ECMAScript 6, ReactJS, Flux, Babel, Node and Web-Pack
                                                    to create a SPA
                                                </li>
                                                <li>
                                                    Worked with various MVCJava frameworks like Angular.JS, EXT
                                                    JS, Backbone.JS, Node.JS, Ember.JS, bootstrap.JS, Require
                                                    .JS, D3.JS, etc
                                                </li>
                                                <li>
                                                    Proficient in developing Web Services (SOAP, RESTful) in
                                                    Python using XML, JSON
                                                </li>
                                                <li>
                                                    Developed entire frontend and backend modules using Python
                                                    on Django Web Framework
                                                </li>
                                                <li>
                                                    Worked on designing, coding and developing the application
                                                    in Python using Django MVC
                                                </li>
                                                <li>
                                                    Experience in working with Python ORM Libraries including
                                                    Django ORM, Worked on integrating python with Web
                                                    development tools and Web Services
                                                </li>
                                                <li>
                                                    Performed troubleshooting, fixed and deployed many Python
                                                    bug fixes of the two main applications that were a main
                                                    source of data for both customers and internal customer
                                                    service team
                                                </li>
                                                <li>
                                                    Rewrote existing Python/Django modules to deliver certain
                                                    format of data
                                                </li>
                                                <li>
                                                    Wrote python scripts to parse XML documents and load the
                                                    data in database Stored the data in an Apache Cassandra
                                                    Cluster Used Impala to query the Hadoop data stored in HDFS
                                                </li>
                                                <li>
                                                    Developed custom consumers and producers for Apache Kafka in
                                                    Go (golang) for cars monitoring system
                                                </li>
                                                <li>
                                                    Experience in implementing and working on the python code
                                                    using shell scripting
                                                </li>
                                                <li>
                                                    Performed troubleshooting, fixed and deployed many Python
                                                    bug fixes Created real-time dashboard for Executives,
                                                    utilizing Logstash, Elastic Search, Kibana & Redis
                                                </li>
                                                <li>
                                                    Used scala scripts for spark machine learning libraries API
                                                    execution for decision trees, ALS, logistic and linear
                                                    regressions algorithms
                                                </li>
                                                <li>
                                                    Designed the real-time analytics and ingestion platform
                                                    using Storm and Kafka
                                                </li>
                                                <li>
                                                    Wrote Storm topology to accept the events from Kafka
                                                    producer and emit into Cassandra DB
                                                </li>
                                                <li>
                                                    Used Celery as task queue and RabbitMQ, Redis as messaging
                                                    broker to execute asynchronous tasks
                                                </li>
                                                <li>
                                                    Developed dynamic web pages using HTMLS, CSS3, JQuery,
                                                    d3.js, AngularJS, Bootstrap, JavaScript and Eclipse as Text
                                                    Editor
                                                </li>
                                                <li>
                                                    Implemented Restful web service to interact with Redis Cache
                                                    framework Wrote and executed various MYSQL database queries
                                                    from python using Python MySQL connector and MySQL dB
                                                    package
                                                </li>
                                                <li>
                                                    Wrote scripts in Python for extracting data from HTML file
                                                </li>
                                                <li>
                                                    Utilize PylJnit, the Python Unit test framework, for all
                                                    Python applications
                                                </li>
                                                <li>
                                                    Worked with NoSql Databases like Apache Cassandra, Mongo DB
                                                </li>
                                                <li>
                                                    Building a Command line tool to interact with RESTful API
                                                    using in Golang Designed SPA (Single page applications) in
                                                    Flux architecture using React.js Project in the Client Side.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="row">
                                    <div className="col-md-5  container mt-5 pt-5">
                                        <div className="d-flex justify-content-center mt-5">
                                            <div className=" professinal experience  px-5 mx-5 rounded-3">
                                                <div className="row align-items-center justify-content-between">
                                                    <div className="col-md-8 pt-4 mt-3">
                                                        <h5 className="my-4 heading6" >
                                                            Python Django Developer/ Backend Developer,
                                                        </h5>
                                                    </div>
                                                    <div className="col-md-4 mt-4 text-md-end text-center">
                                                        <button className="mt-2 px-3 py-2 rounded-3 cards-button ">
                                                            Chennai
                                                        </button>
                                                    </div>
                                                </div>

                                                <hr className="mt-4"></hr>
                                                <p className=" my-3 py-3 px-3 professinal-p heading3">
                                                    I am a skilled software developer with expertise in Java and
                                                    Python, specializing in building robust and scalable
                                                    applications. With a strong foundation in Java Spring Boot and
                                                    Python Django frameworks, I have successfully delivered
                                                    projects that meet clients' requirements and industry
                                                    standards. My proficiency extends to automated testing using
                                                    Selenium, ensuring the quality and reliability of software
                                                    applications. Additionally, my experience in Machine Learning
                                                    empowers me to apply advanced algorithms and data analysis
                                                    techniques to solve complex business problems. I thrive in
                                                    collaborative environments, utilizing my strong
                                                    problem-solving and communication skills to deliver innovative
                                                    solutions that drive business success.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5  container mt-5 pt-5">
                                        <div className="d-flex justify-content-center mt-5">
                                            <div className=" professinal experience  px-5 mx-5 rounded-3">
                                                <div className="row align-items-center justify-content-between">
                                                    <div className="col-md-8 pt-4 mt-3">
                                                        <h5 className="my-4 heading6">
                                                            Python Django Developer/ Backend Developer,
                                                        </h5>
                                                    </div>
                                                    <div className="col-md-4 mt-4 text-md-end text-center">
                                                        <button className="mt-2 px-3 py-2 rounded-3 cards-button ">
                                                            Chennai
                                                        </button>
                                                    </div>
                                                </div>

                                                <hr className="mt-4"></hr>
                                                <p className="my-3 py-3 px-3 professinal-p heading3">
                                                    I am a skilled software developer with expertise in Java and
                                                    Python, specializing in building robust and scalable
                                                    applications. With a strong foundation in Java Spring Boot and
                                                    Python Django frameworks, I have successfully delivered
                                                    projects that meet clients' requirements and industry
                                                    standards. My proficiency extends to automated testing using
                                                    Selenium, ensuring the quality and reliability of software
                                                    applications. Additionally, my experience in Machine Learning
                                                    empowers me to apply advanced algorithms and data analysis
                                                    techniques to solve complex business problems. I thrive in
                                                    collaborative environments, utilizing my strong
                                                    problem-solving and communication skills to deliver innovative
                                                    solutions that drive business success.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                            tabindex="0"
                        >
                            <section className="container">
                                <div className="row">
                                    <div className="col-md-6 container mt-5">
                                        <h4 className="text-danger mt-5">2016-2023</h4>
                                        <h2 className="heading6">Professional Summary</h2>
                                        <div className="d-flex justify-content-center my-5">
                                            <div className=" professinal experience  px-5 rounded-3">
                                                <div className="row align-items-center justify-content-between">
                                                    <div className="col-md-6 pt-4 mt-3">
                                                        <h3 className='heading6 fw-bold'>Professional Summary</h3>
                                                    </div>
                                                    <div className="col-md-6 mt-4 text-md-end text-center">
                                                        <button className="mt-2 px-4 py-3 rounded-3 cards-button ">
                                                            Chennai
                                                        </button>
                                                    </div>
                                                </div>

                                                <hr className="mt-4"></hr>
                                                <p className="my-3 py-3 px-3 heading3">
                                                    I am a skilled software developer with expertise in Java and
                                                    Python, specializing in building robust and scalable
                                                    applications. With a strong foundation in Java Spring Boot and
                                                    Python Django frameworks, I have successfully delivered
                                                    projects that meet clients' requirements and industry
                                                    standards. My proficiency extends to automated testing using
                                                    Selenium, ensuring the quality and reliability of software
                                                    applications. Additionally, my experience in Machine Learning
                                                    empowers me to apply advanced algorithms and data analysis
                                                    techniques to solve complex business problems. I thrive in
                                                    collaborative environments, utilizing my strong
                                                    problem-solving and communication skills to deliver innovative
                                                    solutions that drive business success.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6  mt-5">
                                        <h4 className="text-danger mt-5 ">2016-2023</h4>
                                        <h2 className="heading6 ">Job Experience</h2>
                                        <div className=" px-2">
                                            <div className="rounded-3">
                                                <div className="experience mt-5 rounded-3 px-5">
                                                    <div className="row align-items-center justify-content-between">
                                                        <div className="col-md-6 pt-4 mt-3">
                                                            <h5 className='heading6 fw-bold'>Professional Summary</h5>
                                                        </div>
                                                        <div className="col-md-6 mt-4 text-md-end text-center">
                                                            <button className="mt-2 px-4 py-3 rounded-3 cards-button ">
                                                                Chennai
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className="py-2 ">Hexaware Technologies (2016-2018)</p>
                                                    <hr className="py-5"></ hr>
                                                </div>
                                                <div className="experience mt-5 rounded-3 px-5">
                                                    <div className="row align-items-center justify-content-between">
                                                        <div className="col-md-6 pt-4 mt-3">
                                                            <h5 className='heading6 fw-bold'>Professional Summary</h5>
                                                        </div>
                                                        <div className="col-md-6 mt-4 text-md-end text-center">
                                                            <button className="mt-2 px-4 py-3 rounded-3 cards-button ">
                                                                Chennai
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className="py-4">Hexaware Technologies (2016-2018)</p>
                                                    <hr className="py-5"></hr>
                                                </div>
                                                <div className="experience mt-5 rounded-3 px-5">
                                                    <div className="row align-items-center justify-content-between">
                                                        <div className="col-md-6 pt-4 mt-3">
                                                            <h5 className='heading6 fw-bold'>Professional Summary</h5>
                                                        </div>
                                                        <div className="col-md-6 mt-4 text-md-end text-center">
                                                            <button className="mt-2 px-4 py-3 rounded-3 cards-button ">
                                                                Chennai
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className="py-4">Hexaware Technologies (2016-2018)</p>
                                                    <hr className="py-5"></hr>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
            {/*Experience-End  */}

            {/* Client-start */}
            <div>
                <div
                    class="elementor-widget-container"
                    id="testimonial"
                    style={{ margin: "2rem" }}
                >
                    <div
                        class="section-title text-center aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        data-aos-once="true"
                    >
                        <span
                            class="subtitle sub-title"
                            style={{ fontFamily: '"Montserrat", sans-serif' }}
                        >
                            WHAT CLIENTS SAY
                        </span>
                        <h2  class="title sec-title " style={{ color: "black" }}>
                            TESTIMONAL
                        </h2>
                    </div>
                </div>
                <div className="container">
                    <div className="carousel p-5 ">
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="client h-100">
                                                <div className="inner h-100">
                                                    <div className="card-info h-100">
                                                        <div className="card-thumbnail">
                                                            <img
                                                                decoding="async"
                                                                loading="lazy"
                                                                width="340"
                                                                height="250"
                                                                src="https://venkatesanj.com/wp-content/uploads/2023/07/profile-6-340x250.png"
                                                                class="attachment-rainbow-thumbnail-sm size-rainbow-thumbnail-sm"
                                                                alt="client-image"
                                                            />
                                                        </div>
                                                        <div class="card-content">
                                                            <span class="subtitle mt-10"></span>
                                                            <h3 class="title heading7">Amit Sharma</h3>
                                                            <span class="designation heading6">CEO</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="user">
                                                <div class="card-description ">
                                                    <div class="title-area">
                                                        <div class="title-info">
                                                            <h3 class="title heading6"> Smart Billing and CRM System</h3>
                                                            <span class="date"> </span>
                                                        </div>

                                                        <div class="rating">
                                                            <ul className="p-0 mx-auto my-0">
                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="my-3 border"></div>
                                                    <div class="seperator"></div>
                                                    <p class="description heading3">
                                                        I was blown away by Venkatesan’s Full Stack Web
                                                        Developer skillset, which resulted in a game-changing
                                                        experience for my business. Working with him was a
                                                        seamless collaboration, and his expertise was
                                                        unparalleled. The communication with him was easy, He
                                                        was proactive giving ideas of how to do a better job
                                                        with web app development, and like I have said, the
                                                        final result was excellent.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="client">
                                                <div className="inner">
                                                    <div className="card-info">
                                                        <div className="card-thumbnail">
                                                            <img
                                                                decoding="async"
                                                                loading="lazy"
                                                                width="340"
                                                                height="250"
                                                                src="https://venkatesanj.com/wp-content/uploads/2023/07/profile-6-340x250.png"
                                                                class="attachment-rainbow-thumbnail-sm size-rainbow-thumbnail-sm"
                                                                alt="client-image"
                                                            />
                                                        </div>
                                                        <div class="card-content">
                                                            <span class="subtitle mt-10"></span>
                                                            <h3 class="title heading7">Amit Sharma</h3>
                                                            <span class="designation heading6">CEO</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="user">
                                                <div class="card-description ">
                                                    <div class="title-area">
                                                        <div class="title-info">
                                                            <h3 class="title heading6"> Smart Billing and CRM System</h3>
                                                            <span class="date"> </span>
                                                        </div>

                                                        <div class="rating">
                                                            <ul className="p-0 mx-auto my-0">
                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="my-3 border"></div>
                                                    <div class="seperator"></div>
                                                    <p class="description heading3 active">
                                                        I was blown away by Venkatesan’s Full Stack Web
                                                        Developer skillset, which resulted in a game-changing
                                                        experience for my business. Working with him was a
                                                        seamless collaboration, and his expertise was
                                                        unparalleled. The communication with him was easy, He
                                                        was proactive giving ideas of how to do a better job
                                                        with web app development, and like I have said, the
                                                        final result was excellent.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="client">
                                                <div className="inner">
                                                    <div className="card-info">
                                                        <div className="card-thumbnail">
                                                            <img
                                                                decoding="async"
                                                                loading="lazy"
                                                                width="340"
                                                                height="250"
                                                                src="https://venkatesanj.com/wp-content/uploads/2023/07/profile-6-340x250.png"
                                                                class="attachment-rainbow-thumbnail-sm size-rainbow-thumbnail-sm"
                                                                alt="client-image"
                                                            />
                                                        </div>
                                                        <div class="card-content">
                                                            <span class="subtitle mt-10"></span>
                                                            <h3 class="title heading7">Amit Sharma</h3>
                                                            <span class="designation heading6">CEO</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="user">
                                                <div class="card-description ">
                                                    <div class="title-area">
                                                        <div class="title-info">
                                                            <h3 class="title heading6"> Smart Billing and CRM System</h3>
                                                            <span class="date"> </span>
                                                        </div>

                                                        <div class="rating">
                                                            <ul className="p-0 mx-auto my-0">
                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>

                                                                <li class="has-rating list-inline-item">
                                                                    <i class="star-icon">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="currentColor"
                                                                            class="bi bi-star-fill"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                        </svg>
                                                                    </i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="my-3 border"></div>
                                                    <div class="seperator"></div>
                                                    <p class="description heading3">
                                                        I was blown away by Venkatesan’s Full Stack Web
                                                        Developer skillset, which resulted in a game-changing
                                                        experience for my business. Working with him was a
                                                        seamless collaboration, and his expertise was
                                                        unparalleled. The communication with him was easy, He
                                                        was proactive giving ideas of how to do a better job
                                                        with web app development, and like I have said, the
                                                        final result was excellent.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                                <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                                <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                                style={{ backgroundColor: "red" }}
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                                style={{ backgroundColor: "red" }}
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                                style={{ backgroundColor: "red" }}
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Client-End */}

            {/* Contact-Start */}
            <div>
                <div class="elementor-widget-container" id='contact' style={{ margin: "3rem" }}>
                    <div class="section-title text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                        <span class="subtitle sub-title" style={{ fontFamily: '"Montserrat", sans-serif' }}>Contact</span>
                        <h2 class="title sec-title " style={{ color: "black", fontSize: "25px" }}>CONTACT WITH ME
                        </h2>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row gx-5">
                        <div className="col-md-5">
                            <div className="card custom-card p-5" style={{ height: "850px" }}>
                                <a href="/">
                                    <img
                                        src="https://venkatesanj.com/wp-content/uploads/2021/08/contact1.png"
                                        className="card-img-top zoom-effect"
                                        alt="..."
                                    />
                                </a>
                                <div className="titlehead mb-3 p-2">
                                    <h4 className="titlehead-area p-0 mb-3 heading7 " >Venkatesan J</h4>
                                    <span className="titlehead-span mb-4  heading6">Software Engineer</span>
                                </div>
                                <div className="description mb-4">
                                    <p className="para mb-4" style={{ fontFamily: '"Poppins",sans-serif' }}>
                                        Want to get in touch on Developing? Here's how you can reach me! - HAPPY CONNECTING!
                                    </p>
                                    <div className='phone mb-4' style={{ fontSize: "20px" }}>Phone: <a href="tel:+918667672605" className='heading6'>+91 
                                    8667672605</a></div>
                                    <div className='email' style={{ fontSize: "20px" }}>Email: <a href="mailto:venkteshanj@axesstechnology.in" className='heading6'>venkteshanj@axesstechnology.in</a></div>
                                </div>
                                <div className="social-area mb-4">
                                    <div className="name mb-4 heading7 fw-bold" style={{ fontFamily: '""Montserrat", sans-serif;"' }}>My LinkedIn Profile :</div>
                                    <div className="social-icon skill-share has-shadow mb-2">
                                        <Link to="#">
                                            <img src={linked} alt="Linkedin logo" className='img-fluid p-2' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '38px' }} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 heading3">
                            <div className="card custom-card p-5" style={{ height: "850px" }}>
                                <form class="contact-form " style={{ fontFamily: '"Montserrat", sans-serif"' }}>
                                    <div class="form-group p-3">
                                        <label for="inputName" className='mb-2'>Your Name</label>
                                        <input type="text" class="form-control p-3" id="inputName" />
                                    </div>

                                    <div class="form-group p-3">
                                        <label for="inputPhoneNumber" className='mb-2'>Phone Number</label>
                                        <input type="text" class="form-control p-3" id="inputPhoneNumber" />
                                    </div>

                                    <div class="form-group p-3">
                                        <label for="inputSubject" className='mb-2' >Subject</label>
                                        <input type="text" class="form-control p-3" id="inputSubject" />
                                    </div>
                                    <div class="form-group p-3">
                                        <label for="inputEmail" className='mb-2'>Email</label>
                                        <input type="email" class="form-control p-3" id="inputEmail" required />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address.
                                        </div>
                                    </div>
                                    <div className='form-group p-3'>
                                        <label for="message" className='mb-2'>
                                            Your Message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows={3}

                                            style={{ resize: 'none' }}

                                        />
                                    </div>




                                    <div class="container">
                                        <div class="row">
                                            <div className='form-group p-3'>
                                                <div class="col-md-12 mx-auto " >
                                                    <input class="form-control wpcf7-submit has-spinner rn-btn p-3" type="submit" value="SEND MESSAGE" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact-End */}

            <Scroll />
        </div >


    )
}

export default Home