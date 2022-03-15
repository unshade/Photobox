import gallery from "./gallery.js";
import gallery_ui from "./gallery_ui.js";
import lightbox from "./lightbox.js";

document.querySelector('#lightbox_close')
    .addEventListener("click", () => {
        lightbox.hide()
    })
document.querySelector('#load_gallery')
    .addEventListener('click', e => {
        gallery.load().then(data => gallery_ui.display_galerie(data))
    })
