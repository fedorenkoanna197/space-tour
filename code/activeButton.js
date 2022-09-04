const [...listItem] = document.querySelectorAll(".list-item a");

const activeButon = (ele) => {
    for (let i = 0; i < listItem.length; i++) {
        if (ele === listItem[i].dataset.number) {
            listItem[i].classList.add("active");
        }
        listItem[i].addEventListener("click", e => {
            if (e.target !== listItem[i]) {
                return;
            } else {
                e.target.classList.add("active");
            }
        })
    }
}

export { activeButon, listItem }