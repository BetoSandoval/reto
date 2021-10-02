import { useState } from "react";
import axios from "axios";

const useRecuests = (file) => {

  const [actorData, setActorData] = useState(null);

  /* ---------- Consumo de APIs ---------------*/

  // Eniva foto y recibe nombre
  const upImage = async (file) => {
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

    const name = res.data.actorName;

    return getDataActor(name);
  };

  // Consigue la info del actor a partor del nombre
  const getDataActor = async (name) => {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&query=${name}&page=1&include_adult=false`,
    });

    return setActorData(response);
  };

  return {
    actorData,
    upImage

  }

}

export default useRecuests;
