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

menuToggle.addEventListener("click", function() {
    sidebar.classList.toggle("active");
});


const sidebarLinks = sidebar.querySelectorAll("a");

sidebarLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        sidebar.classList.remove("active");

    });

});

