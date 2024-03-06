
$('#submit_main').click(function() {

    var email = $('#email').val()
    var firstname = $('#name').val()
    var lastname = $('#lastname').val()

    var message = $('#message').val()

    document.getElementById("submit_main").innerHTML = "Submitting"

    $.ajax({
    data: {
    email:email ,
    name:firstname,
    lastname:lastname,
    message:message
    },
    type: 'POST',
    url: '/contact'
    })
    .done(function (data) {
        if(data.error){
            document.getElementById('error-box').classList.toggle('hidden')
            document.getElementById('error-box').classList.toggle('flex')

            document.getElementById('error').innerHTML = data.error
        }
        else if (data.success){
            document.getElementById('success-box').classList.remove('hidden')
            document.getElementById('success-box').classList.add('flex')

            document.getElementById('success').innerHTML = data.success


            $('#email').val('')
            $('#name').val('')
            $('#lastname').val('')
            $('#message').val('')

    document.getElementById("submit_main").innerHTML = "Submit"


            
        }
    })
})