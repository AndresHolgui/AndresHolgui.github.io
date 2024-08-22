const nav = document.querySelector(".nav_container")
const nav_mobile = document.querySelector(".enlaces_mobile-container")
const abrir = document.querySelector(".fa-bars")
const cerrar = document.querySelector(".fa-x")

abrir.addEventListener("click", () =>{
    nav.classList.add("invisivle")
    nav_mobile.classList.add("visible")
    nav.classList.remove("visible")
    nav_mobile.classList.remove("invisivle")
    document.body.style.overflow = "hidden"
})

cerrar.addEventListener("click", () =>{
    nav.classList.add("visible")
    nav_mobile.classList.add("invisivle")
    nav.classList.remove("invisivle")
    nav_mobile.classList.remove("visible")
    document.body.style.overflow = "auto"
})