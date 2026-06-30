function showImage(src) {
    document.getElementById("preview").src = src;
    document.getElementById("overlay").classList.add("overlay-open");
    document.body.style.overflow = "hidden";
}

function hideImage() {
    document.getElementById("preview").src = "";
    document.getElementById("overlay").classList.remove("overlay-open");
    document.body.style.overflow = "";
}