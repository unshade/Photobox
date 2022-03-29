import photoloader from "./photoloader.js";
import conf from "./conf.js";

let current
function load(node) {
    let dataUri = node.getAttribute("data-uri");
    return photoloader.loadRessource(dataUri)
}

function loader(toLoad) {
    return photoloader.loadRessource(toLoad)
}

async function next() {
    document.getElementById("lightbox_full_img")
        .src = ""
    current = current + 1
    let json = await loader(conf.photos + current)
    document.getElementById("lightbox_full_img")
        .src = conf.webetu + json.photo.url.href
}

async function prev() {
    if (current > 6) {
        document.getElementById("lightbox_full_img")
            .src = ""
        current = current - 1
        let json = await loader(conf.photos + current)
        document.getElementById("lightbox_full_img")
            .src = conf.webetu + json.photo.url.href
    }
}

function updateCurrent(newCurr) {
    current = newCurr
}


export default {
    load,
    next, prev, current, updateCurrent
}