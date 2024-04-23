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

let page = window.location.pathname.replaceAll('/', '');


if (page == '') {
    page = 'home';
}

$(`#${page} li`).addClass('bg-indigo-400');

$('#time').text(new Date().getFullYear());

setInterval(() => {
    $('[name="fadeOut"]').fadeOut();
}, 20000);

window.addEventListener('load', function () {
    var images = document.getElementsByTagName('img');
    var loadedImages = 0;

    function checkAllImagesLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            $('#loading-indicator').fadeOut();
        }
    }

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('load', checkAllImagesLoaded);
        if (images[i].complete) {
            checkAllImagesLoaded();
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var animateNums = document.querySelectorAll('.animate-num');
    var options = {
        threshold: 0.5
    };
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var targetNum = parseInt(entry.target.getAttribute('data-num'), 10);
                if (!isNaN(targetNum)) {
                    var currentNum = 0;
                    var increment = targetNum / 100;
                    var interval = setInterval(function () {
                        if (currentNum >= targetNum) {
                            clearInterval(interval);
                        } else {
                            currentNum += increment;
                            entry.target.textContent = Math.floor(currentNum) + '+';
                        }
                    }, 10);
                    observer.unobserve(entry.target);
                } else {
                    console.error("Invalid data-num attribute");
                }
            }
        });
    }, options);

    animateNums.forEach(function (animateNum) {
        observer.observe(animateNum);
    });
});

//


if (window.innerWidth < 700) {
    $('swiper-container').attr('slides-per-view', 1);

} else {
    $('swiper-container').attr('slides-per-view', 3);

}
// swiper-container
// when the width of screen changes to less than 700px the swiper-container will be 
window.addEventListener('resize', function () {
    if (window.innerWidth < 700) {
        $('swiper-container').attr('slides-per-view', 1);
    } else {
        $('swiper-container').attr('slides-per-view', 3);

    }
});


// when swiper-slide is clicked open up a modal containing data inside it
$('swiper-slide').click(function () {
    let content = $(this).find('.notice-content').data('content');
    let subject = $(this).find('.notice-subject').text();
    let date = $(this).find('.notice-date').text();

    $('#modalHeading').text(date);
    $('#modalSubject').text(subject);
    $('#modalContent').text(content);
});


$('.notice-content').each(function (index, element) {
    let text
    if ($(element).data('content').length > 1000) {
        text = $(element).data('content').slice(0, 100) + "...."

    } else {
        text = $(element).data('content').slice(0, 100) + "...."
    }

    $(element).text(text);


});
