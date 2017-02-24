$(document).ready(function(){

    $("#mainForm").validate({

        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digits: true
            }
        },
        messages: {
            name: 'Введите не менее трёх символов'
        }
    });
});

var flag = true;

$('.btn-toggle').on('click', function (e) {
   if (flag) {
        flag = false;

        $('.main-header .main-nav').slideToggle(function(){
            flag = true;
        });
   }
});

$('.top-form').on('submit', function(e){
    e.preventDefault();
    var name = $('.field-name').val().trim(),
        email = $('.field-email').val().trim(),
        phone = $('.field-phone').val().trim();

        data = {
            name: name,
            email: email,
            phone: phone
        };

        console.log(data);

    $.ajax({
        ulr: '/user-page',
        method: 'post',
        data: JSON.stringify(data),
        header: {
            'content-type': 'application/json'
        }
    });
});

$('.bottom-form').on('submit', function(e){
    e.preventDefault();
    var name = $('.bottom-field-name').val().trim(),
        email = $('.bottom-field-email').val().trim(),

    data = {
        name: name,
        email: email
    };

    console.log(data);

    $.ajax({
        ulr: '/user-page',
        method: 'post',
        data: JSON.stringify(data),
        header: {
            'content-type': 'application/json'
        }
    });
});