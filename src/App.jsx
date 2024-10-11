import AddTaskModal from "./components/AllTasks/AddTaskModal";
import TaskBoard from "./components/AllTasks/TaskBoard";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TaskBoard />
      <Footer />
    </>
  );
}

export default App;
