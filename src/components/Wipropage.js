import React from "react";

function Wipropage() {
    return (
        <div className="wipropage--maindiv">
            <div className="wipropage--headingdiv">
                <h1>Network IQ Statistics</h1>
                <h3>End-to-end view of network performance across multiple technologies and vendors</h3>
                <hr className="wipropage--horizontalline"/>
            </div>
            <div className="wipropage--descriptiondiv">
                <div className="wipropage--overview">
                    <h4>Overview</h4>
                    <p>
                        At Wipro, I worked closely with client company Ericsson on the automating <b>Ericsson Network IQ Statistics (ENIQ)</b>.
                        It is a network performance management application for multi-vendor and multi-technology environments.
                        I played a pivotal role in orchestrating Extract, Transform, Load (ETL) operations and  development of Continuous Integration/Continuous Deployment (CI/CD) pipelines tailored specifically for microservices architecture, streamlining deployment workflows.
                        My responsibilities extended to crafting robust staging pipelines, optimizing the testing and validation phases of software development.
                    </p>
                    <p>Technologies and Tools Utilized:</p>
                    <ul>
                        <li><b>Jenkins</b> for Continuous Integration/Continuous Deployment (CI/CD) pipelines.</li>
                        <li><b>Docker</b> and <b>Kubernetes</b> for containerization and orchestration of microservices.</li>
                        <li><b>Helm</b> for managing and deploying applications with Helm charts.</li>
                        <li><b>JFrog</b> for storing artifacts</li>

                    </ul>
                </div>
                <div className="wipropage--roledetails">
                    <div>
                        <h4>Role</h4>
                        <p>Devops Engineer</p>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <p>Wipro Limited</p>
                    </div>
                    <div>
                        <h4>Timeline</h4>
                        <p>Sep 2020 - Nov 2022</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Wipropage