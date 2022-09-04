import { activeButon } from "./activeButton.js";
import { hoverButton } from "./hoverButton.js";
import { humburgerClose } from "./humbergerClose.js";
import { humburgerOpen } from "./humburgerOpen.js";
import { start } from "./screenTracking.js";

const divBtn = document.querySelector(".div-btn");
const close = document.querySelector(".close a")
const menue = document.querySelector(".heder-hamburger-menu");

activeButon(document.body.id);
hoverButton();

//hover btn explore
divBtn.addEventListener("mouseover", (e) => {
    e.target.classList.add("div-hover");
})

divBtn.addEventListener("mouseout", (e) => {
    e.target.classList.remove("div-hover");
})

// /humberger menue
menue.addEventListener("click", humburgerOpen);

close.addEventListener("click", humburgerClose);

//screen tracking

window.addEventListener('resize', start);

