import { Counter } from "./components/Counter";
import { Navbar } from "./Navbar";
import { User } from "./components/User/index";

function App() {
  return (
    <div className="App w-full h-screen bg-black">
      <div className="text-white p-6">
        <Navbar />
        <hr />
        <Counter />
        <br />
        <hr />
        <User />
      </div>
    </div>
  );
}

export default App;
