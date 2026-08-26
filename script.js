const projectButton = document.querySelector(".project-button");
const projectDropdown = document.querySelector(".project-dropdown");

projectButton.addEventListener("click", function () {
    projectDropdown.classList.toggle("active");
});



    const videos = document.querySelectorAll('.project-video');

    videos.forEach(function(video) {

    video.addEventListener('click', function() {

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

    });

});



const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");


// Set initial state
if (window.innerWidth <= 768) {
    sidebar.classList.add("closed");
    content.classList.add("full-width");
}


// Hamburger button
menuToggle.addEventListener("click", function () {

    sidebar.classList.toggle("closed");
    content.classList.toggle("full-width");

});


// Close sidebar after clicking a navigation link on mobile
const sidebarLinks = sidebar.querySelectorAll("a");

sidebarLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 768) {
            sidebar.classList.add("closed");
            content.classList.add("full-width");
        }

    });

});
