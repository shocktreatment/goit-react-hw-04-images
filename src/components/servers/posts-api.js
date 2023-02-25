import axios from "axios";

export const searchPosts = async (q, page) => {
    const baseURL = 'https://pixabay.com/api';
    const KEY = '33316611-16e1045ea737eceb658f2ba63';
    const { data } = await axios.get(`${baseURL}/?q=${q}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return data;
}