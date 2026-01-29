// Functionality:
// Add new todo items
// Mark as complete/incomplete
// Delete items
// Show total/completed count
// Filter (all/active/completed)
import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState(["learn react"]);
  const [newTask, setNewTask] = useState("");

  // control add tasks
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks,newTask]);
      setNewTask("");
    }
    else{
      alert("enter task")
    }
  };

  const deleteTask = (index) => {
    const updateTask=tasks.filter((_,deletTask)=>deletTask!==index)
    setTasks(updateTask)

  };

  return (
    <div>
      <div className="flex gap-3 justify-center items-center py-10">
        <input
          className="bg-gray-200 px-6 py-3 w-2xl rounded-lg"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {/* Add new todo items */}
        <button
          onClick={addTask}
          className="bg-green-800 text-white px-6 py-3 rounded-lg border-black"
        >
          Add Task
        </button>
      </div>
      <div className="">
        {/*  */}
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-3">
            <p className="">{task}</p>
            <button onClick={() => deleteTask(index)} className="text-red-600">
              Delete
            </button>
          </div>
        ))}
        {/* Mark as complete/incomplete*/}
      </div>
    </div>
  );
}

export default Todo;
