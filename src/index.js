import './sass/styles.scss';
import axios from 'axios';

const cityForm = document.getElementById('city');

cityForm.addEventListener('input', (e) => {

    if (e.target.value.length > 2) {
        axios.post('https://ak-np.herokuapp.com/api/novaposhta/getCities', {
            "query": e.target.value
        })
        .then(res => console.log(res.data));
    }
})