async function loadRessource(photosURI) {
    // Fetch les informations depuis l'API
    let promise = await fetch(photosURI, {
        method: 'get',
        credentials: 'include'
    })
    return promise.json()
}

export default {
    loadRessource
}