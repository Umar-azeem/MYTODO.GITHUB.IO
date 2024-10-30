import Add from "./Addd.jsx";
import { useStore } from "./data.js";

function App() {
  const { addValue, setInputData, inputData,  } = useStore();

  const handleGetinputvalue = (e) => {
    const { name, value } = e.target; // age
    setInputData(name, value);
  };

  return (
    <>
      <section className="flex flex-col items-center  bg-black w-screen h-screen">
        <div className="flex justify-between w-[700px] text-white mt-4 mb-4">
          <div className="flex justify-between w-[700px] text-white mt-8 ">
            <input
              name="name"
              value={inputData.name}
              onChange={handleGetinputvalue}
              type="text"
              placeholder="name"
              className="bg-gray-800 text-sm rounded-md w-40 h-10 p-4"
            />
            <input
              name="age"
              value={inputData.age}
              onChange={handleGetinputvalue}
              type="number"
              className="bg-gray-800 text-sm ml-4 rounded-md w-32 h-10 p-4"
            />
            <input
              name="city"
              value={inputData.city}
              onChange={handleGetinputvalue}
              type="text"
              placeholder="city"
              className="bg-gray-800 text-sm ml-4 rounded-md w-32 h-10 p-4"
            />
            <input
              name="code"
              value={inputData.code}
              onChange={handleGetinputvalue}
              type="number"
              placeholder="code"
              className="bg-gray-800 ml-5 text-sm w-28 rounded-md h-10 p-4"
            />
          </div>
          <button
            onClick={addValue}
            className="px-2 py-2 bg-white rounded-full m-8 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="blue"
              className="hover:scale-110 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-center w-[700px] mt-4 mb-4">
          <Add />
        </div>
      </section>
    </>
  );
}

export default App;
