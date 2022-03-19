import gallery from "./gallery.js";
import gallery_ui from "./gallery_ui.js";
import lightbox_ui from "./lightbox_ui.js";

document.querySelector('#lightbox_close')
    .addEventListener("click", () => {
        lightbox_ui.hide()
    })
document.querySelector('#load_gallery')
    .addEventListener('click', e => {
        gallery.load().then(data => {
            gallery_ui.display_galerie(data)
            gallery.updateJson(data)
        })
    })

document.querySelector("#next").addEventListener('click', (e) => {
    gallery.next().then(data => {
        gallery_ui.display_galerie(data)
        gallery.updateJson(data)
    })
})

document.querySelector("#previous").addEventListener('click', (e) => {
    gallery.prev().then(data => {
        gallery_ui.display_galerie(data)
        gallery.updateJson(data)
    })
})

document.querySelector("#first").addEventListener('click', (e) => {
    gallery.first().then(data => {
        gallery_ui.display_galerie(data)
        gallery.updateJson(data)
    })
})

document.querySelector("#last").addEventListener('click', (e) => {
    gallery.last().then(data => {
        gallery_ui.display_galerie(data)
        gallery.updateJson(data)
    })
})


