/// javascript document

function showPage() {
  document.getElementById("mainPart").style.display = "block";
}

$(document).ready(function() {
var stickyNavTop = $('.navbar').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.navbar').addClass('sticky');
} else {
    $('.navbar').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});

function goBack() {
    window.history.back();
}