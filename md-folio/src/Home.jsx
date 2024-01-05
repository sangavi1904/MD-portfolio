import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  
 return (
        
        <div>


            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="#">
                            <img src="https://venkatesanj.com/wp-content/uploads/2023/06/logo-vertical-2.png" alt=" navlogo" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="#">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="#">Summary</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="#">Tecnical Skill</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="#">Resume</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="#">Testimonial</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="#">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* navber end */}


            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <img src="https://venkatesanj.com/wp-content/uploads/2023/06/Image.png" className='img-fluid' alt="md-img" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <p className='display-4 mt-4 pt-4 fw-semibold'>Hi, I’m
                                <span className='text-danger mx-3'>Venkatesan J a</span>Developer  </p>
                                {/* <p>Venkatesan  <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p> */}

                        </div>


                        <p> I am a highly skilled and experienced software developer with expertise in MERN Stack and MEAN Stack development, Java development,
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
                            <div className='col-6'>
                                <p>MY LINKEDIN PROFILE</p>
                                <Link to="#">
                                    <img src="https://venkatesanj.com/wp-content/uploads/2023/07/Springboot.png" alt="LLinkedin logo" className='w-25' /></Link>
                            </div>
                            <div className='col-6'>
                                <p>BEST SKILLED IN</p>
                                <div>
                                    <Link to="#">
                                        <img src='https://venkatesanj.com/wp-content/uploads/2023/07/React-icon.svg-1.png' alt='React logo' className='w-25 img-fluid'></img>
                                        <img src='https://venkatesanj.com/wp-content/uploads/2023/07/Angular.png' alt='Angular logo' className='w-50 img-fluid'></img>
                                        <img src='https://venkatesanj.com/wp-content/uploads/2023/07/Springboot.png' alt='Spring logo' className='w-25 img-fluid'></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End */}


        </div >


    )
}

export default Home