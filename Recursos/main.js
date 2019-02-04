$(function() {

    


//moodes


$('#happy').click(function(){
    $(':root').css('--brand-color','#f1c40f');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/Alex.jpg)')
    pixabay('cheerful');
})

$('#mad').click(function(){
    $(':root').css('--brand-color','#e74c3c');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/mad.jpg)')
    pixabay('madness');
})

$('#peace').click(function(){
    $(':root').css('--brand-color','#2ecc71');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/forest.jpg)')
    pixabay('Peaceful');
})

$('#sad').click(function(){
    $(':root').css('--brand-color','#3498db');
    $('.wrapper-header').css('background-image','url(Recursos/css/imagenes/sad.jpg)');
    pixabay('Melancholy');
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
   
//it will detect the position for showing the menu
position[0].offsetTop<window.pageYOffset?$('nav').show("fast"):$('nav').hide(1000);

//it will show the characteristics
(position[0].offsetTop-200 < window.pageYOffset && window.pageYOffset<1200)?$(".c-info").show(2000):""  /* $(".c-info").hide(3000)*/;

    } 



// lets gonna run some api. 

function pixabay(mood){

let url_image = "https://pixabay.com/api/";
url_image += '?' + $.param({
'key': "10695978-de9c60160cd39affb68c9830d",
'q': mood,
'image_type': "photo",
'per_page':4,
'order':'popular'

});
$.ajax({
url: url_image,
method: 'GET',
}).done(function(img_search) {
  $(".pixabayContenedor").html("");
  $(".pixabay-title").html(`${mood} mood`);
  $(".pixabay-section").css('display','block');

$.each(img_search.hits,function(key,picData){
  
 let image_show = picData.webformatURL;
 
 console.log(picData);
  $(".pixabayContenedor").append("<li class=\"cuartos\"><a href='"+ picData.pageURL+"' target='_blank'><img src=\""+image_show+"\"></li>")
  
  
})
}).fail(function(err) {
throw err;
});

}



});
