import { useState } from "react";
import DragDrop from "./components/DragDrop";


const App = () => {

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const pictureData = (e.target).files[0];
    setFile(pictureData);
  }

  console.log(file);

  return (
    <div className="App">
      <input type="file" onChange={handleChange}/>
      <input text='text'/>
    </div>
  );
}

export default App;

