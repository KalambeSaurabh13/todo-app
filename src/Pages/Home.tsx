
function Home() {
  return (
    <div className="  p-4">
     
        <div className="bg-white drop-shadow-md rounded flex p-2 mb-4 items-center">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <input
            type="text"
            id="hero-field"
            name="hero-field"
            className="w-full  rounded  text-base outline-none text-black  px-3  transition-colors duration-200 ease-in-out"
            placeholder="Add a new task"
          />

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add
          </button>
        </div>

        <div className="bg-white drop-shadow-md rounded p-4 min-h-[calc(100vh-180px)]">
        </div>
   
    </div>
  );
}

export default Home;
