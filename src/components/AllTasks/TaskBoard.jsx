import SearchTask from "./SearchTask";
import TaskAcetion from "./TaskAcetion";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        {/* <!-- Search Box Ends --> */}

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAcetion />
          <TaskList />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
