//animation on scroll
$().ready(function(){
  AOS.init();

  $("header").attr("data-aos", "fade-up");

  


});



//Eventos SCROLL
$(window).on("scroll", function() {
    var scrollHeight = $(document).height();
    var scrollPosition =  $(window).height() + $(window).scrollTop();


    if (scrollPosition == scrollHeight){

      $("#arrow-down img").hide();
    }

});
