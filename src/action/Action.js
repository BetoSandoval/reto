// import axios from "axios";


// export const upImage = async (file) => {
//   const data = new FormData();
//   data.append(
//     "file",
//     fs.createReadStream(file)
//   );

//   const res = await axios({
//     method: "POST",
//     url: `https://whois.nomada.cloud/upload`,
//     data: data,
//     headers: {
//       "Content-Type": "application/json",
//       nomada: "ZWEzMjU1ZmItMDM2MS00YmI4LWJkNzQtMzEwNTk5OGFkZTc1",
//     },
//   });

//   return res;
// };