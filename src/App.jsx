import { useState } from "react";
import AppNav from "./AppNavbar/AppNav";
import Header from "./AppHeader/AppHeader";
import AppImpTask from "./AppImpTask/AppImpTask";
import AppAddTask from "./AppAddTask/AppAddTask";
import "./index.css";

function App() {
  const [impTasks, setImpTasks] = useState([]);
  const [addTasks, setAddTasks] = useState([]);
  const handleAddImpTask = (newTaskText) => {
    if (newTaskText.trim()) {
      setImpTasks((prevTasks) => {
        if (prevTasks.length >= 4) {
          alert(
            "Please finish your unfinished important tasks to add new ones."
          );
          return prevTasks;
        }
        return [...prevTasks, newTaskText];
      });
    } else {
      alert("Please enter a task before adding.");
    }
  };

  const handleAddTask = (newTaskText) => {
    if (newTaskText.trim()) {
      setAddTasks((prevTasks) => {
        if (prevTasks.length >= 4) {
          alert("Please finish your unfinished daily tasks to add new ones.");
          return prevTasks;
        }
        return [...prevTasks, newTaskText];
      });
    } else {
      alert("Please enter a task before adding.");
    }
  };

  return (
    <div className="App" style={styles.mainContainer}>
      <AppNav />
      <div style={styles.contentContainer}>
        <Header onAddImpTask={handleAddImpTask} onAddTask={handleAddTask} />
        <div style={styles.tasksContainer}>
          <div style={styles.impTaskWrapper}>
            <AppImpTask impTasks={impTasks} setImpTasks={setImpTasks} />
          </div>
          <div style={styles.addTaskWrapper}>
            <AppAddTask addTasks={addTasks} setAddTasks={setAddTasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  mainContainer: {
    backgroundColor: "#212529",
    minHeight: "100vh",
    width: "100vw",
    color: "#f8f9fa",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },

  tasksContainer: {
    display: "flex",
    overflow: "auto",
    position: "relative",
    top: "80px",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    },
  },
  impTaskWrapper: {
    flex: 1,
  },
  addTaskWrapper: {
    flex: 1,
  },
};

export default App;
