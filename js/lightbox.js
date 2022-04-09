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
    let json = await loader(conf.photos + current)

    if (json.type === "ressource") {
        document.getElementById("lightbox_full_img")
            .src = ""
        await lightbox_ui.display_lightbox(json)
    } else current = current - 1

}

async function update_lightbox() {
    let json = await loader(conf.photos + current)
    await lightbox_ui.display_lightbox(json)
}
async function prev() {
    current = current - 1

    let json = await loader(conf.photos + current)
    if (json.type === "ressource") {
        document.getElementById("lightbox_full_img")
            .src = ""
        await lightbox_ui.display_lightbox(json)
    } else current = current + 1

}

function updateCurrent(newCurr) {
    current = newCurr
}

const fetcher = async (URL, content) => {
    const res = await fetch(URL, content);

    let payload;

    try {
        payload = await res.json();
    } catch (e) {
        console.log('Erreur serveur');
        return null;
    }

    return payload;
};

async function addComment(titre, pseudo, content) {
    let data = {
        "titre": titre,
        "content": content,
        "pseudo": pseudo
    }


    await fetcher(`${conf.webetu}/www/canals5/phox/api/photos/${current}/comments`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json;charset=utf8'
        }
    });


}

export default {
    load,
    next, prev, current, updateCurrent, addComment, loader, update_lightbox
}