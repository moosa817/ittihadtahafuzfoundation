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