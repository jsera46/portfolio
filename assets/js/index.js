$(document).ready(function(){
    // Navbar
    window.onscroll = function(){
      scrollFunction()
    };
    let home = $('#home');
    let projects = $('#projects');
    let about = $('#about');
    let contact = $('#contact-btn');
    let navbar = $('#navbar');
    let navMC = $('#navMC');
    let navsize = $('.deskHome, .deskProjects, .deskAbout, .navButton')
    let logo = $('.logo');

    function scrollFunction(){
      if (document.body.scrollTop > 1 || document.documentElement.scrollTop >1) {
        $('#logo1').css('font-size', '1.3rem');
        $('#navbar').css({
          'background-color': '#273037',
          'border-bottom': '1px solid rgba(153, 151, 151, .3',
          'padding': '1rem 0'
        });
        $('.mycontainerDesk').css({'background-color': '#273037'});
        $('.menu-content').css('top', '6px');
        
        navsize.css('font-size', '1rem');
        logo.css('font-size', '1.3rem');
      } else {
        $('#logo1').css('font-size', '1.5rem');
        $('#navbar').css({
          'background-color': 'transparent',
          'border-bottom': 'none',
          'padding': '2rem 0'
        });
        $('.mycontainerDesk').css({
          'background-color': 'transparent'
        });
        $('.menu-content').css('top', '24px');
        navsize.css('font-size', '1.2rem');
        logo.css('font-size', '1.5rem');
      }
    };
    
    // Nav-menu
    $('.deskHome').click(function(){
        $('.deskHome').addClass('underline');
        $('.deskProjects').removeClass('underline');
        $('.deskAbout').removeClass('underline');
    })

    $('.deskProjects').click(function(){
        $('.deskHome').removeClass('underline');
        $('.deskProjects').addClass('underline');
        $('.deskAbout').removeClass('underline');
    })

    $('.deskAbout').click(function(){
        $('.deskHome').removeClass('underline');
        $('.deskProjects').removeClass('underline');
        $('.deskAbout').addClass('underline');
    })
    
    // hamburger
    let buttonClick = false;
    $('#burger').click(function(){
        if (buttonClick == false){
            $('#bars').removeClass('bar');
            $('#bars').addClass('bar1');
            navMC.fadeIn(400);
            // $('#navMC').toggleClass('open');
            $('.menu-content').css('display', 'flex');
            buttonClick = true;
        }else{
            $('#navMC').removeClass('animate__fadeIn animate__animated animate__faster');
            $('#bars').removeClass('bar1');
            $('#bars').addClass('bar');
            // $('#navMC').css('display', 'none');
            $('#navMC').fadeOut(800);
            
            // $('#bars').css('margin-top', '0');
            buttonClick = false;
        }
    });
    
    // iphone navMC links
    home.click(function(){      
      navMC.delay(800).fadeOut(400);
      setTimeout(function(){
        $('#bars').removeClass('bar1');
      }, 800);
      setTimeout(function(){
        $('#bars').addClass('bar');
      }, 800);
    })

    projects.click(function(){
      navMC.delay(800).fadeOut(400);
      setTimeout(function(){
        $('#bars').removeClass('bar1');
      }, 800);
      setTimeout(function(){
        $('#bars').addClass('bar');
      }, 800);
    })

    about.click(function(){
      navMC.delay(800).fadeOut(400);
      setTimeout(function(){
        $('#bars').removeClass('bar1');
      }, 800);
      setTimeout(function(){
        $('#bars').addClass('bar');
      }, 800);
    })
    
    contact.click(function(){
      navMC.delay(800).fadeOut(400);
      setTimeout(function(){
        $('#bars').removeClass('bar1');
      }, 800);
      setTimeout(function(){
        $('#bars').addClass('bar');
      }, 800);
    });

    // Scrollspy Navbar
    



});