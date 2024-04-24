import React from "react";
import ProjectCard from "./ProjectCard";
import MiniCard from "./MiniCard";
import data from "../project-data";
import miniprojectdata from "../mini-project-data";
import { SocialIcon } from 'react-social-icons'

function Work() {

    const projectData = data.map(item => {
        return <ProjectCard key= {item.id} {...item}/>
      })
    
    const miniProjectData = miniprojectdata.map(entry => {
        return <MiniCard key={entry.id} {...entry} />
    })
    
    return (
        <div>
            <h1>My Work</h1>
            {projectData}
            <h1>My Projects</h1>
            <div className="work--griddiv">
                {miniProjectData}
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

export default Work