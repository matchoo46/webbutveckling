function visaVideo(id) {
    let video = document.getElementById(id);

    if (video.style.display === "none") {
        video.style.display = "block";
    } else {
        video.style.display = "none";
    }
}