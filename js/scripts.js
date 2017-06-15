$(document).ready( function () {

//This keeps the header full screen independent of screen size
    $(window).resize(function() {
        $('.header-full').css('height', window.innerHeight+'px');
        $('main').css('margin-top', window.innerHeight + 'px');
        });

//This is for the dot navigation
    var contentSections = $('.cd-section');
    var navigationItems = $('#cd-vertical-nav a');

    function updateNavigation() {
        contentSections.each(function(){
        $this = $(this);
        var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
        if ( ( $this.offset().top - $(window).height()/4 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/4 > $(window).scrollTop() ) ) {
          navigationItems.eq(activeSection).addClass('is-selected');
            console.log($this);
        }else {
          navigationItems.eq(activeSection).removeClass('is-selected');
        }
        });
    }

//this is to set the selected section on load
    updateNavigation();
//this changes the selected dot as one scrolls 
    $(window).scroll(updateNavigation);

//This is supposed to make smooth scrolling happen when a nav 
  $("a [href^='#']").on('click', function(event) {

      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top - 10 + 'px'
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  });

//This makes the placeholder text in the forms dissapear when focused
    $("[placeholder]").focus(function () {
        var placeholder = $(this).attr("placeholder"); 
        $(this).attr("placeholder", "").blur(function () {
            $(this).attr("placeholder", placeholder);
        });
    });

});

