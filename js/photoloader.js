import conf from './conf.js'

function loadRessource(photosURI) {
    // Fetch les informations depuis l'API
    return fetch(photosURI, {
        method: 'get',
        credentials : 'include'
    }).then((response) => response.json())
}

export default {
    loadRessource
}