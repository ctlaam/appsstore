const container = document.getElementById("container");
const subHeader = document.getElementById("sub-header");

container.addEventListener("scroll", (e) => {
    const { scrollTop, scrollHeight } = e.target;
    if(scrollTop < 100 && !subHeader.classList.contains("hidden")) {
        subHeader.classList.add("hidden");
    } else if(scrollTop >= 100 && subHeader.classList.contains("hidden")) {
        subHeader.classList.remove("hidden");
    }
});

function handleViewAll(key) {
    const keyElement = document.getElementById(key);
    if(keyElement) {
        keyElement.classList.add("view-all");
    }
};