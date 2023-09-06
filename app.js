const container = document.getElementById("container");
const subHeader = document.getElementById("sub-header");
const phoneHeader = document.getElementById("phone-header");

container.addEventListener("scroll", (e) => {
    const { scrollTop, scrollHeight } = e.target;
    if(scrollTop < 100 && !subHeader.classList.contains("hidden")) {
        subHeader.classList.add("hidden");
        phoneHeader.style.background = '#000';
    } else if(scrollTop >= 100 && subHeader.classList.contains("hidden")) {
        phoneHeader.style.background = 'linear-gradient(#181818, #282828)';
        subHeader.classList.remove("hidden");
    }
});

function handleViewAll(key) {
    const keyElement = document.getElementById(key);
    if(keyElement) {
        keyElement.classList.add("view-all");
    }
};