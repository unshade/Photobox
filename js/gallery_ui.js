import conf from "./conf.js";
import lightbox from "./lightbox.js";
import lightbox_ui from "./lightbox_ui.js";

function display_galerie(gallery) {
    let gallery_container = document.getElementById('gallery_container')
    gallery_container.innerHTML = gallery.photos.reduce((previousValue, currentValue) =>
        previousValue +
        `

            <li class="relative">
                <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                    <img data-uri="${conf.webetu + currentValue.links.self.href}"
           src="${conf.webetu + currentValue.photo.thumbnail.href}" alt="" class="object-cover pointer-events-none group-hover:opacity-75">
                    <button type="button" class="absolute inset-0 focus:outline-none">
                        <span class="sr-only">View details</span>
                    </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">${currentValue.photo.titre}</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">Id : ${currentValue.photo.id}</p>
            </li>
        `, ""
    )

    gallery_container.addEventListener('click', async ev => {
        let data = await lightbox.load(ev.target.offsetParent.firstElementChild)
        lightbox.updateCurrent(data.photo.id)
        lightbox_ui.display_lightbox(data)
        lightbox_ui.show()

    })

}

export default {
    display_galerie
}