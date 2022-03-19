import gallery from "./gallery.js";
import gallery_ui from "./gallery_ui.js";
import lightbox_ui from "./lightbox_ui.js";

document.querySelector('#lightbox_close')
    .addEventListener("click", () => {
        lightbox_ui.hide()
    })
document.querySelector('#load_gallery')
    .addEventListener('click', async (e) => {
        let json = await gallery.load()
        gallery_ui.display_galerie(json)
        gallery.updateJson(json)
    })

document.querySelector("#next").addEventListener('click', async (e) => {
    let json = await gallery.next()
    gallery_ui.display_galerie(json)
    gallery.updateJson(json)
})

document.querySelector("#previous").addEventListener('click', async (e) => {
    let json = await gallery.prev()
    gallery_ui.display_galerie(json)
    gallery.updateJson(json)
})

document.querySelector("#first").addEventListener('click', async (e) => {
    let json = await gallery.first()
    gallery_ui.display_galerie(json)
    gallery.updateJson(json)
})

document.querySelector("#last").addEventListener('click', async (e) => {
    let json = await gallery.last()
    gallery_ui.display_galerie(json)
    gallery.updateJson(json)
})


