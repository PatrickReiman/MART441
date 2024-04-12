function playMusic() {
    document.getElementById("secretmusic").pause();
    document.getElementById("secretmusic").currentTime = 0;
    document.getElementById("music").play();
}

function otherPlayMusic() {
    document.getElementById("music").pause();
    document.getElementById("music").currentTime = 0;
    document.getElementById("secretmusic").play();
}