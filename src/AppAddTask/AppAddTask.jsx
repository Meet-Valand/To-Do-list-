import { IoIosAdd } from "react-icons/io";

function AppAddTask({ addTasks, setAddTasks }) {
  console.log("AppAddTask rendered with addTasks:", addTasks);
  console.log("setAddTasks is a function:", typeof setAddTasks === "function");

  const handleDone = (index) => {
    console.log("handleDone called with index:", index);
    if (typeof setAddTasks !== "function") {
      console.error("setAddTasks is not a function");
      return;
    }
    const updatedTasks = addTasks.filter((_, i) => i !== index);
    setAddTasks(updatedTasks);
  };

  return (
    <div className="AddTaskSection" style={styles.AddTaskSection}>
      <h2 style={styles.SectionHeading}>Daily Tasks</h2>
      <div style={styles.TaskList}>
        {addTasks.map((task, index) => (
          <div
            key={index}
            style={styles.AddTaskContainer}
            className="hover-effect"
          >
            <div style={styles.AddTaskContent}>
              <p style={styles.TaskText}>{task}</p>
              <button
                style={styles.DoneButton}
                onClick={() => handleDone(index)}
              >
                Done
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  AddTaskSection: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "10px",
  },

  SectionHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#ffc107",
    textAlign: "center",
    position: "relative",
    top: "-20px",
  },
  TaskList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",

    flex: 1,
  },
  AddTaskContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid #868e96",
    borderRadius: "17px",
    minWidth: "300px",
    maxWidth: "550px",
    backgroundColor: "#495057",
    padding: "15px",
    boxSizing: "border-box",
    top: "1px",
    left: "35px",
    height: "63px",
    marginBottom: "25px",
  },
  AddTaskContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    width: "100%",
  },
  TaskText: {
    margin: 0,
    flexGrow: 1,
    wordBreak: "break-word",
    textAlign: "center",
  },
  DoneButton: {
    padding: "5px 10px",
    borderRadius: "15px",
    border: "none",
    backgroundColor: "#212529",
    color: "#ced4da",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};

export default AppAddTask;
