import gallery from "./gallery.js";
import gallery_ui from "./gallery_ui.js";

document.querySelector('#lightbox_close')
    .addEventListener("click", () => {
        document.getElementById('lightbox_container')
            .classList.toggle('lightbox_container--hidden')
    })
document.querySelector('#load_gallery')
    .addEventListener('click', e => {
        gallery.load().then(data => gallery_ui.display_galerie(data))
    })
