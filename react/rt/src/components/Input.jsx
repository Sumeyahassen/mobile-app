import React, { useState } from "react";
import Edit from "./Edit";

function Input() {
  const [Task, setTask] = useState(["day one"]); // for total tasks
  const [newTask, setNewTask] = useState(""); // for the add button to clike add task

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask([...Task, newTask]);
      setNewTask("");
    }
    else{
      alert("Please enter a task before adding.");
    }
  };
  return (
    <div className=" pt-10">
      <h1>To Do List </h1>
      <div className=" flex justify-center items-center pt-10 gap-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add To Day Task"
          className="border-2 py-3 rounded-sm border-white  w-1/3 placeholder:text-center text-left px-3"
        />
        <button
          className="bg-green-500 text-white px-16 py-3 rounded-lg rounded-br-sm"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <Edit tasks={Task} setTask={setTask} />
    </div>
  );
}

export default Input;
