

$('#ContactForm').submit(function (e) {
    $('#submit_main').attr('disabled', 'true');

    e.preventDefault();
    var email = $('#email').val()
    var firstname = $('#name').val()
    var lastname = $('#lastname').val()
    var subject = $('#subject').val()
    var csrfmiddlewaretoken = $('input[name=csrfmiddlewaretoken]').val();

    var message = $('#message').val()

    document.getElementById("submit_main").innerHTML = "Submitting"

    $.ajax({
        data: {
            email: email,
            subject: subject,
            fname: firstname,
            lname: lastname,
            message: message,
            csrfmiddlewaretoken: csrfmiddlewaretoken
        },
        type: 'POST',
        url: '/contact'
    })
        .done(function (data) {
            $('#submit_main').removeAttr('disabled');

            if (data.error) {
                $('#contact-error').show()
                $('#contact-error').html(data.error)

                document.getElementById("submit_main").innerHTML = "Submit"

            }
            else if (data.success) {
                $('#contact-error').hide()
                $('#success-box').show()

                $('#success-msg').text(data.success)


                $('#email').val('')
                $('#name').val('')
                $('#lastname').val('')
                $('#subject').val('')

                $('#message').val('')

                document.getElementById("submit_main").innerHTML = "Submit"



            }
        })
})