import { useState } from "react";

import axios from "axios";

export default function DragDrop() {

  const [file, setFile] = useState(null);
  const [actorData, setActorData] = useState(null);

  // Consumo de APIs
  const upImage = async (file) => {
    const data = new FormData();
    data.append("file", file);

    // Eniva foto y recibe nombre
    const res = await axios({
      method: "POST",
      url: `https://whois.nomada.cloud/upload`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        nomada: "ZWEzMjU1ZmItMDM2MS00YmI4LWJkNzQtMzEwNTk5OGFkZTc1",
      },
    });

    const name = res.data.actorName;

    return getDataActor(name);
  };

  const getDataActor = async( name ) => {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&query=${name}&page=1&include_adult=false`
    });

    return setActorData( response);
  }


  //sube la foto
  const handleChange = (e) => {
    const pictureData = e.target.files[0];
    setFile(pictureData);
  };

  return (

    <>
      { actorData === null ?
        <div>
          <input type="file" onChange={handleChange} />
          <button onClick={() => upImage(file)}>Search</button>
        </div>
      :
         <h1>{JSON.stringify(actorData)}</h1>
      }
    </>

    


  );
}
