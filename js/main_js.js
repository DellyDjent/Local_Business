$( document ).ready(function() {
    $('.item-masonry').hover(
        function(){
            $(this).find(".cover-item-gallery").fadeIn();
        },
        function(){
            $(this).find(".cover-item-gallery").fadeOut();
        }
    );

    var sizer = '.sizer4';

    var container = $('#gallery');

    container.imagesLoaded(function(){
        container.masonry({
            itemSelector: '.item-masonry',
            columnWidth: sizer,
            percentPosition: true,
        });
    });

    $('.btn-sub, .email-field').on('click', function (){

        var itemAnimated = $('.email-field')

        itemAnimated.addClass('animated zoomOutUp');
        itemAnimated.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            itemAnimated.removeClass('animated zoomOutUp');
        });
    });
});