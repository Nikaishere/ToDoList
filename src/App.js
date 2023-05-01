import React, { useState } from "react";
import "./App.css";
import { FaCheckSquare } from "react-icons/fa";
import Form from "./components/Form";

function App() {
  //prelisted tasks   //array of objects.
  //true for completed talk,false for not completed.
  const [toDo, setToDo] = useState([
    { id: 1, title: "Travel to Iceland", status: false },
    { id: 2, title: "Start working as a developer", status: false },
    { id: 3, title: "Avoid winter moving to a warm place", status: false }
  ]);
  // to save new task
  const [newTask, setNewTask] = useState("");

  //function to add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  //function to cross out task
  const CrossOut = id => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  return (
    <div className="App">
      <br /> <br />
      <h2>THINGS I WANT TO DO BEFORE I DIE</h2>
      <br />
      <br />
      <Form newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      {/* Display tasks*/}
      {toDo &&
        toDo
          //BONUS!! that doesnt work
          .sort((a, b) => a.title > b.title)
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="task">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>

                  <div onClick={e => CrossOut(task.id)} className="iconWrapper">
                    <span>
                      <FaCheckSquare />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default App;
