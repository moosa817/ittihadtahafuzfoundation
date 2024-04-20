let vid_btn_click = false

let current_section = 'image';

let videos_length = videos.length;

function appendVideo(url) {
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(url) + "&width=500&show_text=true&appId=651642853742723";
    iframe.className = "rounded-lg h-72 w-full";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.scrolling = "no";
    iframe.frameBorder = "0";
    iframe.allowTransparency = "true";
    iframe.allowFullscreen = "true";

    // Append the iframe to the #vid-grid element
    document.getElementById("vid-grid").appendChild(iframe);
}



$('#img-btn').click(function (e) {
    $('#vid-btn').removeClass('bg-indigo-300');
    $('#vid-btn').removeClass('text-white');
    $('#img-btn').addClass('bg-indigo-300');
    $('#img-btn').addClass('text-white');

    $('#video-section').hide()
    $('#image-section').fadeIn()

    current_section = 'image';
});

$('#vid-btn').click(function (e) {
    $('#vid-btn').addClass('bg-indigo-300');
    $('#vid-btn').addClass('text-white');
    $('#img-btn').removeClass('bg-indigo-300');
    $('#img-btn').removeClass('text-white');

    $('#image-section').hide();
    $('#video-section').fadeIn();

    current_section = 'video';

    if (!vid_btn_click) {
        $('#vid-waiting').show()

        vid_btn_click = true;
        videos.forEach(url => {
            appendVideo(url);
        });


    }
});

setInterval(() => {
    $('#vid-waiting').hide()
}, 8000);

function LoaderFunc() {
    const grid = document.querySelector('.grid-div');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
    });
}

window.onload = () => {
    LoaderFunc()
}

$(document).on('click', '.image-clicker', function () {
    let url = $(this).data('url');
    $('#modal-image').attr('src', url);


    $('#hidden-btn').click()

});

let loading;
let n = 0;


function ImagesScrollHandler() {
    // Check if the user has reached the bottom of the page

    let ending_index = parseInt(images_length);
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 200 && !loading && current_section == 'image') {
        loading = true
        $('#img-waiting').show()


        $.ajax({
            data: {
                ending_index: ending_index,
                csrfmiddlewaretoken: csrfmiddlewaretoken
            },
            type: 'POST',
            url: '/load_images'
        })
            .done(function (data) {
                if (data.finalimages) {
                    window.removeEventListener('scroll', ImagesScrollHandler);
                }

                let images = JSON.parse(data.images);

                images.forEach(url => {
                    $('#images-grid').append(`
                    <div class="added-item-${n} grid-item w-[45%] sm:w-[30%] md:w-[23%] m-2 ">
                     <a class="image-clicker" data-url="${url}">
                <img src="${url}" alt=""
                    class="rounded-md shadow-2xl hover:scale-110 hover:saturate-50 hover:cursor-pointer">
            </a>
            </div>`);
                    $(`.added-item-${n}`).hide()

                });




                images_length = parseInt(images_length)
                images_length += images.length

                loading = false;
                setTimeout(function () {
                    $('#img-waiting').fadeOut()
                    $(`.added-item-${n}`).fadeIn()
                    LoaderFunc()
                    n++;
                }, 2000);

            })


    }



}



function VideosScrollHandler() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 200 && !loading && current_section == 'video') {
        loading = true
        $('#video-waiting').show()

        let ending_index = videos_length;
        $.ajax({
            data: {
                ending_index: ending_index,
                csrfmiddlewaretoken: csrfmiddlewaretoken
            },
            type: 'POST',
            url: '/load_videos'
        })
            .done(function (data) {
                if (data.finalvideos) {
                    console.log('final videos')
                    window.removeEventListener('scroll', VideosScrollHandler);
                }
                let videos = JSON.parse(data.videos)

                videos.forEach(url => {
                    appendVideo(url);
                });


                videos_length += videos.length;
                loading = false;
                $('#video-waiting').fadeOut()


            })



    }
}
window.addEventListener('scroll', ImagesScrollHandler);
window.addEventListener('scroll', VideosScrollHandler);



