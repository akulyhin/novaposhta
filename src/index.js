import './sass/styles.scss';
import axios from 'axios';
import debounce from 'lodash.debounce';


const testHost = 'http://localhost:3031';
const workHost = 'https://ak-np.herokuapp.com';

const cityForm = document.getElementById('city');
const city_autocomplete = document.getElementById('city_autocomplete');
const warehouseForm = document.getElementById('warehouse');
const warehouse_autocomplete = document.getElementById('warehouse_autocomplete');

let cityRef = '';

warehouse_autocomplete.addEventListener('click', (e) => {
    warehouseForm.value = e.target.innerText;
    warehouse_autocomplete.innerHTML = '';
    warehouse_autocomplete.classList.remove('active');
});

city_autocomplete.addEventListener('click', (e) => {
    cityForm.value = e.target.innerText;
    cityRef = e.target.getAttribute('data-id');
    city_autocomplete.innerHTML = '';
    city_autocomplete.classList.remove('active');
});

cityForm.addEventListener('input', debounce((e) => {

    if (!e.target.value.length) {
        city_autocomplete.innerHTML = '';
        city_autocomplete.classList.remove('active');
    }

    if (e.target.value.length > 2) {
        axios.post(`${workHost}/api/novaposhta/getCities`, {
            "query": e.target.value
        })
        .then(res => {
            city_autocomplete.innerHTML = '';
            city_autocomplete.classList.remove('active');
            city_autocomplete.classList.add('active');
            res.data.data.forEach(item => {
                city_autocomplete.insertAdjacentHTML('beforeend', `<li data-id="${item.Ref}">${item.DescriptionRu}</li>`) 
            })
        });

    }
}, 200))

warehouseForm.addEventListener('input', debounce((e) => {
    axios.post(`${workHost}/api/novaposhta/getWarehouses`, {
        "Ref": cityRef,
        "query": e.target.value
    })
    .then(res => {
        console.log(res.data.data);
        warehouse_autocomplete.innerHTML = '';
        warehouse_autocomplete.classList.add('active');
        res.data.data.forEach(item => {
            warehouse_autocomplete.insertAdjacentHTML('beforeend', `<li>${item.DescriptionRu}</li>`);
        })
    })
}, 200))