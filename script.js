
function getParks(searchName, maxResults){ 
  const apiKey = 'lxOfNNkQf1LO90abfbiWHOBU4sCkbYFszVyB08uQ';
  const url = 'https://developer.nps.gov/api/v1/parks';

  const params = formatQueryParams({
    api_key: apiKey,
    limit: maxResults,
    q: searchName
  })

  return fetch(`${url}?${params}`)
    .then(response =>{
        if(!response.ok)   
          throw new Error(response.statusText);
        return response.json();
    })
    .then(renderParks)
    .catch(renderError)
}

function renderError(err) {
  return $('#js-error-message')
    .text(`Something went wrong: ${err.message}`);
}

function formatQueryParams(params){
    const queryItems = 
      Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}

function renderParks(responseJson){
  console.log(responseJson)
  $('#results-list').empty();
  for(let i = 0; i< responseJson.items.length; i++){
      $('#results-list').append(
          `<li><h3>${responseJson.data[i].states.name}</h3>
    <p>${responseJson.data[i].states.description}</p>
    <a href='${responseJson.data[i].states.default.url}'>
    </li>`
  )};
  return $('#results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event=> {
    event.preventDefault()
    const searchName = $('#js-search-state').val();
    const maxResults = $('#js-max-results').val();
    getParks(searchName, maxResults);
  });
}

$(function(){
    console.log('app loaded');
    $(watchForm);
})
