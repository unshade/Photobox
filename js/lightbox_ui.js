import conf from "./conf.js";
import photoloader from "./photoloader.js";

async function display_lightbox(data) {
    let title = document.getElementById("lightbox_title")
    let descr = document.getElementById("lightbox_descr")
    let lightbox_full_img = document.getElementById("lightbox_full_img")
    let format = document.getElementById("format")
    let type = document.getElementById("type")
    let size = document.getElementById("size")
    let imgwidth = document.getElementById("imgwidth")


    title.innerHTML = data.photo.titre
    lightbox_full_img.src = conf.webetu + data.photo.url.href
    descr.innerHTML = data.photo.descr
    format.innerHTML = "Format : " + data.photo.format
    type.innerHTML = "Type : " + data.photo.type
    size.innerHTML = "Taille sur le disque : " + data.photo.size + " octets"
    imgwidth.innerHTML = "Taille : " + data.photo.width + "x" + data.photo.height + " pixels"

    let comments = await photoloader.loadRessource(conf.webetu + data.links.comments.href)

    comments = comments.comments

    document.getElementById("comments_container").innerHTML = comments.reduce((acc, cur) =>
        acc +
            `
            <div id="${cur.id}" class="mb-20">
                 <h2>Titre : ${cur.titre}</h2>
                 <div>Ecris par : ${cur.pseudo}</div>
                 <div class="mt-2">${cur.content}</div>
                 <div class="mt-2">Date d'émission : ${cur.date}</div>
            </div>
            `
    , "")

}

function show() {
    document.getElementById('lightbox_container')
        .classList.remove('lightbox_container--hidden')
    document.getElementById('lightbox_container')
        .classList.add('lightbox_container--visible')
}

function hide() {
    document.getElementById('lightbox_container')
        .classList.remove('lightbox_container--visible')
    document.getElementById('lightbox_container')
        .classList.add('lightbox_container--hidden')
    document.querySelector("#lightbox_title").innerHTML = " "
    document.querySelector("#lightbox_full_img").src = " "
}

export default {
    display_lightbox,
    hide,
    show
}