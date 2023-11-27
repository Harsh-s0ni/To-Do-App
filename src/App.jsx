import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (e) => {
    if (task === "" || (task === " " && description === "")) {
      alert("Please enter a task");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    setTaskList([...taskList, { task, description }]);
    setTask("");
    setDescription("");
  };

  const deleteHandler = (key) => {
    const copyTaskList = [...taskList];
    copyTaskList.splice(key, 1);
    setTaskList(copyTaskList);
  };

  return (
    <>
      <div className="text-white">
        <div>
          <h1 className="text-center text-5xl text-white mt-5">To Do App</h1>
        </div>
        <div className="p-5 mt-5">
          <form className="bg-slate-800 p-4 flex gap-10 items-center justify-center rounded-lg ">
            <label className="text-3xl flex gap-5 -ml-40 max-[1000px]:-ml-0 max-[1000px]:text-xl">
              Task
              <input
                type="text"
                className="rounded text-black max-[1000px]:w-36"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </label>
            <label className="text-3xl flex gap-5 max-[1000px]:text-xl">
              Description
              <input
                type="text"
                className="rounded text-black max-[1000px]:w-36"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="py-2 px-4 bg-cyan-400 font-semibold text-xl text-black rounded flex max-[1000px]:text-base"
              onClick={(e) => addTaskHandler(e)}>
              Add Task
            </button>
          </form>
        </div>
        <div className="p-5 rounded">
          <div className="bg-slate-800 flex flex-col gap-3 p-3 rounded-lg">
            {taskList.length > 0 ? (
              taskList.map((item, index) => {
                return (
                  <div key={index} className="">
                    <div className="flex gap-10 p-6 items-center justify-center bg-slate-900 rounded-xl">
                      <div className="flex justify-between w-2/3 items-center">
                        <h1 className="text-3xl">{item.task}</h1>
                        <h1 className="text-xl w-2/3 text-end">
                          {item.description}
                        </h1>
                      </div>
                      <button
                        className="flex bg-red-600 py-1 px-2 rounded text-lg"
                        onClick={() => deleteHandler(index)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-2xl">
                No tasks available, Please create a task.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
