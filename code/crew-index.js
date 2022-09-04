import { activeButon } from "./activeButton.js";
import { hoverButton } from "./hoverButton.js";
import { humburgerOpen } from "./humburgerOpen.js";
import { humburgerClose } from "./humbergerClose.js";
import { start } from "./screenTracking.js";
import data from "../data.json";

const [...btnList] = document.querySelectorAll(".btn-slider");
const post = document.querySelector(".crew-position");
const name = document.querySelector(".crew-name");
const bio = document.querySelector(".crew-bio");
const imgPers = document.querySelector(".crew-img img");
const close = document.querySelector(".close a");
const menue = document.querySelector(".heder-hamburger-menu");


activeButon(document.body.id);
hoverButton();

const print = (element) => {
    let arr = data.crew;
    for (let i = 0; i < arr.length; i++) {
        if (element === arr[i].role) {
            post.innerText = `${arr[i].role}`;
            name.innerText = `${arr[i].name}`;
            bio.innerText = `${arr[i].bio}`;
            imgPers.setAttribute("src", arr[i].images.webp);
        }
    }
}


for (let i = 0; i < btnList.length; i++) {
    btnList[0].classList.add("active-slider");
    print(btnList[0].id);
    btnList[i].addEventListener("click", e => {
        if (e.target !== btnList[i]) {
            return;
        } else {
            e.target.classList.add("active-slider");
            e.target.classList.remove("hover-slider");
            print(e.target.id);

        }

        btnList.forEach((ele) => {
            if (ele !== e.target)
                ele.classList.remove("active-slider");
        })
    })
}

btnList.forEach((element) => {

    element.addEventListener("mouseover", (e) => {
        if (e.target !== element) return;
        if (!e.target.classList.contains("active-slider")) {
            e.target.classList.add("hover-slider");
        }

    })

    element.addEventListener("mouseout", (e) => {
        if (e.target !== element) return;
        e.target.classList.remove("hover-slider");
    })
})

menue.addEventListener("click", humburgerOpen);

close.addEventListener("click", humburgerClose);

window.addEventListener('resize', start);

const slider = () => {
    if (document.body.offsetWidth > 375 && document.body.offsetWidth <= 767) {
        document.querySelector(".line-crew").before(document.querySelector(".section-slider"));
    } else {
        document.querySelector(".section-crew-info").append(document.querySelector(".section-slider"));
    }
}

window.addEventListener("DOMContentLoaded", slider)

window.addEventListener('resize', slider)

