import './sass/styles.scss';
import debounce from 'lodash.debounce';
import './js/searchQuery.js';



const search = document.querySelector('#tags');
const street = document.querySelector('#tagsStreet');

let arr = [];

search.addEventListener('input', debounce((e) => {
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
            Limit: 10
          },
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
            // console.log(ref);
            
            return availableTags;
        }
        },
      });

}, 100));

console.log(search.value);

let cityRef = '';

search.addEventListener('change', () => {

  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: 'https://api.novaposhta.ua/v2.0/json/',
    data: JSON.stringify({
      modelName: 'Address',
      calledMethod: 'searchSettlements',
      methodProperties: {
        CityName: search.value,
        Limit: 100
      },
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    xhrFields: {
      withCredentials: false 
    },
    success: function whatRef (texts) {
        
      cityRef = texts.data[0].Addresses[0].Ref;

      return cityRef;
    }
  })
})


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
          SettlementRef: cityRef,
          "Language": "ru",
          Limit: 100
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
          let resultStreet = available(availableTags, arr);
          // console.log(resultStreet)
      
          $( "#tagsStreet" ).autocomplete({
            source: resultStreet
          });
      });
      
      function available (availableTags, arr) {
          const select = arr.map(city => city.Present);
          availableTags = select;
          
          return availableTags;
      }
      },
    });

}, 100))