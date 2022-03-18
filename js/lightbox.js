import photoloader from "./photoloader.js";

function load(node) {
    let dataUri = node.getAttribute("data-uri");
    return photoloader.loadRessource(dataUri)
}

function show() {
    document.getElementById('lightbox_container')
        .classList.toggle('lightbox_container--hidden')
}

function hide() {
    document.getElementById('lightbox_container')
        .classList.toggle('lightbox_container--hidden')
    document.querySelector("#lightbox_title").innerHTML = " "
    document.querySelector("#lightbox_full_img").src = " "
}

export default {
    load,
    show,
    hide
}