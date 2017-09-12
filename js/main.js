'use strict';


$(document).ready(function () {
    changePosition();
    scrollSlow();
    parallax();
    napiszDoNas();
    zamknij();
    telefon();
    dropdownHover()
});

$(window).scroll(function() { 
    changePosition();
})
                  
function changePosition() {
    var wysokosc = 130;
    
    if ($(window).width() >= 786) {
    
    if ($(window).scrollTop() >= wysokosc) {

        $('.logomale-full').css({'opacity' : '1'});
        $('#dextra-logo').css({'opacity' : '0'});

    } else {
        $('.logomale-full').css({'opacity' : '0'});
        $('#dextra-logo').css({'opacity' : '1'});


    }
}
};

function dropdownHover() {
    $('.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
}

function telefon() {
    $(".phone").click(function(){
        $('.phone-number').toggle();
    });
    
    $("body").click(function(event){
        var clickedElement = $(event.target);
        var isVisible = $(".phone-number").css("display") == "block";
        
        if(isVisible && 
           !clickedElement.hasClass("phone") && 
           !clickedElement.hasClass("phone-number")){
            $(".phone-number").hide();
        }
    });
   
};

function napiszDoNas() {
    $('.napisz').click(function(){
        $('#formularz').addClass('pokaz');
        $('.rozwin').addClass('niepokaz');
        })
    };

function zamknij() {
    $('#zamknij').click(function(event) {
        event.stopPropagation();
        $('#formularz').removeClass("pokaz");
        $('.rozwin').removeClass("niepokaz");
    })
};

function parallax() {
    window.addEventListener('scroll', parallax, false);
    var backgroundTop = document.getElementById('dextra-logo');
    backgroundTop.style.top = -(620 + window.pageYOffset / 2)+"px";
}

function scrollSlow() {

// Add smooth scrolling to all links
  $("a").on('click', function(event) {
      console.log(this.hash);
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 20
      }, 500, 
//                              function(){
//   
//        // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
//      }
                             );
    } // End if
  });};