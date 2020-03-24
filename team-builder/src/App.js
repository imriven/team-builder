import React, {useState} from 'react';
import './App.css';
import Worker from "./worker"
import Form from "./form.js"


function App() {

const [workers, setWorkers] = useState([{
 
  name:"Tom", email:"TomJane@yahoo.com", role:"Hacker"},
  {name:"John", email:"JohnDoe@gmail.com", role:"Conman"},
  {name:"Riley", email:"RileyHuey@outlook.com", role:"Cartoonist"}]);

  const [formValues, setFormValues] = useState({name:"", email:"", role:""})

const addWorker = (name, email, role) => {
  setWorkers(existing => [...existing, {
    name: name,
    email: email,
    role: role
  }])
}

const editWorker = worker => {
setFormValues(worker)
}


  return (
    <div>
      {workers.map(worker => (
        <Worker worker={worker} onEdit={editWorker}/>

      ))}
      <Form addWorker={addWorker} formValues={formValues}/>
    </div>
  );
}

export default App;
