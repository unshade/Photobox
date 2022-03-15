import gallery from "./gallery.js";
import gallery_ui from "./gallery_ui.js";

let lightbox_close = document.querySelector('#lightbox_close')
let lightbox_container = document.getElementById('lightbox_container')
lightbox_close.addEventListener("click", () => {
    lightbox_container.classList.toggle('lightbox_container--hidden')
})
document.querySelector('#load_gallery')
    .addEventListener('click', e => {
        gallery.load().then(data => gallery_ui.display_galerie(data))
    })
