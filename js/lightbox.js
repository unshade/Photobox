import photoloader from "./photoloader.js";
import conf from "./conf.js";
import lightbox_ui from "./lightbox_ui.js";

let current

function load(node) {
    let dataUri = node.getAttribute("data-uri");
    return photoloader.loadRessource(dataUri)
}

function loader(toLoad) {
    return photoloader.loadRessource(toLoad)
}

async function next() {
    current = current + 1

    document.getElementById("lightbox_full_img")
        .src = ""
    let json = await loader(conf.photos + current)
    await lightbox_ui.display_lightbox(json)
}

async function prev() {
    current = current - 1

    let json = await loader(conf.photos + current)
    document.getElementById("lightbox_full_img")
        .src = ""
    await lightbox_ui.display_lightbox(json)


}

function updateCurrent(newCurr) {
    current = newCurr
}


export default {
    load,
    next, prev, current, updateCurrent
}