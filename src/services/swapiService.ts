import axios from "axios";
import type { Character } from "../types/character";
// export const fetchPerson = async () => {
//   const response = await axios.get(`https://swapi.info/api/people/1`);
//   return response.data;
// };
export const fetchPerson = async (id: number): Promise<Character> => {
  const { data } = await axios.get<Character>(
    `https://swapi.info/api/people/${id}`
  );
  //   console.log(data.name);

  return data;
};
