import React from "react";
import { Link } from 'react-router-dom'


function ProjectCard (props) {
    return (
        <div className="projectcard--div">
            <div className="projectcard--imgdiv">
                <img src={require(`../images/${props.coverImg}`)} alt="projectimg" className="projectcard--image"/>
            </div>
            <div className="projectcard--descriptiondiv">
                <h2>{props.company_title}</h2>
                <p>{props.project_name}</p>
                {props.company_title!=="" && <Link to={`/${props.page_title}`}>Read More...</Link>}
                

            </div>
            <div></div>

        </div>
    )
}

export default ProjectCard