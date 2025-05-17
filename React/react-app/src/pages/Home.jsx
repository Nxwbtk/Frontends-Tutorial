export default function Home() {
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
    </div>
  );
}
