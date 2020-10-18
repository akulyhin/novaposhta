import './sass/styles.scss';
import debounce from 'lodash.debounce';
import './js/searchQuery.js';



const search = document.querySelector('#tags');
const street = document.querySelector('#tagsStreet');

let arr = [];
let arrStreet = [];

search.addEventListener('input', debounce((e) => {
    // console.log(e.target.value);
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'https://api.novaposhta.ua/v2.0/json/',
        data: JSON.stringify({
          modelName: 'Address',
          calledMethod: 'searchSettlements',
          methodProperties: {
            CityName: e.target.value,
            "SettlementRef": '',
            Limit: 5
          },
          apiKey: 'c1be1e4c0916d85cce43b88f2a0a9fd1'
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        xhrFields: {
          withCredentials: false 
        },
        success: function(texts) {
            
          console.log(texts);
          arr = texts.data[0].Addresses;
          
          // console.log(arr);

          $( function() {
            let availableTags = [];
            let result = available(availableTags, arr);
            console.log(result)
        
            $( "#tags" ).autocomplete({
              source: result
            });
        });
        
        
        function available (availableTags, arr) {
          const ref = arr.map(city => city.Ref);
            const select = arr.map(city => city.Present);
            availableTags = select;
            console.log(ref);
            
            return availableTags;
        }
        },
      });

}, 300));

console.log(search.value);

street.addEventListener('input', debounce((e) => {
  // console.log(e.target.value);
  $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'https://api.novaposhta.ua/v2.0/json/',
      data: JSON.stringify({
        modelName: 'Address',
        calledMethod: 'searchSettlementStreets',
        methodProperties: {
          StreetName: e.target.value,
          SettlementRef: 'e718a680-4b33-11e4-ab6d-005056801329',
          Limit: 5
        },
        apiKey: 'c1be1e4c0916d85cce43b88f2a0a9fd1'
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      xhrFields: {
        withCredentials: false 
      },
      success: function(texts) {
          
        console.log(texts);
        arr = texts.data[0].Addresses;
        
        // console.log(arr);

        $( function() {
          let availableTags = [];
          let result = available(availableTags, arr);
          console.log(result)
      
          $( "#tagsStreet" ).autocomplete({
            source: result
          });
      });
      
      
      function available (availableTags, arr) {
          const select = arr.map(city => city.Present);
          availableTags = select;
          
          return availableTags;
      }
      },
    });

}, 300))