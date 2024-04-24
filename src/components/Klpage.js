import React from "react";
import klimage1 from "../images/kl-1.PNG"
import klimage2 from "../images/kl-2.PNG"

function Klpage() {
    return (
        <div className="wipropage--maindiv">
            <div className="wipropage--headingdiv">
                <h1>VR SCADA Application</h1>
                <h3>Virtual Reality based remote monitoring application for Industrial Equipment</h3>
                <hr className="wipropage--horizontalline"/>
            </div>
            <div className="wipropage--descriptiondiv">
                <div className="wipropage--overview">
                    <h2>Overview</h2>
                    <p>
                        At Knowledge Lens, I worked with a team of five people tasked with designing a SCADA application for industrial machinery equipment monitoring using augmented reality (AR) and virtual reality (VR) technologies.
                        My role involved researching and prototyping innovative ways to visualize real-time data from industrial control systems and provide intuitive, immersive interfaces for monitoring and controlling critical machinery.
                        I have developed interactive 3D models of industrial pumping equipments, overlaid sensor data and alerts, that gave operators a powerful, which provided a engaging way to perform maintenance leading to increased safety and efficiency.
                    </p>
                    <p>Technologies and Tools Utilized:</p>
                    <ul>
                        <li><b>Unity 3D</b> for application development</li>
                        <li><b>Blender</b> for 3D model design</li>
                        <li><b>Autodesk</b> for 3D modeling and animation</li>
                        <li><b>Vuforia</b> for AR content creation</li>

                    </ul>
                </div>
                <div className="wipropage--roledetails">
                    <div>
                        <h4>Role</h4>
                        <p>AR/VR Development Intern</p>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <p>Knowledge Lens</p>
                    </div>
                    <div>
                        <h4>Timeline</h4>
                        <p>May - June 2019</p>
                    </div>
                    
                </div>
            </div>
            <div className="wipropage--imageheadingdiv">
                <h1>Project Gallery</h1>
            </div>
            <div className="wipropage--imagediv">
                <div className="wipropage--image1div">
                    <img  className="klimage1" src={klimage1} alt="klprojectimage1" />
                </div> 
                <div className="wipropage--image2div">
                    <img  className="klimage2" src={klimage2} alt="klprojectimage2" />
                </div> 
            </div>

        </div>
    )
}

export default Klpage