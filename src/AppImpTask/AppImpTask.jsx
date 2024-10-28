import { TiPinOutline } from "react-icons/ti";

function AppImpTask({ impTasks, setImpTasks }) {
  console.log("AppImpTask rendered with impTasks:", impTasks);
  console.log("setImpTasks is a function:", typeof setImpTasks === "function");

  const handleDone = (index) => {
    console.log("handleDone called with index for imp icon:", index);
    if (typeof setImpTasks !== "function") {
      console.error("setImpTasks is not a function");
      return;
    }
    const updatedImpTasks = impTasks.filter((_, i) => i !== index);
    setImpTasks(updatedImpTasks);
  };

  return (
    <div className="ImpTaskSection" style={styles.ImpTaskSection}>
      <h2 style={styles.SectionHeading}>IMP Tasks</h2>
      <div style={styles.TaskList}>
        {impTasks.map((task, index) => (
          <div
            key={index}
            style={styles.ImpTaskContainer}
            className="hover-effect"
          >
            <div style={styles.TaskContent}>
              <div style={styles.ImpIcon}>
                <TiPinOutline />
              </div>
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
  ImpTaskSection: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "10px",
  },
  SectionHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    position: "relative",
    top: "-20px",

    color: "#ffc107",
    textAlign: "center",
  },
  TaskList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto",
    flex: 1,
  },
  ImpTaskContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid #868e96",
    borderRadius: "17px",
    minWidth: "300px",
    maxWidth: "550px",
    backgroundColor: "#6C757D",
    padding: "15px",
    boxSizing: "border-box",
    marginBottom: "25px",
    height: "63px",
    left: "35px",
  },
  TaskContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    width: "100%",
  },
  ImpIcon: {
    fontSize: "1.2rem",
    color: "#ffc107",
    cursor: "pointer",
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

export default AppImpTask;
