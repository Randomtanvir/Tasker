import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAcetion from "./TaskAcetion";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    tittle: "Learn react js",
    description:
      "I want to Learn react such thani can treat it like my slave and make it do whatever i want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [isShowModal, setIsShowModal] = useState(false);

  const handelAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setIsShowModal(false);
  };

  return (
    <section className="mb-20" id="tasks">
      {isShowModal && <AddTaskModal saveTask={handelAddTask} />}
      <div className="container mx-auto">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAcetion onSmash={() => setIsShowModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
