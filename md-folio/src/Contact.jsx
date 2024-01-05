import React from 'react';

export default function Contact() {
    return (
        <div>
            <div class="elementor-widget-container" style={{ margin: "3rem" }}>
                <div class="section-title text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                    <span class="subtitle sub-title" style={{ fontFamily: '"Montserrat", sans-serif' }}>Contact</span>
                    <h2 class="title sec-title " style={{ color: "black", fontSize: "25px" }}>Contact With Me
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
                            <div className="titlehead mb-2 p-2">
                                <h4 className="titlehead-area p-0 mb-2">Venkatesan J</h4>
                                <span className="titlehead-span mb-2 ">Software Engineer</span>
                            </div>
                            <div className="description mb-2">
                                <p className="para mb-2" style={{ fontFamily: '"Poppins",sans-serif' }}>
                                    Want to get in touch on Developing? Here's how you can reach me! - HAPPY CONNECTING!
                                </p>
                                <span className='phone'>Phone: <a href="tel:+918667672605">+91-8667672605</a></span> <br />
                                <span className='email'>Email: <a href="mailto:venkteshanj@axesstechnology.in">venkteshanj@axesstechnology.in</a></span>
                            </div>
                            <div className="social-area mb-2">
                                <div className="name mb-2" style={{ fontFamily: '""Montserrat", sans-serif;"' }}>My LinkedIn Profile</div>
                                <div className="social-icon skill-share has-shadow mb-2">
                                    <a href="https://www.linkedin.com/in/venkteshanj" title="linkedin.">
                                        <i className="rbt feather-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
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

                                        style={{resize: 'none' }}

                                    />
                                </div>




                                <div class="container">
                                    <div class="row">
                                       <div className='form-group p-3'>
                                       <div class="col-md-12 mx-auto " >
                                            <input class="form-control wpcf7-submit has-spinner rn-btn p-3" type="submit" value="SEND MESSAGE"/>
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
    );
}
