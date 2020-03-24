import React from "react";

const Worker = props => {

    return (
        <div>
           <p> {props.workers.fname} <p>
           <p> {props.workers.lname} <p>
           <p> {props.workers.role} <p>
        </div>
    )
}


export default Worker