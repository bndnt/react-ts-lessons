import axios from "axios";

// export const fetchPerson = async () => {
//   const response = await axios.get(`https://swapi.info/api/people/1`);
//   return response.data;
// };
export const fetchPerson = async () => {
  const { data } = await axios.get(`https://swapi.info/api/people/1`);
  //   console.log(data.name);

  return data;
};
