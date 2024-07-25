const axios = require('axios');
const localStorage = typeof window !== 'undefined' ? window.localStorage : null;
const userId = localStorage ? localStorage.getItem('userId') : null;
export const signUpAPI = async (first_name, last_name, email, password) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    try {
        const response = await axios.post(
            'http://localhost:7000/api/signup',
            {
                first_name, last_name, email, password
            }
        );
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export const loginAPI = async (email, password) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    try {
        const response = await axios.post(
            'http://localhost:7000/api/login',
            {
                email, password
            }
        );
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export const fetchAds = async () => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    try {
        const response = await axios.get('http://localhost:7000/api/ads', {
            params: {
                user_id: userId
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}
