import React from "react";
import profileimg from "../images/profile-img.jpg"
import { SocialIcon } from 'react-social-icons'

function About() {
    return (
        <div>
            <div className="about-container-1">
                <div className="about--text">
                    <h1>Hi there.</h1>
                    <p>I am Sai Anil Tekuri, a graduate student pursuing a Master's degree in Computer Science at the State University of New York at Buffalo. With a strong foundation in coding and software development, I've delved into the world of DevOps, gaining valuable experience in streamlining development processes and enhancing collaboration between teams. Currently, I'm honing my skills in full-stack technologies, aiming to seamlessly integrate front-end and back-end development for comprehensive digital solutions.</p>               
                </div>
                <div className="about--image">
                    <img  className="about--profileimg" src={profileimg} alt="profile-img" />
                </div>
            </div>
            <div className="about--container-2">
                <div className="whoami--text"> 
                    <h1>Who am I</h1>
                    <p>My two favorite things are computers and math. Since childhood, I've been captivated by the intricacies of computers and the logic of mathematics, spending countless hours exploring their inner workings and possibilities.
                         The curiosity to learn more about this process and technological inventions made me participate in many workshops on programming throughout my school and college years. Alongside my passion for the digital world, I find solace and inspiration in the strokes of a paintbrush, expressing myself through vibrant colors and imaginative compositions.
                    </p>
                    <p>  Over the course of my professional journey, I've had the opportunity to contribute to a diverse array of projects and collaborate with different teams. 
                         These experiences have ranged from being a designer in AR/VR Development internship program at Knowledge Lens, to being a Project Engineer at Wipro Limited working towards streamlining and optimizing the software development lifecycle through the implementation of robust automation, continuous integration, and deployment pipelines.
                    </p>
                    <p>
                    My approach to automation and development is rooted in a deep understanding of agile methodologies, version control systems, and continuous integration practices.
                    Through strategic planning and meticulous execution,  I ensure that every automation solution is purpose-built to achieve operational excellence. Whether it's architecting scalable microservices architectures or optimizing deployment workflows, I am committed to leveraging cutting-edge technologies and best practices to empower teams and deliver exceptional results.
                    I believe that by aligning passion with purpose, we can collectively shape a brighter and more inclusive future. 
                    </p>
                    </div>
            </div>
            <div className="about--container-3">
                <div> 
                    <h1>Design Process</h1>
                    <p>
                    My approach to design is continually evolving, shaped by ongoing learning and fresh experiences.
                    Rather than seeking quick fixes, I advocate for thorough analysis and creative exploration, drawing insights from diverse perspectives to arrive at innovative solutions.
                    </p>
                </div>
                <div className="about--designrow">
                    <div className="about--designcolumn">
                        <div className="column-14">
                            <h3>Define and Understand</h3>
                            <p>Understanding user needs, establish a clear understanding of the problem space 
                            and gathering relevant insights through research and analysis.</p>
                        </div>
                    </div>
                    <div class='about--designcolumn'>
                        <div className="column-23">
                            <h3>Ideate and Conceptualize</h3>
                            <p>Generating creative ideas and explore potential solutions through brainstorming, sketching, and prototyping.</p>
                        </div>
                    </div>
                </div>
                <div className="about--designrow">
                    <div className="about--designcolumn">
                        <div className="column-23">
                            <h3>Develop and Implement</h3>
                            <p>Translating prototypes into functional solutions through development and implementation.
                            Collaborate with designers, developers, and other stakeholders to ensure that the design vision is successfully brought to life.
                            </p>
                        </div>
                    </div>
                    <div class='about--designcolumn'>
                        <div className="column-14">
                            <h3>Test and Iterate</h3>
                            <p>Gather feedback from users, analyze metrics, and iterate on the design based on insights gathered.
                            Ensure that the final product evolves to meet changing user needs and market demands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                

            <div className="about-container-4">
                <div className="about--endtext">
                    <p>Thanks for reaching the bottom of this page. If what you've uncovered sparks your interest, let's collaborate and turn ideas into reality together!</p>
                </div>
                <div className="about--socialicons-div">
                    <SocialIcon className="about--socialicons" network="linkedin" href="https://www.linkedin.com/in/anil-tekuri/" target="_blank"/>
                    <SocialIcon className="about--socialicons" network="github" href="https://github.com/SaiAnilTekuri?tab=repositories" target="_blank"/>
                    <SocialIcon className="about--socialicons" network="instagram" href="https://www.instagram.com/typically_a.t/" target="_blank"/>
                    <SocialIcon className="about--socialicons" network="mailto" href="mailto:saianiltekuri98@gmail.com" target="_blank"/>
                    
                </div>
            </div>
        </div>
    )
}

export default About