const hamburger = document.getElementById("hamburger");
const navlinks = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
    
})
