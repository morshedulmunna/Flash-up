import React from "react";
import "./About.css";
import user from "../../images/user.jpg";
const About = () => {
  return (
    <div className="about container">
      <div className="about_wrapper">
        <div className="about__content">
          <h1>Morshedul Islam Munna</h1>
          <h3>I'm Frontend || MERN Stack Developer!</h3>
          <p>
            I am an enthusiastic and dedicated learner. with a deep interest in
            JavaScript. To work in the Software industry with modern web
            technologies web 3.0 and To pursue a challenging job in a dynamic
            and esteemed organization, where I will be able to perform in any
            kind of situation with full effort to utilize my knowledge, skill,
            and experience for professional career development.
          </p>
          <h2>Future Target:</h2>
          <ul>
            <li>🔭 I’m currently working on Frontend Web Development!</li>
            <li>🌱 I’m currently learning Competitive Programming........</li>
            <li>
              🥅 2022 Goals: Learn React, React Native, Node, MongoDB. 🚀
              Python, Problem Solving
            </li>
            <li>👯 I’m looking to collaborate on creating content!</li>
            <li>🚀 Fun fact: I love to Explore the world!</li>
          </ul>
        </div>
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default About;
