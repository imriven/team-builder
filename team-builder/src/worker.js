import React from "react";

const Worker = ({worker, onEdit}) => {
    const {name, email, role} = worker
    return (
        <div>
          <p> {name} {email} ({role}) <button onClick={() => onEdit(worker)}>Edit</button></p>
         
        </div>
    )
}


export default Worker