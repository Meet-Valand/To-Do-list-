import { useState, useEffect, useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { CSSTransition } from "react-transition-group";
import { TiPinOutline } from "react-icons/ti";
import "./AppHeader.css"; // Import the CSS for animations

function Header({ onAddImpTask, onAddTask }) {
  const [inProp, setInProp] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Input state
  const nodeRef = useRef(null);

  // Trigger the animation on component mount
  useEffect(() => {
    setInProp(true);
  }, []);

  const handleImpIconClick = () => {
    onAddImpTask(inputValue);
    setInputValue(""); // Clear the input after adding the task
  };

  const handleAddTask = () => {
    onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <CSSTransition
      in={inProp}
      timeout={3000}
      classNames="bounce"
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} style={styles.AddTaskDiv} className="hover-effect">
        <input
          style={styles.AddTaskInput}
          placeholder="Add Your Task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update state when typing
        />
        <button
          style={styles.AddIcon}
          className="addIcon"
          onClick={handleAddTask}
        >
          <IoIosAdd />
        </button>
        <button
          className="impIcon"
          style={styles.ImpIcon}
          onClick={handleImpIconClick}
        >
          <TiPinOutline />
        </button>
      </div>
    </CSSTransition>
  );
}

const styles = {
  AddTaskDiv: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: "40px",
    left: "260px",
    alignItems: "center",
    height: "15vh",
    width: "60vw",
    border: "2px solid #ced4da",
    borderRadius: "26px",
    backgroundColor: "#495057",
    cursor: "pointer",
    color: "#e9ecef",
    "@media (max-width: 1200px)": {
      width: "70vw",
      left: "200px",
    },
    "@media (max-width: 768px)": {
      width: "80vw",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  AddTaskInput: {
    width: "36vw",
    height: "6vh",
    textAlign: "center",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "1.5px solid #ced4da",
    backgroundColor: "#495057",
    outline: "none",
    transition: "border-bottom 0.3s ease",
    "@media (max-width: 768px)": {
      width: "50vw",
    },
  },
  AddIcon: {
    fontSize: "2.1rem",
    color: "#ffc107",
    backgroundColor: "none",
    cursor: "pointer",
    marginLeft: "20px",
    borderRadius: "30px",
  },
  ImpIcon: {
    fontSize: "1.7rem",
    color: "#ffc107",
    backgroundColor: "none",
    cursor: "pointer",
    marginLeft: "20px",
    borderRadius: "30px",
  },
};

export default Header;
