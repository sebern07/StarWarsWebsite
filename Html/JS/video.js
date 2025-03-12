document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("intro-video");
    var hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
        video.setAttribute("autoplay", "true");
        video.setAttribute("muted", "true");
        localStorage.setItem("hasVisited", "true");
    }
});