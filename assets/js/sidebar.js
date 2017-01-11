// SIDEBAR
$(function() {
    // Open navbarSide when button is clicked
    $('.navbar-toggler').on('click', function() {
        $('.navbar-side').addClass('reveal');
        $('.overlay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.overlay').on('click', function(){
        $('.navbar-side').removeClass('reveal');
        $('.overlay').hide();
    });
});
