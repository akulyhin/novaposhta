import './sass/styles.scss';
import axios from 'axios';

const testHost = 'http://localhost:3031';
const workHost = 'https://ak-np.herokuapp.com';

const cityForm = document.getElementById('city');

cityForm.addEventListener('input', (e) => {

    if (e.target.value.length > 2) {
        axios.post(`${testHost}/api/novaposhta/getCities`, {
            "query": e.target.value
        })
        .then(res => console.log(res.data));
    }
})