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
    let imgheight = document.getElementById("imgheight")


    title.innerHTML = data.photo.titre
    lightbox_full_img.src = conf.webetu + data.photo.url.href
    descr.innerHTML = data.photo.descr
    format.innerHTML = data.photo.format
    type.innerHTML = data.photo.type
    size.innerHTML = data.photo.size
    imgwidth.innerHTML = data.photo.width
    imgheight.innerHTML = data.photo.height

    let comments = await photoloader.loadRessource(conf.webetu + data.links.comments.href)

    comments = comments.comments

    document.getElementById("comments_container").innerHTML = comments.reduce((acc, cur) =>
        acc +
            `
            <div id="${cur.id}">
                 <h2>${cur.titre}</h2>
                 <div>${cur.content}</div>
                 <div>${cur.pseudo}</div>
                 <div>${cur.date}</div>
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