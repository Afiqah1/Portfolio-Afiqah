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


