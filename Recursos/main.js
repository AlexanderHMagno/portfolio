$(function() {

    





$('#happy').click(function(){

    $(':root').css('--brand-color','#f1c40f');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/Alex.jpg)')
})

$('#mad').click(function(){

    $(':root').css('--brand-color','#e74c3c');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/mad.jpg)')
})

$('#peace').click(function(){

    $(':root').css('--brand-color','#2ecc71');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/forest.jpg)')
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

    $('.mood').css('display','flex');
    });


//move the screen depending in the position 



$('.arrow-down').click(function(){

    $("HTML, BODY").animate({ scrollTop: 750 }, 1000); });
    



//show menu depending the position of the screen

window.onscroll = function (e) {  
let position = $(".caracteristicas");
    console.log(position[0].offsetTop);
    console.log(window.pageYOffset);

if(position[0].offsetTop<window.pageYOffset){
    $('nav').show("fast");
} else {
    $('nav').hide(1000);
}
    

if(position[0].offsetTop-200 < window.pageYOffset && window.pageYOffset<800  ){

$(".c-info").show(2000);

} else{
   // $(".c-info").hide(3000);
}
    } 



});
