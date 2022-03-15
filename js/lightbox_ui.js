import conf from "./conf.js";

function display_lightbox(data) {
    let title = document.getElementById("lightbox_title")
    let lightbox_full_img = document.getElementById("lightbox_full_img")

    title.innerHTML = data.photo.titre
    lightbox_full_img.src = conf.webetu + data.photo.url.href

    let lightbox_close = document.getElementById("lightbox_close")
    let lightbox_container = document.getElementById('lightbox_container')
    lightbox_close.addEventListener("click", function() {
        lightbox_container.classList.toggle('lightbox_container--hidden')
    })
}

export default {
    display_lightbox
}


