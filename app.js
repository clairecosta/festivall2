jQuery(function($) {
    $('#exampleModal').on('hidden.bs.modal', function (e) {
        $('html, body').animate({
            scrollTop: $("#page-2").offset().top
        }, 2000);
    })
});

$(window).load(function () {
    //normally you'd wait for document.ready, but you'd likely to want to wait
    //for images to load in case they reflow the page
    $('#page-2').delay(5000) //wait 5 seconds
        .animate({
            //animate jQuery's custom "scrollTop" style
            //grab the value as the offset of #second from the top of the page
            'scrollTop': $('#festivals').offset().top
        }, 300); //animate over 300ms, change this to however long you want it to animate for
});