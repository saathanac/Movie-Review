import axios from 'axios';

export default axios.create({
    baseURL:'https://0338-2607-fea8-be60-2300-bc7a-477c-2e63-fcbc.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});