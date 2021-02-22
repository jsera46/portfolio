$(document).ready(function(){
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