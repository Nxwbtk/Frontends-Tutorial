import React from "react";
export default function Home() {
  const [id, setId] = React.useState(0);
  const handleTodoPage = () => {
    window.location.href = "/normal-api";
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={handleTodoPage}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-700 transition duration-300"
      >
        Normal API
      </button>
      <button
        onClick={() => (window.location.href = "/swr")}
        className="bg-green-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-green-700 transition duration-300 mt-4"
      >
        SWR
      </button>
      <button
        onClick={() => (window.location.href = "/with-parent")}
        className="bg-red-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-red-700 transition duration-300 mt-4"
      >
        With Parent
      </button>
      <button
        onClick={() => (window.location.href = "/state-learning")}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-yellow-700 transition duration-300 mt-4"
      >
        State Learning
      </button>
      <button
        onClick={() => (window.location.href = "/with-ui-components")}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-purple-700 transition duration-300 mt-4"
      >
        With UI Component
      </button>
      <input
        type="number"
        id="id"
        className="border border-gray-300 rounded px-4 py-2 mt-4"
        placeholder="Enter your id"
        onChange={(e) => setId(e.target.value)}
      />
      <button
        onClick={() => (window.location.href = `/with-id/${id}`)}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-700 transition duration-300 mt-4"
      >
        Go to id {`${id}`}
      </button>
    </div>
  );
}
