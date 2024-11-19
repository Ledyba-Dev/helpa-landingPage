const closeIcon = document.getElementsByClassName("closeNavIcon")[0];
const openIcon = document.getElementsByClassName("openNavIcon")[0];
const ulNav = document.getElementById("ulNav");

const openNav = () => {
    ulNav.classList.toggle("hidden");
}

const toggleNav = () => {
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    openNav();
}




document.addEventListener("click", (event) => {
    // toggleNav
    if (event.target.matches("#btnNav *")) {
        toggleNav();
    }

    
});