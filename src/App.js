import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
