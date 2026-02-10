import { useState } from 'react'
import resume from "./assets/resume.jpeg";

import './App.css'

function App() {
  

  return (
    <>
       <div className="resume">
        <div className="left">
            <img className="profile" src={resume} alt="Resume" />

            <div>
                <h3 className="name">Usman</h3>
                <h3 className="name">Ali</h3>
            </div>
            <p className="a">Principal Software Engineer</p>
            <hr />
            <div>
                <h4 className="h">Profile</h4>
                <p className="about">Experienced Senior Software Engineer with
                    10+ Years in Java Development: Resultsoriented senior software engineer with a
                    decade of hands-on experience in designing,
                    developing, and deploying Java-based
                    applications. Adept at architecting scalable
                    solutions and optimizing performance for
                    high-traffic applications. Proficient in Java
                    technologies including Spring Framework,
                    Hibernate, and RESTful APIs. Skilled in
                    collaborating with cross-functional teams
                    and mentoring junior developers to drive
                    excellence. Known for consistently
                    delivering robust, maintainable code and
                    driving projects from concept to delivery.</p>
            </div>
            <div>
                <h4 className="h">SKILLS</h4>
                <p className="about">Java 17, J2EE, Spring Framwork,
                    Spring Boot, Spring Security, OAuth
                    2.1, Microservices Solution Design,
                    Azure Services, Spring Data, JPA,
                    Hibernate, Event Driven Architecture,
                    Spring Cloud, RabitMQ, Service Bus,
                    Kafka, Jenkins, Azure CI/CD, NodeJs,
                    MySQL, SQL, MongoDB, Redis,
                    Docker</p>
            </div>
            <div>
                <h4 className="h">CONTACT</h4>
                <p className="c">
                    <i className="fa-solid fa-phone"></i> +92 300 1234567
                </p>

                <p className="c">
                    <i className="fa-solid fa-location-dot"></i> Riyadh, Saudia Arabia
                </p>

                <p className="c">
                    <i className="fa-solid fa-envelope"></i> tanoliusamnali@gmail.com
                </p>

            </div>
        </div>



       
        <div className="right">
            <div>
                <h4 className="work">WORK EXPERIENCE</h4>
                <h3 className="job-title">Senior Software Engineer| 2022 – Now</h3>
                <h4 className="company">Seera, Riyadh-Saudi Arabia</h4>
                <ul className="details">
                    <p>Tasks:</p>
                    <li> Built security system with Spring OAuth 2.1 to serve 3 million
                        users.</li>
                    <li>Created Api Gateway application.</li>
                    <li> Moved PHP project to Spring Boot Application</li>
                    <li>Maintain existing projects.</li>
                </ul>
            </div>
            <div>
                <h3 className="job-title">Principal Software Engineer | 08/2018 – 08/2022</h3>
                <h4 className="company">Matas A/S, Islamabad-Pakistan</h4>
                <ul className="details">
                    <p>Tasks:</p>
                    <li>Design and implemented microservices on Azure from
                        monolithic application</li>
                    <li> IIntegrated Wso2 identity server to improve multi-platform
                        security with centralizad identity management.</li>
                    <li> Handling backend tasks by adding new features and maintaining
                        project.</li>
                    <li> Azure Services development, Azure CI/CD Pipelines and
                        Customer support.</li>
                </ul>
            </div>

            <div>
                <h3 className="job-title">Senior Software Engineer | 06/2017 – 08/2018</h3>
                <h4 className="company">Vaadin Pvt Ltd, Islamabad- Pakistan</h4>
                <ul className="details">
                    <p>Tasks:</p>
                    <li> Moved plan java product to Spring boot to improve product
                        quality and performance.</li>
                    <li> Implemented spring stomp for better socket performance and
                        moved bootstrap application.</li>
                </ul>
            </div>

            <div>
                <h3 className="job-title">Software Engineer | 02/2016 – 08/2017</h3>
                <h4 className="company">I3 Pathfinder Solution, Remote</h4>

                <p className="t">Tasks:</p>
                <p className="p">Worked with Canadian company to create support project for their<br/>
                    ecommerce platform for improve better support management and
                   <br/> purchases.<br />
                    Worked on Spring boot and AngularJs.
                </p>

            </div>
            <div>
                <h3 className="job-title">Software Engineer | 02/2016 – 08/2017</h3>
                <h4 className="company">I3 Pathfinder Solution, Remote</h4>

            </div>
            <div>
                <h3 className="job-title">Software Engineer | 02/2016 – 08/2017</h3>
                <h4 className="company">I3 Pathfinder Solution, Remote</h4>
            </div>
            <div>
                <h3 className="l">LANGUAGES</h3>
                <p className="u">English: Proficient
                </p>
                <p className="u">Urdu: Native
                </p>
            </div>
            <div>
                <h3 className="e">EDUCATION</h3>
                <h4 className="d">2013-2015 | Karachi - Pakistan</h4>
                <p className="m">Masters in Computer Science</p>
                <p className="f">Fast University Karachi</p>
                <h4 className="r">2008-2012 | Abbottabad - Pakistan</h4>
                <p className="m">Bachelor in Computer Science</p>
                <p className="f">COMSATS Institute of Information Technology</p>

            </div>
        </div>
    </div>
    </>
  )
}

export default App
