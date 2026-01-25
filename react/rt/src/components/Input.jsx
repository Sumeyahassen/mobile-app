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
  };
  return (
    <div className="">
      <div className=" flex justify-center items-center pt-10 gap-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add To Day Task"
          className="border-2 py-3 rounded-sm border-amber-700  w-1/3 placeholder:text-center"
        />
        <button
          className="bg-green-500 text-white px-16 py-3 rounded-lg rounded-br-sm"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <Edit tasks={Task} />
    </div>
  );
}

export default Input;
