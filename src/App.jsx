import logo from "./assets/no-projects.png";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <main className="h-screen my-8">
     <Sidebar/>
     <NewProject/>
    </main>
  );
}

export default App;
