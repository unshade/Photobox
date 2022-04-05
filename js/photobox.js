import gallery from "./gallery.js";
import gallery_ui from "./gallery_ui.js";
import lightbox_ui from "./lightbox_ui.js";
import lightbox from "./lightbox.js";

document.querySelector('#lightbox_close')
    .addEventListener("click", () => {
        lightbox_ui.hide()
    })

document.querySelector('#load_gallery')
    .addEventListener('click', async () => {
        let json = await gallery.load()
        gallery_ui.display_galerie(json)
        gallery.updateJson(json)
    })

document.querySelector("#next").addEventListener('click', async () => {
    let json = await gallery.next()
    gallery_ui.display_galerie(json)
    gallery.updateJson(json)
})

document.querySelector("#previous").addEventListener('click', async () => {
    let json = await gallery.prev()
    gallery_ui.display_galerie(json)
    gallery.updateJson(json)
})

document.querySelector("#first").addEventListener('click', async () => {
    let json = await gallery.first()
    gallery_ui.display_galerie(json)
    gallery.updateJson(json)
})

document.querySelector("#last").addEventListener('click', async () => {
    let json = await gallery.last()
    gallery_ui.display_galerie(json)
    gallery.updateJson(json)
})

document.querySelector("#lightbox_next")
    .addEventListener('click', async () => {
        await lightbox.next()
    });

document.querySelector("#lightbox_prev")
    .addEventListener('click', async () => {
        await lightbox.prev()
    });

document.querySelector("#cancel_button")
    .addEventListener('click', clearForm);

document.querySelector("#save_button")
    .addEventListener('click', async () => {
        let content = document.querySelector("#com_content").value
        let title = document.querySelector("#com_title").value
        let username = document.querySelector("#username").value
        await lightbox.addComment(title, username, content)
        await lightbox.update_lightbox()
        clearForm()
    });


function clearForm() {
    document.querySelector("#com_content").value = ""
    document.querySelector("#com_title").value = ""
    document.querySelector("#username").value = ""
}
