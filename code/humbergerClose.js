import { humbergerMenue } from "./humburgerOpen.js";

const humburgerClose = () =>{
    humbergerMenue.classList.remove("menue-active");
}

export {humburgerClose};