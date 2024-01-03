import "./App.css"
import { Outlet } from "react-router-dom";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
function App() {
  return (
    <div className="App">
      <div >
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
