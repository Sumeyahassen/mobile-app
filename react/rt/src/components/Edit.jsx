import React from "react";
import Input from "./Input";
function Edit({ tasks ,setTask}) //to tacke the  use state hook as propes
{

  const deleteTask = (index) => {
    const newTasks = tasks.filter((__, i) => i !== index);
    setTask(newTasks);
  };
  const editTask = (index,newTask) => {
    if(newTask.trim()!== ""){
      const updatedTasks=setTask([...tasks]);
      updatedTasks[index]=newTask;
      setTask(updatedTasks);
    }
    else{
      alert("Please enter a task before editing.");
    }

  };
  return (
    <div className="flex flex-col justify-center  items-center py-10 ">
      {tasks.map((task, index) => (
        <div className="flex justify-center items-center gap-4 text-white py-5 font-bold rounded-bl-lg rounded-tr-lg px-10 bg-amber-300 h-auto w-auto scroll-auto"
        key={index}>
          <div className="text-black" key={index}>
            {task}
          </div>
          <button
            className="bg-yellow-500 px-8 py-3 rounded-lg font-bold "
            onClick={editTask}
          >
            E
          </button>
          <button
            onClick={() => deleteTask(index)}
            className="bg-red-500 px-8 py-3 rounded-lg font-bold"
          >
            D
          </button>
          <button
            onClick={editTask}
            className="bg-green-500 px-8 py-3 rounded-lg font-bold"
          >
            Y
          </button>
        </div>
      ))}
    </div>
  );
}

export default Edit;
