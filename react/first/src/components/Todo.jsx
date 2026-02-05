// Functionality:
// Add new todo items
// Mark as complete/incomplete
// Delete items
// Show total/completed count
// Filter (all/active/completed)
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [edit, setEdit] = useState(null);
  const [completeTask, setComplated] = useState([]);
  const [chacked, setChaked] = useState([]);
  const [unchacked, setUnchacked] = useState([]);

  // control add tasks
  const addTask = () => {
    if (newTask.trim() === "") {
      alert("No task  pls add task")
      return;
    }
    // editing handeler
    if (edit !== null) {
      const updatTasks = [...tasks];
      updatTasks[edit] = newTask;
      setTasks(updatTasks);
      setEdit(null);
    }
    // new ask handeler
    else {
      setTasks([...tasks, newTask]);
    }
    setNewTask("");
  };
  // delete task comteroler
  const deleteTask = (index) => {
    const updateTask = tasks.filter((_, deletTask) => deletTask !== index);
    setTasks(updateTask);
  };
  // edit task
  const editTask = (index) => {
    setEdit(index);
    setNewTask(tasks[index]);
    document.getElementById("input").focus();
  };
  // complated task controler
  const complateed = (index) => {
    
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10">
      <div className="flex gap-3 ">
        <input
          placeholder="Enter today task"
          id="input"
          className="bg-gray-200 px-6 py-3 w-2xl rounded-lg placeholder:text-center placeholder:text-gray-500"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {/* Add new todo items */}
        <button>
          <IoIosAddCircle
            onClick={addTask}
            className={edit!==null?"text-yellow-800":"text-green-800 "}
            size={50}
          />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center bg-amber-100 w-3xl h-auto rounded-tl-2xl rounded-br-2xl text-center">
        {/*  */}
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-3">
            <p className="">{task}</p>

            <FaXmark
              onClick={() => deleteTask(index)}
              className="text-red-600 cursor-pointer"
              size={50}
            />

            <TiTick className="text-green-500 cursor-pointer " size={60} />
            <FaEdit
              onClick={() => editTask(index)}
              className="text-yellow-500 cursor-pointer"
              size={45}
            />
          </div>
        ))}
        {/* Mark as complete/incomplete*/}
      </div>
    </div>
  );
}

export default Todo;
