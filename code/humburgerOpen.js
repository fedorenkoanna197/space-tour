const humbergerMenue = document.querySelector(".nav-bar-humburger");

const humburgerOpen = () =>{
    humbergerMenue.classList.add("menue-active");
    humbergerMenue.style.height = `${document.documentElement.offsetHeight}px`
}

export {humburgerOpen, humbergerMenue};