import conf from './conf.js'

function loadRessource() {
    return fetch(conf.url, {
        method: 'get',
        credentials : 'include'
    }).then((e) => e.json())
}

export default {
    loadRessource
}