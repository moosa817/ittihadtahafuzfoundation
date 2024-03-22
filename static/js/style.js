document.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var offset = window.scrollY;

    if (offset > 160) {
        navbar.classList.remove('relative');
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
        navbar.classList.add('relative');

    }
});
let page = window.location.pathname.replace('/', '')

if (page == '') {
    page = 'home'
}
console.log(page)
$(`#${page} li`).addClass('bg-indigo-400');


$('#time').text(new Date().getFullYear())


setInterval(() => {
    $('[name="fadeOut"]').fadeOut();
}, 20000);


window.addEventListener('load', function () {
    // Get all images on the page
    var images = document.getElementsByTagName('img');

    var loadedImages = 0;

    // Function to check if all images have loaded
    function checkAllImagesLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            // All images have loaded
            $('#loading-indicator').fadeOut()

        }
    }

    // Loop through each image and add a 'load' event listener
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('load', checkAllImagesLoaded);
        // In case an image is cached and already loaded, call the function
        if (images[i].complete) {
            checkAllImagesLoaded();
        }
    }
});
