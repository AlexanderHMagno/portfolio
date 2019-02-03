$(function() {

    console.log("working");


$('#happy').click(function(){

    $(':root').css('--brand-color','yellow');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/Alex2.jpg)')
})

$('#mad').click(function(){

    $(':root').css('--brand-color','red');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/mad.jpg)')
})

$('#peace').click(function(){

    $(':root').css('--brand-color','#07c063');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/Alex.jpg)')
})



$('#sad').click(function(){

    $(':root').css('--brand-color','#3498db');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/sad.jpg)');
   
})





//toggle the mood menu at the top
$('.mood-menu').click(function(){

    $('.mood').toggle();
    });

$('#choseMode').click(function(){

    $('.mood').toggle();
    });


//move the screen depending in the position 



$('.arrow-down').click(function(){

    $("HTML, BODY").animate({ scrollTop: 750 }, 1000); });
    


});
