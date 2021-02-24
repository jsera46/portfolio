$(document).ready(function(){
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
        }else{
            $('#navMC').removeClass('animate__fadeIn');
            $('#bars').removeClass('bar1');
            $('#bars').addClass('bar');
            $('#navMC').css('display', 'none');
            buttonClick = false;            
        }
    });
});