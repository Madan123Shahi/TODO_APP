import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { createTask } from "./../redux/tasks/taskSlice";

const TaskForm = () => {
  const { title, setTitle } = useState("");
  const { description, setDescription } = useState("");
  const dispatch = useDispatch();

  return (
    <form className="max-w-md mx-auto mt-10 p-6 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-5">Create a New Task</h2>
      <div className="mb-4">
        <label className="block" htmlFor="title">
          Title
        </label>
        <input type="text" />
      </div>
      <div>
        <label>Description</label>
        <textarea />
      </div>
    </form>
  );
};

export default TaskForm;
