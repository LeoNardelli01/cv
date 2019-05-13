//animation on scroll
$().ready(function(){
  AOS.init();


});



//Eventos SCROLL
$(window).on("scroll", function() {
    var scrollHeight = $(document).height();
    var scrollPosition =  $(window).height() + $(window).scrollTop();
    var scrollLimit = scrollHeight - 50;

    console.log("limite: "+scrollLimit);
    console.log("posicion: "+scrollPosition);

    if (scrollPosition == scrollLimit){

      $("#arrow-down img").hide("slow");
    }

});
