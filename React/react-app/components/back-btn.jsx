export const BackBtn = () => {
  const handleTodoPage = () => {
    window.location.href = "/";
  };
  return (
    <button
      onClick={handleTodoPage}
      className="bg-gray-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-700 transition duration-300 mt-4"
    >
      Back
    </button>
  );
};
