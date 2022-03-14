import conf from "./conf.js";

function display_galerie(gallery) {
    let gallery_container = document.getElementById('gallery_container')
    gallery_container.innerHTML = gallery.photos.reduce( (previousValue, currentValue) =>
        previousValue +
        `
        <div class="vignette" >
         <img data-uri="${conf.webetu + currentValue.links.self.href}"
           src="${conf.webetu + currentValue.photo.thumbnail.href}">
       </div>
        `, ""

    )
}

export default {
    display_galerie
}