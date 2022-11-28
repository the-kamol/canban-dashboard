import "./App.css";

import { useSelector } from "react-redux";
import { SideBar } from "./pages/canban/SideBar";
import { ToolsColumn } from "./pages/canban/ToolsColumn";
import { MainHeader } from "./pages/canban/MainHeader";
import { MainTasks } from "./pages/canban/MainTasks";

function App() {
  const rows = useSelector((store) => store.canban.rows);
  return (
    <div className="App">
      <SideBar />
      <ToolsColumn />
      <div className="main">
        <MainHeader />
        <MainTasks data={rows} />
      </div>
    </div>
  );
}

export default App;
