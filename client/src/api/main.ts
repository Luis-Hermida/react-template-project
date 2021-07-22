import axios from 'axios';

export const getTestApi = (name: string) => axios.get(`https://api.agify.io?name=${name}`);
