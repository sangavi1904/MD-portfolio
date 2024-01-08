import React from 'react'

 
const Cardinside = () => {
    const imageUrl = 'https://venkatesanj.com/wp-content/uploads/2023/07/4342541_19471-800x600.jpg'; // Replace with your image URL

    return (
        <div className="container-fluid py-5 my-5 px-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '15px' }}>
        <div className="row align-items-center">
        <div className="col-md-6 text-center mt-4">
                    <img src={imageUrl} alt="Company Logo"  className="img-fluid w-75 border-4"style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '15px' }} />
                </div>

                <div className="col-md-6">
                    <h4>Signet Jewelers</h4>
                    <p  className='pt-3'>
                        Signet Jewelers is the parent company of Kay Jewelers, Zales, Jared, Banter by Piercing Pagoda,
                        and Diamonds Direct in the United States, Blue Nile, JamesAllen.com, Rocksbox, and Peoples Jewellers
                        in Canada, and H. Samuel and Ernest Jones in the United Kingdom.
                    </p>

                    <h6 className='fw-bold'>Client</h6>
                    <p>Trading 212, London.</p>

                    <h6 className='fw-bold'>Domain</h6>
                    <p>E-commerce</p>
                </div>
            </div>
            <div className=" mt-4 px-5">
            

            {/* Project: Signet Jewelers */}
            <div className="project pt-4">
            <h2 >Project 2</h2>
               
                <p className='pt-3'>
                    <strong>Project:</strong> Signet Jewelers
                </p>
                <p>
                    <strong>Client:</strong> Trading 212, London.
                </p>
                <p>
                    <strong>Domain:</strong> E-commerce
                </p>
                <h5 className='pt-4 fw-bold'>Project Description:</h5>
                <p className='pt-3'>
                    Signet Jewelers is the parent company of Kay Jewelers, Zales, Jared, Banter by Piercing Pagoda, and Diamonds
                    Direct in the United States, Blue Nile, JamesAllen.com, Rocksbox, and Peoples Jewellers in Canada, and H.
                    Samuel and Ernest Jones in the United Kingdom.
                </p>
                <h5 className='pt-4 fw-bold'>Responsibilities:</h5>
                <ul className='card-li '>
                    <li>Designed Responsive Web pages using media queries and Twitter Bootstrap.</li>
                    <li>Experienced in ReactJS and working with React Flux architecture.</li>
                    <li>Working with ECMA Script 6 features. For build of JSX and ES2015(ES6) used Babel, webpack.</li>
                    <li>Working with React Router for developing Single Page Applications SPAs.</li>
                    <li>Experienced in developing React components. Used Axios with ReactJs for making AJAX Calls. Worked on Webpack for build and webpack-dev-server a server.</li>
                    <li>Actively involved developing proof of concept for a newly propsed application in using Angular 2.</li>
                    <li>Working experience with Typescript new features block scope, type restrictions, decorators, arrow functions, classes, interfaces, modules (import and exports).</li>
                    <li>Used webpack, babel and gulp for transpilation(compilation) configuration for typescript to be converted to javascript.</li>
                    <li>Worked with Angular 2.0 to develop single page applications, worked with ngrx/store for managing Angular 2.0 applications.</li>
                    <li>Worked with http interceptors configurations for security in Angular 2.0 applications.</li>
                    <li>Worked with Angular 2.0 directives, components, pipes, injectables.</li>
                    <li>For Responsive Web design used Bootstrap to build grids, layouts and components. Used Bootstrap components like dropdown menus, navigation bar, alerts, and labels.</li>
                    <li>Setup Jasmine and Karma for UNIT and Functional Testing of JavaScript with mocking frameworks and spys.</li>
                    <li>Worked with MEAN/ MERN stack for developing applications.</li>
                    <li>Worked with modules like MongoDB and mongoose for database persistence using Node.js to interact with MongoDB.</li>
                    <li>Worked with Express.js for development of RESTful web services and middleware configurations.</li>
                    <li>Worked with Passport and JSON web tokens for authentication and authorization security configurations using Node.js.</li>
                    <li>Worked with npm commands and using package.json for managing dependencies and dev-dependencies of node js applications.</li>
                    <li>Worked with Grunt, Gulp for task runner configurations for minification, watch, jshint, jscs, css autoprefixer, sass compilation, bundling and test runner configurations and make it available as a command.</li>
                    <li>Worked with unit testing of javascript applications using Karma, Jasmine, apimocker, Jest, enzyme, snion.</li>                
                    </ul>
            </div>
        </div>
        </div>

        
    );
};



export default Cardinside;