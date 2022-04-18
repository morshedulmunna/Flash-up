import React from "react";
import "./Blog.css";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
// import contextAPi from "../asset/context-api.png";
// import semanticTag from "../asset/HTML5-Semantic-Elements.jpg";

const Blog = () => {
  return (
    <div>
      <div className="wrapper_blog">
        <div className="container blog ">
          <div className="context_Api">
            <Fade left>
              <img
                src="https://securityintelligence.com/wp-content/uploads/2018/10/si-advanced-authentication-feature.jpg"
                alt=""
              />
            </Fade>
            <div className="blog_text">
              <span>Published by 17 April 2022</span>
              <Pulse>
                <h1>Difference between authorization and authentication ?</h1>
              </Pulse>
              <p>
                <h2>Authentication: </h2>
                1. In authentication process, the identity of users are checked
                for providing the access to the system.
                <br />
                2.In authentication process, users or persons are verified.
                <br />
                3. It is done before the authorization process.
                <br />
                4. It needs usually user's login details. and Authentication
                determines whether the person is user or not.
                <h2>Authorization: </h2>
                1.While in authorization process, person's or user's authorities
                are checked for accessing the resources.
                <br />
                2.While in this process, users or persons are validated.
                <br />
                3. While this process is done after the authentication process.
                <br />
              </p>
            </div>
          </div>
          <p>
            4. While it needs user's privilege or security levels. and While it
            determines What permission do user have?
          </p>

          <div className="context_Api">
            <div className="blog_text">
              <span>Published by 18 April 2022</span>
              <Pulse>
                <h1>
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </h1>
              </Pulse>
              <p>
                <h2>Firebase: </h2>
                Firebase provides multiple ways of authenticating users. Like
                Email Password authentication, Google, Facebook or Twitter or
                you can implement authentication on custom server. Firebase
                Authentication provides backend services, easy-to-use SDKs, and
                ready-made UI libraries to authenticate users to your app.
                <h2>Others option:</h2>
                <i>
                  Auth0, MongoDB, AWS, Passport , OKta, JSON web Tocken , Amazon
                  Cognito
                </i>
              </p>
            </div>
            <Fade left>
              <img
                src="https://miro.medium.com/max/1200/1*vOc3_i4sPVH0kV0D65o4Iw.jpeg"
                alt=""
              />
            </Fade>
          </div>

          <div className="semantic_tag">
            <span>Published by 18 April 2022</span>
            <Fade bottom>
              <h1>
                What other services does firebase provide other than
                authentication ?
              </h1>
            </Fade>
            <div className="sementic_content">
              <Fade right>
                <img
                  src="https://miro.medium.com/max/1400/1*rIDMNpRx8HnnY5mhhbXLuA.png"
                  alt=""
                />
              </Fade>
              <p>
                <h2>
                  There are many services which Firebase provides, Most useful
                  of them are::
                </h2>
                <ol>
                  <li>Cloud Firestore.</li>
                  <li>Cloud Functions.</li>
                  <li>Authentication.</li>
                  <li>Hosting.</li>
                  <li>Cloud Storage.</li>
                  <li>Google Analytics.</li>
                  <li>Predictions.</li>
                  <li>Cloud Messaging.</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
