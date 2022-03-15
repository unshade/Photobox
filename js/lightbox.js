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
    document.querySelector('#lightbox_close')
        .addEventListener("click", () => {
            document.getElementById('lightbox_container')
                .classList.toggle('lightbox_container--hidden')
        })
}

export default {
    load,
    show,
    hide
}