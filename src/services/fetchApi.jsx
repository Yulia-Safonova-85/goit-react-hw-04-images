import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/`;
axios.defaults.params = {
    key: '32875464-b0eaa8b0d7d7f8361833525ce',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    
}


export const fetchApiSearch = async (querry,page) => {
    const { data } = await axios.get(`?q=${querry}&page=${page}`);
    return data;                
}

