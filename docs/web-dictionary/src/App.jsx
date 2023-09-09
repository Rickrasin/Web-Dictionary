import "./styles/App.css";
import "./styles/GlobalStyle.css";
import "./styles/Variables.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="center-content">
      <Outlet />
    </div>
  );
}

export default App;
