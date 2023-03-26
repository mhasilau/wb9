import { API } from '../../api/api';
import axios from 'axios';

const post = async () => {
    const o = await axios.post(`${API.db}/test.json`, {
        username: 'sdsd',
        age: 414
    });
    return console.log(o);
}

post()