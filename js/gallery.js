import photoloader from "./photoloader.js";
import conf from "./conf.js";

let json
let toLoad = conf.photos

function load() {
    return photoloader.loadRessource(toLoad);
}

function next() {
    toLoad = conf.webetu + json.links.next.href
    return load()
}

function prev() {
    toLoad = conf.webetu + json.links.prev.href
    return load()
}

function first() {
    toLoad = conf.webetu + json.links.first.href
    return load()
}

function last() {
    toLoad = conf.webetu + json.links.last.href
    return load()
}

function updateJson(newJson) {
    json = newJson
}

export default {
    load,
    next,
    prev,
    first,
    last,
    updateJson
}