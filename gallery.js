import photoloader from "./photoloader.js";
import conf from "./conf.js";

function load() {
    return photoloader.loadRessource(conf.photos);
}

export default {
    load
}