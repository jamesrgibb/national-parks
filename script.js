'use strict';

const apiKey = 'lxOfNNkQf1LO90abfbiWHOBU4sCkbYFszVyB08uQ';
const url = 'https://developer.nps.gov/api/v1/parks';

fetch(
  url + '?stateCode=ca&limit=10', {
    headers: {
      'X-Api-Key': apiKey
    }
  })
    .then(res => res.json())
    .then(res => console.log(res))

// function formatQueryParams(params){
//     const queryItems = Object.keys(params)
//     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//     return queryItems.join('&');
// }
// function displayResults(responseJson){
//     console.log(responseJson);
// 
//     $('#results-list').empty();
// 
//     for(let i = 0; i< responseJson.items.length; i++){
//         $('#results-list').append(
//             `<li><h3>${responseJson.data[i].states.name}</h3>
//       <p>${responseJson.data[i].states.description}</p>
//       <a href='${responseJson.data[i].states.default.url}'>
//       </li>`
//     )};
//     $('#results').removeClass('hidden');
// }
// 
// function getParks (query, maxResults=10) {
//     const params = {
//         api_key: apiKey,
//         // stateCode: query,
//         limit: maxResults,
//         q: query
//     };
//     console.log(params)
//     const queryString = formatQueryParams(params)
//     const newUrl = url + '?' + queryString;
//     fetch(newUrl)
//     .then(response =>{
//         if(response.ok){   
//             return response.json();
//         }
//         throw new Error(response.statusText);
//     })
//     .then(console.log)
//     // .then(responseJson =>displayResults(responseJson))
//     .catch(err => {
//         $('#js-error-message').text(`Something went wrong: ${err.message}`);
//     });
// }
// function watchForm() {
// $('form').submit(event=> {
//     event.preventDefault()
//     const searchName = $('#js-search-state').val();
//     const maxResults = $('#js-max-results').val();
//     getParks(searchName, maxResults);
// });
// }
// $(function(){
//     console.log('app loaded');
//     $(watchForm);
// })
// 