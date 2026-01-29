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
  const [tasks, setTasks] = useState(["learn react"]);
  const [newTask, setNewTask] = useState("");
  const [completeTask,setComplated]=useState([])
  const [chacked,setChaked]=useState([])
  const [unchacked,setUnchacked]=useState([])


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
// delete task comteroler
  const deleteTask = (index) => {
    const updateTask=tasks.filter((_,deletTask)=>deletTask!==index)
    setTasks(updateTask)

  };
  // complated task controler
  const complateed=()=>{

  }

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
          >
         <IoIosAddCircle
         onClick={addTask}
         className="text-green-800 "
        size={50}
         />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        {/*  */}
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-3">
            <p className="">{task}</p>

              <FaXmark
              onClick={() => deleteTask(index)} className="text-red-600 cursor-pointer"
              size={50}/>


              <TiTick
              className="text-green-500 cursor-pointer "
              size={60}/>
              <FaEdit
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
