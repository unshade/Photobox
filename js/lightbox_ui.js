import conf from "./conf.js";

function display_lightbox(data) {
    let title = document.getElementById("lightbox_title")
    let lightbox_full_img = document.getElementById("lightbox_full_img")

    title.innerHTML = data.photo.titre
    lightbox_full_img.src = conf.webetu + data.photo.url.href
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
    display_lightbox,
    hide,
    show
}