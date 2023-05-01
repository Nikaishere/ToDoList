import React, { useState } from "react";
//import './Form.css';
//import { Button } from "@material-tailwind/react";

const Form = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Form*/}
      <div className="form-container">
        <input
          value={newTask}
          onChange={event => setNewTask(event.target.value)}
          type="text"
          alt="insert task"
          placeholder="Add wish..."
        ></input>
      </div>

      <br />
      <button onClick={addTask} className="btn-add">
        Add wish
      </button>
      <br />
    </>
  );
};

export default Form;
