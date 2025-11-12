import axios from "axios";

// export const fetchPerson = async () => {
//   const response = await axios.get(`https://swapi.info/api/people/1`);
//   return response.data;
// };
export const fetchPerson = async (id: number) => {
  const { data } = await axios.get(`https://swapi.info/api/people/${id}`);
  //   console.log(data.name);

  return data;
};
