import { useState } from "react";
import DragDrop from "./components/DragDrop";


const App = () => {

  const [file, setFile] = useState();

  return (
    <div className="App">
      <input type="file"/>
    </div>
  );
}

export default App;

