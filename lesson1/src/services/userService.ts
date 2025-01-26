import axios from "axios";

const api = 'https://jsonplaceholder.typicode.com/users';
// get users from api
export const getUsers = async () => {
    const response = await axios.get(api);
    return response.data;
}

// get user by id
export const getUserById = async (id: number) => {
    const response = await axios.get(`${api}/${id}`);
    return response.data;
}