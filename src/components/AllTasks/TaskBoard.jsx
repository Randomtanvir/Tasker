import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAcetion from "./TaskAcetion";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NotFound from "./NotFound";

const TaskBoard = () => {
  // Default object
  const defaultTask = {
    id: crypto.randomUUID(),
    tittle: "Learn react js",
    description:
      "I want to Learn react such thani can treat it like my slave and make it do whatever i want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  // State
  const [tasks, setTasks] = useState([defaultTask]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // Handel Functions
  const handelAddEditTask = (newTask, isAdd) => {
    if (newTask.tittle === "") return;
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    handelCloseClick();
  };

  //Handel Function
  const handelEditTast = (task) => {
    setTaskToUpdate(task);
    setIsShowModal(true);
  };

  const handelCloseClick = () => {
    setIsShowModal(false);
    setTaskToUpdate(null);
  };
  const handelDeletTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
  };

  const handelAllDeleteTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  const handelFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTask = [...tasks];
    newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
    setTasks(newTask);
  };
  const handelSearchTask = (searchTurm) => {
    const filtered = tasks.filter((task) =>
      task.tittle.toLocaleLowerCase().includes(searchTurm.toLocaleLowerCase())
    );
    setTasks([...filtered]);
  };

  return (
    <section className="mb-20" id="tasks">
      {isShowModal && (
        <AddTaskModal
          saveTask={handelAddEditTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handelCloseClick}
        />
      )}
      <div className="container mx-auto">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handelSearchTask} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAcetion
            onSmash={() => setIsShowModal(true)}
            onDeleteAllTask={handelAllDeleteTask}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handelEditTast}
              onDelete={handelDeletTask}
              onFav={handelFavorite}
            />
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
