import conf from "./conf.js";
import lightbox from "./lightbox.js";
import lightbox_ui from "./lightbox_ui.js";

function display_galerie(gallery) {
    let gallery_container = document.getElementById('gallery_container')
    gallery_container.innerHTML = gallery.photos.reduce((previousValue, currentValue) =>
        previousValue +
        `
        <div class="vignette" >
         <img data-uri="${conf.webetu + currentValue.links.self.href}"
           src="${conf.webetu + currentValue.photo.thumbnail.href}">
        </div>
        `, ""
    )

    gallery_container.addEventListener('click', async ev => {
        lightbox_ui.show()
        let data = await lightbox.load(ev.target)
        lightbox_ui.display_lightbox(data)
    })

}

export default {
    display_galerie
}