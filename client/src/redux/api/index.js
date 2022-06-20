import axios from 'axios';

export const fetchBySearch = (searchQuery) => axios.get(`http://localhost:5000/issues/${searchQuery}`);
