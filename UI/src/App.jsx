import React from "react";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div className="bg-blue-400 flex flex-col justify-center items-center p-6  min-h-screen">
      <h1 className="text-4xl font-extrabold text-white">Task Manager</h1>
      <TaskForm />
    </div>
  );
};

export default App;
