import { useState } from "react";
import { useStore } from "./data";

function Add() {
  const { setsaveData, saveData, deleteValue } = useStore();
  const [editValue, setEidtValue] = useState(-1);
  const [updateValue, setUpdateValue] = useState({
    name: "",
    age: 0,
    city: "",
    code: 0,
  });

  const handleGetinputvalue = (e) => {
    const { name, value } = e.target; // age
    setUpdateValue({ ...updateValue, [name]: value });
  };

  const updateArrayValue = () => {
    const updateArray = saveData.map((item, index) => {
      if (index === editValue) {
        item = updateValue;
        return item;
      }
      return item;
    });
    setEidtValue(-1);
    setsaveData(updateArray);
  };

  console.log("editValue:", editValue);

  return (
    <>
      {saveData.map((item, index) => (
        <div
          key={index}
          className="flex items-center bg-gray-800 w-full border hover:border-blue-700 h-28 mb-4 rounded-lg"
        >
          {" "}
          <div className="flex justify-between w-full px-4">
            {editValue === index ? (
              <div className="flex justify-between w-[700px] text-white mt-8 ">
                <input
                  name="name"
                  
                  onChange={handleGetinputvalue}
                  type="text"
                  placeholder="name"
                  className="bg-gray-800 text-sm rounded-md w-40 h-10 p-4"
                />
                <input
                  name="age"
                  
                  onChange={handleGetinputvalue}
                  type="number"
                  className="bg-gray-800 text-sm ml-4 rounded-md w-32 h-10 p-4"
                />
                <input
                  name="city"
                  onChange={handleGetinputvalue}
                  type="text"
                  placeholder="city"
                  className="bg-gray-800 text-sm ml-4 rounded-md w-32 h-10 p-4"
                />
                <input
                  name="code"
                  onChange={handleGetinputvalue}
                  type="number"
                  placeholder="code"
                  className="bg-gray-800 ml-5 text-sm w-28 rounded-md h-10 p-4"
                />
              </div>
            ) : (
              <div className="flex justify-between w-full px-4">
                <p className="text-white font-bold mb-2 text-2xl">
                  {item.name || ""}
                </p>
                <p className="text-white font-bold mb-2 text-2xl">
                  {item.age || ""}
                </p>
                <p className="text-white font-bold mb-2 text-2xl">
                  {item.city || ""}
                </p>
                <p className="text-white font-bold mb-2 text-2xl">
                  {item.code || ""}
                </p>
              </div>
            )}
            <button onClick={updateArrayValue}>
              <svg
                className="ml-2 w-6 h-6 hover:scale-125"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="yellow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </button>
            k
            <button
              onClick={() => {
                setEidtValue(index);
                setUpdateValue(item);
              }}
            >
              <svg
                className="ml-2 w-6 h-6 hover:scale-125"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="pink"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button onClick={() => deleteValue(item.name)}>
              <svg
                className="ml-2 w-5 h-5 hover:scale-125"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="red"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Add;
