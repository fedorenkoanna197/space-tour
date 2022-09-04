import { activeButon } from './activeButton.js';
import { hoverButton } from './hoverButton.js';
import { humburgerOpen } from './humburgerOpen.js';
import { humburgerClose } from './humbergerClose.js';
import { start } from './screenTracking.js';
import data from '../data.json';

const [...planetsItem] = document.querySelectorAll(".planets-item a");
const titlePlanets = document.querySelector(".title-planets");
const imgPlanets = document.querySelector(".planets-img img");
const planetsDescription = document.querySelector(".planets-description");
const close = document.querySelector(".close a")
const menue = document.querySelector(".heder-hamburger-menu");
const distance = document.querySelector(".number");
const travelDay = document.querySelector(".travel-day");

activeButon(document.body.id);
hoverButton();

const print = (element) => {
        let arr = data.destinations;
        for (let i = 0; i < arr.length; i++) {
            if (element === arr[i].name.toUpperCase()) {
                titlePlanets.innerText = `${arr[i].name}`
                imgPlanets.setAttribute("src", arr[i].images.png);
                planetsDescription.innerText = `${arr[i].description}`
                distance.innerText = `${arr[i].distance}`;
                travelDay.innerText = `${arr[i].travel}`;
            }
        }
}

for (let i = 0; i < planetsItem.length; i++) {
    planetsItem[0].classList.add("active-planets-item");
    print(planetsItem[0].innerHTML)
    planetsItem[i].addEventListener('click', (e) => {
        if (e.target !== planetsItem[i]) {
            return;
        } else {
            e.target.classList.add("active-planets-item");
            e.target.classList.remove("hover-planets-item");
            print(e.target.innerHTML);
        }

        planetsItem.forEach((ele) => {
            if (ele !== e.target)
                ele.classList.remove("active-planets-item");
        })
    })
}

planetsItem.forEach((element) => {

    element.addEventListener("mouseover", (e) => {
        if (e.target !== element) return;
        if (!e.target.classList.contains("active-planets-item")) {
            e.target.classList.add("hover-planets-item");
        }

    })

    element.addEventListener("mouseout", (e) => {
        if (e.target !== element) return;
        e.target.classList.remove("hover-planets-item");
    })
})

menue.addEventListener("click", humburgerOpen);

close.addEventListener("click", humburgerClose);

window.addEventListener('resize', start);


