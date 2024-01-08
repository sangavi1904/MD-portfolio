import React from 'react';

const Transaction = () => {
  const imageUrl = 'https://venkatesanj.com/wp-content/uploads/2021/08/15909026_1905.i039.037_online-payment-isometric-icons-800x600.jpg';

  return (
    <div className="container-fluid py-5 my-5 px-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '15px' }}>
      <div className="row align-items-center">
        <div className="col-md-6 text-center mt-4">
          <img src={imageUrl} alt="Company Logo" className="img-fluid w-75 border-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '15px' }} />
        </div>

        <div className="col-md-6">
          <h4>Transaction Management System</h4>
          <p className='pt-3'>
            Project offers the corporate, financial and sponsor clients with expert advice, innovative solutions and outstanding execution for both simple and complex transactions and everything in between. Also providing multiple functions like Equity, Derivatives, Commodity and Currencies etc. Equity capital markets: Equity capital raising, related derivative products, risk management Solutions ,IPOs, right issues, follow-on, block trades, equity-linked transactions and other strategic equity solutions.
          </p>
          <h6 className='fw-bold'>Client:</h6>
          <p>
            Bridgepoint Capital, UK
          </p>

          <h6 className='fw-bold'>Domain:</h6>
          <p>Investment Banking</p>
        </div>
      </div>

      <div className="mt-4 px-5">
        <div className="project pt-4">
          <h2>Project 5</h2>

          <p className='pt-3'>
            <strong>Project:</strong> TMS (Transaction Management System)
          </p>
          <p>
            <strong >Client:</strong>
            Bridgepoint Capital, UK
          </p>
          <p>
            <strong>Domain:</strong>
            Investment Banking
          </p>
          <h5 className='pt-4 fw-bold'>Project Description:</h5>
          <p className='pt-3'>
            Project offers the corporate, financial and sponsor clients with expert advice, innovative solutions and outstanding execution for both simple and complex transactions and everything in between. Also providing multiple functions like Equity, Derivatives, Commodity and Currencies etc. Equity capital markets: Equity capital raising, related derivative products, risk management Solutions ,IPOs, right issues, follow-on, block trades, equity-linked transactions and other strategic equity solutions.
          </p>
          <h5 className='pt-4 fw-bold'>Responsibilities:</h5>
          <ul className='card-li '>
          <li>Analyzed system requirements specifications and also in client interaction during requirements specifications.</li>
            <li >Designed the front end of the application using Python 2.7, HTML, CSS, AJAX, JSON, and JQuery. Worked on the backend of the application, mainly using Active Records.</li>
            <li>Involved in analysis and design of the application features.</li>
            <li>Designed and developed communication between client and server using Secured Web services.</li>
            <li>Created IJI using JavaScript and HTML5/CSS.</li>
            <li>Developed and tested many features for dashboard using Python, Java, Bootstrap, CSS, JavaScript, and JQuery.</li>
            <li>Writing backend programming in Python.</li>
            <li>Used JavaScript and XML to update a portion of a webpage.</li>
            <li>Develop consumer-based features and applications using Python and Django in test-driven Development and pair-based programming.</li>
            <li>Performed Unit testing, Integration Testing, GUI and web application testing using Rspec.</li>
            <li>Implemented user interface guidelines and standards throughout the development and maintenance of the website using HTML, CSS, JavaScript, and JQuery.</li>
            <li>Worked on Jenkins continuous integration tool for deployment of project.</li>
            <li>Worked on changes to open stack and AWS to accommodate large-scale data center deployment.</li>
            <li>Created interactive data charts on patient portal web application using High charts JavaScript library with data coming from Apache Cassandra.</li>
            <li>Worked on front end frameworks like CSS Bootstrap for the development of Web application.</li>
            <li>Worked in MySQL database on simple queries and writing Stored Procedures for normalization.</li>
            <li>Deployed the project into Jenkins using GIT version control system.</li>
            <li>Learned to index and search/query a large number of documents inside Elastic search.</li>
            <li>Used Amazon Cloud EC2 along with Amazon SQS to upload and retrieve project history.</li>
            <li>Creating invitation flow for customers to use the client portal for monitoring PHR pages.</li>
            <li>Created the environment-specific settings for a new deployment and update the deployment-specific conditional checks in the codebase to use specific checks.</li>
            <li>Used advanced packages like Mock, patch and beautiful soup (b4) to perform unit testing.</li>
            <li>Worked on the translation of web pages to different languages as per client requirements.</li>
            <li>Updated the client admin tool to have the new features like support for internalization, support for customer service and etc.</li>
            <li>Implemented responsive vector maps and charts on web pages using the data from MongoDB.</li>
            <li>Collaborate with Product Management and User Experience experts regarding product definition, schedule, scope and project-related decisions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transaction;