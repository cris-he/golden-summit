//const API_ENDPOINT = 'https://gs-app-config-service.herokuapp.com/api';
const API_ENDPOINT = 'http://localhost:7000/api';


//PRODUCT
export  function getProduct () {
    return fetch(`${API_ENDPOINT}/products`)
    .then(res => res.json())
}

// OPTION
export function getOption () {
    return fetch(`${API_ENDPOINT}/options`)
    .then(res => res.json())
}

export function addOption(requestOptions){
    return fetch(`${API_ENDPOINT}/options`,requestOptions);
}

export function deleteOption (id) {
    return fetch(API_ENDPOINT + "/options/" + id, {method: 'DELETE'});
}

//PROGRAM PATH
export function getProgramPath() {
    return fetch(`${API_ENDPOINT}/programPaths`)
    .then(res => res.json())
}