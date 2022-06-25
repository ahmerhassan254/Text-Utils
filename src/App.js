import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1c1c1c";
      showAlert("Dark Mode is enabled!!!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";

      showAlert("Light Mode is enabled !!!", "success");
    }
  };
  return (
    <div className="App">
      <Router>
        <Navbar
          title="TextUtils"
          tab1="Home"
          tab2="About Us"
          mode={mode}
          toogleMode={toogleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter your text here for analyzing"
                  showAlert={showAlert}
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
