$(document).ready(function () {
  /* For the sticky navigation */
  $('.js--section-stickyTrigger').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
        $('nav').addClass('animated fadeIn');
        $('navbar').addClass('mobileNavBar');
      } else {
        $('nav').removeClass('sticky');
        $('nav').removeClass('animated fadeIn');
        $('navbar').removeClass('mobileNavBar');
      }
    },
    { offset: '120px;' }
  );

  /* Navigation scroll */
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top,
            },
            {
              duration: 100,
            }
          );
          return false;
        }
      }
    });
  });

  /* Animations on scroll */

  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    },
    {
      offset: '90%',
    }
  );

  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-2').addClass('animated fadeIn');
    },
    {
      offset: '90%',
    }
  );

  $('.js--wp-3').waypoint(
    function (direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    },
    {
      offset: '90%',
    }
  );

  $('.js--wp-4').waypoint(
    function (direction) {
      $('.js--wp-4').addClass('animated fadeIn');
    },
    {
      offset: '90%',
    }
  );
  $('.js--wp-5').waypoint(
    function (direction) {
      $('.js--wp-5').addClass('animated fadeIn');
    },
    {
      offset: '90%',
    }
  );
  $('.js--wp-6').waypoint(
    function (direction) {
      $('.js--wp-6').addClass('animated fadeIn');
    },
    {
      offset: '90%',
    }
  );

  /* Mobile navigation */
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });
  /* Collapse Navbar on click */
  $('.js--main-nav>li>a').click(() => {
    var navElements = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    navElements.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });
});
