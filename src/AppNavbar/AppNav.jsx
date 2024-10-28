import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons for the theme toggle

function Nav() {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Toggle for dark/light mode

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const isPM = hours >= 12;
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const period = isPM ? "pm" : "am";

      const day = date.getDate();
      const months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = months[date.getMonth()];

      const ordinalDay = (day) => {
        if (day > 3 && day < 21) return `${day}th`;
        switch (day % 10) {
          case 1:
            return `${day}st`;
          case 2:
            return `${day}nd`;
          case 3:
            return `${day}rd`;
          default:
            return `${day}th`;
        }
      };

      const formattedTime = `${formattedHours}:${formattedMinutes}${period}, ${ordinalDay(
        day
      )} ${month}`;
      setCurrentDateTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeStyles = isDarkTheme ? darkTheme : lightTheme;

  return (
    <nav style={{ ...styles.navbar, ...themeStyles.navbar }}>
      <div style={styles.logo} className="hover-effect">
        Plan Your Day
      </div>
      <div style={styles.rightSection}>
        <span
          onClick={toggleTheme}
          style={styles.icon}
          className="hover-effect"
        >
          {isDarkTheme ? <FaSun size={24} /> : <FaMoon size={24} />}
        </span>
        <ul style={styles.navTime} className="hover-effect">
          <li>{currentDateTime}</li>
        </ul>
      </div>
    </nav>
  );
}

const darkTheme = {
  navbar: {
    backgroundColor: "#343a40",
    color: "#F5F5F5",
  },
};

const lightTheme = {
  navbar: {
    backgroundColor: "beige",
    color: "#0A1F44",
  },
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    height: "10vh",
    color: "#f8f9fa",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#ffc107",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  navTime: {
    listStyle: "none",
    margin: 0,
    color: "#D4AF37",
    cursor: "pointer",
  },
  icon: {
    cursor: "pointer",
    color: "#f8f9fa",
    marginRight: "1vw",
  },
};

export default Nav;
