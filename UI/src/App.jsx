import React from "react";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-10">Task Manager</h1>
      <TaskForm />
    </div>
  );
};

export default App;
