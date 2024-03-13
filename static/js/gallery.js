$('#img-btn').click(function (e) {
    $('#vid-btn').removeClass('bg-indigo-300');
    $('#vid-btn').removeClass('text-white');
    $('#img-btn').addClass('bg-indigo-300');
    $('#img-btn').addClass('text-white');

    $('#video-section').hide()
    $('#image-section').fadeIn()
});

$('#vid-btn').click(function (e) {
    $('#vid-btn').addClass('bg-indigo-300');
    $('#vid-btn').addClass('text-white');
    $('#img-btn').removeClass('bg-indigo-300');
    $('#img-btn').removeClass('text-white');

    $('#image-section').hide();
    $('#video-section').fadeIn();
});

