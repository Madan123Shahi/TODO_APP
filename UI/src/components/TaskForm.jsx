import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { createTask } from "./../redux/tasks/taskSlice";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch.createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mt-10 p-6 rounded-lg shadow-md bg-gray-100"
    >
      <h2 className="text-2xl font-bold mb-5 text-blue-500">
        Create a New Task
      </h2>
      <div className="mb-4">
        <label
          className="block text-lg text-blue-500 font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border-1 rounded w-full py-2 px-3 text-blue-500 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter Task Title"
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-lg text-blue-500 font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task description"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
