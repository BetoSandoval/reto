import { useState } from "react";
import useRecuests from "../hooks/useRequests";

export default function DragDrop() {

  const [file, setFile] = useState(null);
  const post = useRecuests(file);

  //sube la foto
  const handleChange = (e) => {
    const pictureData = e.target.files[0];
    setFile(pictureData);
  };


  return (

    <>
      { post.actorData === null ?
        // Renderiza drag and drop
        <div>
          <input type="file" onChange={handleChange} />
          <button onClick={post.upImage}>Search</button>
        </div>
      :
        // Renderiza el JSON
         <h1>{JSON.stringify(post.actorData)}</h1>
      }
    </>

    


  );
}
