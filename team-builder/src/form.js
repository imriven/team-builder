import React, { useState, useEffect } from "react";

const Form = (props) => {

    const [formValues, setFormValues] = useState({name:"", email:"", role:""})

  const changeField = event => {
      event.persist()
    setFormValues(existing => ({...existing, [event.target.id]: event.target.value}));
  };

  const submitForm = (event, formValues) => {
    event.preventDefault()
    props.addWorker(formValues.name, formValues.email, formValues.role)
    setFormValues({name:"", email:"", role:""})
  }

  useEffect(() => {
    setFormValues(props.formValues)
  }, [props.formValues] )

  return (
    <div>
      <form onSubmit={(event) => submitForm(event,formValues)}>
        <label>
          Name:
          <input
            id="name"
            type="text"
            onChange={event => {
              changeField(event);
            }}
            value={formValues.name}
          />
        </label>
        <label>
          Email:
          <input
            id="email"
            type="text"
            onChange={event => {
              changeField(event);
            }}
            value={formValues.email}
          />
        </label>
        <label>
          Role:
          <input
            id="role"
            type="text"
            onChange={event => {
              changeField(event);
            }}
            value={formValues.role}
          />
        </label>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Form;
