import Ant from "./components/Ant";
import Tailwind from "./components/Tailwind";

function App() {

  let types = ["primary", "default", "dashed", "text", "link"];
  return (
    <div className="App">
      <Ant types={types} salam="samir" color="red" />

      <Tailwind/>
    </div>
  );
}

export default App;
