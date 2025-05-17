import { useState } from "react";

export default function StateLearning() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John Doe");
  const [realtimeName, setRealtimeName] = useState("John Doe");
  const handleChangename = (name) => {
    setName(name);
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      {count}
      <div className="flex flex-row gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-700 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-red-700 transition duration-300"
        >
          Decrement
        </button>
      </div>
      <h1 className="text-2xl font-bold">State Learning Real time change</h1>
      <div className="text-2xl font-bold">{realtimeName}</div>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          id="realtime-input-name"
          value={realtimeName}
          onChange={(e) => setRealtimeName(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
          placeholder="Enter your name"
        />
        <button
          onClick={() => setRealtimeName("")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-700 transition duration-300"
        >
          Clear Name
        </button>
      </div>
      <h1 className="text-2xl font-bold">State Learning Action time change</h1>
      <div className="text-2xl font-bold">{name}</div>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          id="input-name"
          className="border border-gray-300 rounded px-4 py-2"
          placeholder="Enter your name"
        />
        <button
          onClick={() => {
            const newName = document.getElementById("input-name").value;
            handleChangename(newName);
          }}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-700 transition duration-300"
        >
          Change Name
        </button>
      </div>
    </div>
  );
}
