import conf from "./conf.js";

function display_lightbox(data) {
    let title = document.getElementById("lightbox_title")
    let lightbox_full_img = document.getElementById("lightbox_full_img")

    title.innerHTML = data.photo.titre
    lightbox_full_img.src = conf.webetu + data.photo.href
}

export default {
    display_lightbox
}


