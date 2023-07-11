import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className=" rounded-[30px] bg-[#000000] flex h-screen">
      <Sidebar />
      <Body/>
    </div>
  );
}

export default App;
