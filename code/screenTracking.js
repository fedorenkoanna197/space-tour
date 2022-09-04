import { humbergerMenue } from "./humburgerOpen.js";

const start = () => {
    humbergerMenue.style.height = `${document.documentElement.offsetHeight}px`;
}

export {start};