import photoloader from "./photoloader.js";

function load(node) {
    let dataUri = node.getAttribute("data-uri");
    return photoloader.loadRessource(dataUri)
}

export default {
    load
}