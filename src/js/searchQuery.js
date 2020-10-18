// import refs from './refs.js';
import debounce from 'lodash.debounce';
// import templateCity from '../templates/city.hbs';




// refs.search.addEventListener('input', debounce((e) => {
    
//     refs.result.innerHTML = '';
// console.log(e.target.value);
// // let url = `https://api.novaposhta.ua/v2.0/json/${options}`;
// // fetch(url).then(res => res.json()).then(data => console.log(data));
// $.ajax({
//     type: 'POST',
//     dataType: 'json',
//     url: 'https://api.novaposhta.ua/v2.0/json/',
//     data: JSON.stringify({
//       modelName: 'Address',
//       calledMethod: 'searchSettlements',
//       methodProperties: {
//         CityName: e.target.value,
//         "SettlementRef": '',
//         Limit: 5
//       },
//       apiKey: '3fdc9794ecc3ac0afaf149b3472074cd'
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     xhrFields: {
//       withCredentials: false 
//     },
//     success: function(texts) {
//       console.log(texts);
//       refs.result.innerHTML = templateCity(texts.data);
//     },
//   });
  
// },700))
