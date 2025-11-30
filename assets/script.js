$(document).ready(function() {

  // Navegación activa con scroll
  $(window).on('scroll', function() {
    let scrollPos = $(window).scrollTop() + 100;

    $('section').each(function(index) {
      let sectionTop = $(this).offset().top;
      let sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        $('.side-nav a').removeClass('active');
        $('.side-nav a').eq(index).addClass('active');

        $('.nav-link').removeClass('active');
        $('.nav-link').eq(index).addClass('active');
      }
    });

    // Mostrar botón scroll top
    if (scrollPos > 300) {
      $('#btnScrollTop').fadeIn();
    } else {
      $('#btnScrollTop').fadeOut();
    }
  });

  // Smooth scroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    let target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 800);
      $('.navbar-collapse').collapse('hide');
    }
  });

  // Botón volver arriba
  $('#btnScrollTop').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
});