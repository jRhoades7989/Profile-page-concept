$(document).ready( function () {
    
    $(window).resize(function() {
        $('.header-full').css('height', window.innerHeight+'px');
        $('main').css('margin-top', window.innerHeight + 'px');
    });

    //Nav Functions
    var contentSections, navigationItems;
    $(document).ready(function(){
        contentSections = $('.cd-section');
        navigationItems = $('#cd-vertical-nav a');
        updateNavigation();
        $(window).scroll(function(){updateNavigation();});
    });
		



    function updateNavigation() {
        contentSections.each(function(){
        $this = $(this);
        var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
        if ( ( $this.offset().top - $(window).height()/4 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/4 > $(window).scrollTop() ) ) {
          navigationItems.eq(activeSection).addClass('is-selected');
        }else {
          navigationItems.eq(activeSection).removeClass('is-selected');
        }
        });
    }

  
    $("[placeholder]").focus(function () {
        var placeholder = $(this).attr("placeholder"); 
        $(this).attr("placeholder", "").blur(function () {
            $(this).attr("placeholder", placeholder);
        });
    });


    $(document).ready(function(){
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
});
});

