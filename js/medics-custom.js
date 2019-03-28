$("#button-arbeitgeber").click(function() {
    $('html,body').animate({
            scrollTop: $("#howitWorks_ag").offset().top},
        'slow');
});

$("#button-bewerber").click(function() {
    $('html,body').animate({
            scrollTop: $("#howItWorks_b").offset().top},
        'slow');
});



$(document).ready(function(){

});

$(document).ready(function(){
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
});

// $(document).ready(function() {
//
//     $('ul#changeTheText li').on('click', function() {
//         var getId = $(this).attr('id');
//         $("#text-change-w-clicked").text(getId);
//     });
//
// });
$(document).ready(function() {

    $('ul#changeTheText #Traumjob').on('click', function() {
        $("#text-change-w-clicked").fadeOut(function () {
            $("#text-change-w-clicked").text(($("#text-change-w-clicked").text() == 'Traumkandidaten') ? 'Traumjob' : 'Traumjob').fadeIn();
        })
    });

});
$(document).ready(function() {

    $('ul#changeTheText #Traumkandidaten').on('click', function() {
        $("#text-change-w-clicked").fadeOut(function () {
            $("#text-change-w-clicked").text(($("#text-change-w-clicked").text() == 'Traumjob') ? 'Traumkandidaten' : 'Traumkandidaten').fadeIn();
        })
    });

});

$('#button-arbeitgeber').click(function () {
    window.location.hash = 'so-funktioniert-Arbeitgeber';
    return false;
});

$('#button-bewerber').click(function () {
    window.location.hash = 'so-funktioniert-Bewerber';
    return false;
});

$('#login-for-medic').click(function () {
    window.location.hash = 'anmelden-arbeitgeber';
    window.location.href.split('|')[0]
    return false;
});

$('#login-for-seeker').click(function () {
    window.location.hash = 'anmelden-bewerber';
    return false;
});

// MOBILE JQUERY
(function($) {
    let $window = $(window)

    $window.resize(function resize() {
        if ($window.width() < 568) {
            $("#toggle-custom-rln").click(function(){
                // $("#brand-mobile").toggleClass("hide");
                $("#brand-mobile").fadeToggle();
            });
        }

        // $html.removeClass('mobile');
    }).trigger('resize');
})(jQuery);



