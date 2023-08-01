import axios from "axios";

const URL = " https://api.github.com/users";
const user = "MirekSobota";

export const getReposData = async () => {
  const response = await axios.get(`${URL}/${user}/repos`);
  return await response.data;
};
