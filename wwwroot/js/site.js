// Page Loader
$(window).on('load', function () {
    setTimeout(function () {
        $('.page-loader').fadeOut();
    }, 500);
});

// Navigation ACTIVE class
$(document).ready(function(){
	$('.navbar li a[href="' + document.location.pathname + '"]').parent('li').addClass('active');
});

// We put modals out of wrapper to working properly
$(document).ready(function(){
	$('.modal').appendTo("body");
});

// Tooltips and Popovers
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
  $('[rel="tooltip"]').tooltip();
});

// Header switch class        
$(function() {
    var navbar = $("#mainNav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            navbar.removeClass('bg-transparent').addClass("pri-sec-gradient");
            //navbar.removeClass('navbar-dark').addClass("navbar-light");
        } else {
            navbar.removeClass("pri-sec-gradient").addClass('bg-transparent');
            //navbar.removeClass("navbar-light").addClass('navbar-dark');
        }
    });
});