import { useState } from "react";

import axios from "axios";


export const upImage = async (file) => {
  const data = new FormData();
  data.append("file", file);

  const res = await axios({
    method: "POST",
    url: `https://whois.nomada.cloud/upload`,
    data: data,
    headers: {
      "Content-Type": "application/json",
      nomada: "ZWEzMjU1ZmItMDM2MS00YmI4LWJkNzQtMzEwNTk5OGFkZTc1",
    },
  });

  console.log(res.data.actorName);
  return res.data.actorName;

};


export default function DragDrop() {
  const [file, setFile] = useState(null);


  //sube la foto  
  const handleChange = (e) => {
    const pictureData = e.target.files[0];
    setFile(pictureData);
  };

  console.log(file);

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={() => upImage(file) }>Search</button>

    </div>
  );
}
