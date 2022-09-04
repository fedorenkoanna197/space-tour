import { listItem } from "./activeButton.js";
const hoverButton = () =>{
    listItem.forEach((element) => {

        element.addEventListener("mouseover", (e) => {
            if (e.target !== element) return;
            if (!e.target.classList.contains("active")) {
                e.target.classList.add("hover");
            }
        })
    
        element.addEventListener("mouseout", (e) => {
            if (e.target !== element) return;
            e.target.classList.remove("hover");
        })
    })
}


export {hoverButton};