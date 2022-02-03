import './sass/styles.scss';
import axios from 'axios';

const testHost = 'http://localhost:3031';
const workHost = 'https://ak-np.herokuapp.com';

const cityForm = document.getElementById('city');
const city_autocomplete = document.getElementById('city_autocomplete');
const warehouseForm = document.getElementById('warehouse');
const warehouse_autocomplete = document.getElementById('warehouse_autocomplete');

cityForm.addEventListener('input', (e) => {

    if (e.target.value.length > 2) {
        axios.post(`${testHost}/api/novaposhta/getCities`, {
            "query": e.target.value
        })
        .then(res => {
            city_autocomplete.innerHTML = '';
            res.data.data.forEach(item => {
                city_autocomplete.insertAdjacentHTML('beforeend', `<li>${item.DescriptionRu}</li>`) 
            })
            console.log(res.data.data)
        });
    }
})

warehouseForm.addEventListener('input', (e) => {
    
})