import "./App.css";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/signup";
import Welcome from "./components/welcomepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
