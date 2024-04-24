import React from "react";


function MiniCard (props) {
    return (
        <div className="minicard--div">
            <div className="minicard--imagediv">
                <img className="minicard--image" src={require(`../images/${props.coverImg}`)} alt="test" />
            </div>
            <h1>{props.project_name}</h1>
            <p className="minicard--description">{props.description}</p>
            <p><i>{props.tools}</i></p>

        </div>
    )
}

export default MiniCard