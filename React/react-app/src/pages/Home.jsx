import React from "react";

export default function Home() {
  const [id, setId] = React.useState(0);

  const handleTodoPage = () => {
    window.location.href = "/normal-api";
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        React Learning Chapters
      </h1>

      {/* Chapter 1: API */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">
          📘 Chapter 1: API Handling
        </h2>
        <button
          onClick={handleTodoPage}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Normal API
        </button>
        <button
          onClick={() => (window.location.href = "/swr")}
          className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          SWR
        </button>
      </div>

      {/* Chapter 2: Component Communication */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-red-600">
          📕 Chapter 2: Component Communication
        </h2>
        <button
          onClick={() => (window.location.href = "/with-parent")}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          With Parent
        </button>
      </div>

      {/* Chapter 3: State Management */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-yellow-600">
          📙 Chapter 3: State Management
        </h2>
        <button
          onClick={() => (window.location.href = "/state-learning")}
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
        >
          State Learning
        </button>
      </div>

      {/* Chapter 4: UI Components */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          📗 Chapter 4: UI Components
        </h2>
        <button
          onClick={() => (window.location.href = "/with-ui-components")}
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          With UI Component
        </button>
      </div>

      {/* Chapter 5: Dynamic Routing with ID */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-600">
          📓 Chapter 5: Dynamic Routing
        </h2>
        <input
          type="number"
          id="id"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
          placeholder="Enter your id"
          onChange={(e) => setId(e.target.value)}
        />
        <button
          onClick={() => (window.location.href = `/with-id/${id}`)}
          className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Go to id {`${id}`}
        </button>
      </div>
    </div>
  );
}
