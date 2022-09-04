import { activeButon } from './activeButton.js';
import { hoverButton } from './hoverButton.js';
import { humburgerOpen } from './humburgerOpen.js';
import { humburgerClose } from './humbergerClose.js';
import { start } from './screenTracking.js';
import data from '../data.json';

const [...technologyItem] = document.querySelectorAll(".technology-item");
const name = document.querySelector(".tecnology-name");
const description = document.querySelector(".tecnology-description");
const imgTechno = document.querySelector(".technology-img img");
const close = document.querySelector(".close a")
const menue = document.querySelector(".heder-hamburger-menu");


activeButon(document.body.id);
hoverButton();

const print = (element, width) => {
        let arr = data.technology;
        for (let i = 0; i < arr.length; i++) {
            if (element === arr[i].name) {
                name.innerText = `${arr[i].name}`;
                description.innerText = `${arr[i].description}`;
                if (width > 992) {
                    imgTechno.setAttribute("src", arr[i].images.portrait);
                } else {
                    imgTechno.setAttribute("src", arr[i].images.landscape);
                }

            }
        }
}

for (let i = 0; i < technologyItem.length; i++) {
    technologyItem[0].classList.add("active-item");
    print(technologyItem[0].id, document.body.offsetWidth);

    technologyItem[i].addEventListener('click', (e) => {

        if (e.target !== technologyItem[i]) {
            return;
        } else {
            e.target.classList.add("active-item");
            e.target.classList.remove("hover-item");
            print(e.target.id, document.body.offsetWidth);
        }

        technologyItem.forEach((ele) => {
            if (ele !== e.target)
                ele.classList.remove("active-item");
        })
    })
}

window.addEventListener('resize', ()=>{
    for(let i = 0; i < technologyItem.length; i++){
        if (technologyItem[i].classList.contains("active-item")){
            print(technologyItem[i].id, document.body.offsetWidth);
        }
    }
})

technologyItem.forEach((element) => {

    element.addEventListener("mouseover", (e) => {
        if (e.target !== element) return;
        if (!e.target.classList.contains("active-item")) {
            e.target.classList.add("hover-item");
        }

    })

    element.addEventListener("mouseout", (e) => {
        if (e.target !== element) return;
        e.target.classList.remove("hover-item");
    })
})

const slider = () =>{
    if(document.body.offsetWidth <= 992){
        document.querySelector(".technology-img").append(document.querySelector(".list-technology"));
    } else{
        document.querySelector(".technology-info").before(document.querySelector(".list-technology"));
    }
}


window.addEventListener('resize', slider)
window.addEventListener('DOMContentLoaded', slider);
menue.addEventListener("click", humburgerOpen);
close.addEventListener("click", humburgerClose);
window.addEventListener('resize', start);

