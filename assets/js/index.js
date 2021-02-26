$(document).ready(function(){
    // Navbar
    window.onscroll = function(){
      scrollFunction()
    };
    
    function scrollFunction(){
      if (document.body.scrollTop > 1 || document.documentElement.scrollTop >1) {
        $('#logo1').css('font-size', '1rem');
        $('#navbar').css({
          'backdrop-filter': 'blur(50px)',
          'border-bottom': '1px solid rgba(153, 151, 151, .3',
          'padding': '.5rem 0'
        });
        
        // document.getElementById("hamburger-menu").style.height = "0.5rem";
        
      } else {
        $('#logo1').css('font-size', '1.5rem');
        $('#navbar').css({
          'backdrop-filter': 'none',
          'border-bottom': 'none',
          'padding': '2rem 0'
        });
        
        // document.getElementById("navbar").style.padding = "2rem 0";
        // document.getElementId('logo1').style.font-size = "1.5rem";
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
            $('#navMC').addClass('animate__fadeIn');
            $('#navMC').toggleClass('open');;
            $('.menu-content').css('display', 'flex');
            buttonClick = true;
            $('#navbar').css('backdrop-filter', 'none');
        }else{
            $('#navMC').removeClass('animate__fadeIn');
            $('#bars').removeClass('bar1');
            $('#bars').addClass('bar');
            // $('#navMC').css('display', 'none');
            $('#navMC').hide();
            buttonClick = false;
        }
    });
});