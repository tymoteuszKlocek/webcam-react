import axios from 'axios';
import conf from '../config/conf.json';

type Props = {
    url: string,
    category: string,
    position: string
}

export default function webcamSearch(category, query) {

    let url = '';

    if (category === 'nearby=') {
        url = conf.webcamSearch.SRC + category + query + ',' + conf.webcamSearch.RANGE + conf.webcamSearch.PARAMS;
    } else {
        url = conf.webcamSearch.SRC + category + query + conf.webcamSearch.PARAMS;
    }

   return axios.get(url, {
        headers: { 'X-Mashape-Authorization': conf.webcamSearch.API_KEY }
    })
}