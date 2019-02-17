

$(function () {

    //showing the new project

    $('.project-now').hover(function () {
        $('.project-now-message').css('display', 'block');
    })
    $('.project-now').mouseleave(function () {
        $('.project-now-message').css('display', 'none');
    })




    //moodes
    let imagesMood = "";

    $('#happy').click(function () {
        $(':root').css('--brand-color', '#f1c40f');
        $('.wrapper-header').css('background-image', 'url(Recursos/css/imagenes/Alex.jpg)')
        imagesMood = 'cheerful'; //global var
        pixabay(imagesMood);
    })

    $('#mad').click(function () {
        $(':root').css('--brand-color', '#e74c3c');
        $('.wrapper-header').css('background-image', 'url(Recursos/css/imagenes/mad.jpg)')
        imagesMood = 'madness'; //global var
        pixabay(imagesMood);

    })

    $('#peace').click(function () {
        $(':root').css('--brand-color', '#2ecc71');
        $('.wrapper-header').css('background-image', 'url(Recursos/css/imagenes/forest.jpg)')
        imagesMood = 'Peaceful'; //global var
        pixabay(imagesMood);

    })

    $('#sad').click(function () {
        $(':root').css('--brand-color', '#3498db');
        $('.wrapper-header').css('background-image', 'url(Recursos/css/imagenes/sad.jpg)');
        imagesMood = 'Melancholy'; //global var
        pixabay(imagesMood);

    })


    //toggle the mood menu at the top
    $('.mood-menu').click(function () {

        let counter = [".a1", ".a2", ".a3", ".a4"];
        let interval = 200;
        counter.forEach((element, index = 1000) => {

            setTimeout(function () {
                $(element).show();
            }, index * interval);


        });

        setTimeout(function () { $('.mood').toggle(); $('.animation').hide(); }, 3000);

    });

    $('#choseMode').click(function () {
        $('.mood').css('display', 'flex');
    });

    // nav options 





    //move the screen depending in the position 



    $('.arrow-down').click(function () {
        $(this).hide();
        $("HTML, BODY").animate({ scrollTop: $('.caracteristicas')[0].offsetTop }, 1000);
    });



    //show menu depending the position of the screen

    window.onscroll = function (e) {
        let position = $(".caracteristicas");

        //it will detect the position for showing the menu
        position[0].offsetTop - 10 < window.pageYOffset && position[0].offsetTop > 1 ? $('nav').show("fast") : $('nav').css('display', 'none');

        //it will show the characteristics
        ($('.caracteristicas')[0].offsetTop - 200 < window.pageYOffset) ? $(".c-info").show(2000) : ""  /* $(".c-info").hide(3000)*/;

    }



    // lets gonna run some api. 

    function pixabay(mood) {

        let url_image = "https://pixabay.com/api/";
        url_image += '?' + $.param({
            'key': "10695978-de9c60160cd39affb68c9830d",
            'q': mood,
            'image_type': "photo",
            'per_page': 12,
            'order': 'popular'

        });
        $.ajax({
            url: url_image,
            method: 'GET',
        }).done(function (img_search) {
            $(".c-info").hide();
            $('.skills-name').html(`${mood} Skills`);
            $('.projects-name').html(`${mood} Projects`);
            $('.hidden-group').css('display', 'block');
            $('.arrow-down').css('display', 'block');
            $('.mood-images').css('background', 'rgba(128, 128, 128, 0.247');
            $(".quotes-images").css('background', 'transparent');
            $(".user-images").css('background', 'transparent');
            $(".pixabayContenedor").html("");
            $(".pixabay-title").html(`${mood} mood`);
            $(".pixabay-section").css('display', 'block');

            $.each(img_search.hits, function (key, picData) {

                let image_show = picData.webformatURL;


                $(".pixabayContenedor").append("<li class=\"cuartos\"><a href='" + picData.pageURL + "' target='_blank'><img src=\"" + image_show + "\"></a></li>")


            })
        }).fail(function (err) {
            throw err;
        });

    }


    //random user

    $('.user-images').click(function () {
        $(".pixabayContenedor").html("");
        $(this).css('background', 'rgba(128, 128, 128, 0.247');
        $(".mood-images").css('background', 'transparent');
        $(".quotes-images").css('background', 'transparent');


        $.ajax({
            url: 'https://randomuser.me/api/?results=8',
            dataType: 'json',
            success: function (data) {


                $(".pixabayContenedor").html("");
                $(".pixabayContenedor").append('<h5 class=\'random-h3\'>*Users who have chosen this mood</h5>');
                let interval = 200;
                data.results.forEach((element, index = 1000) => {

                    setTimeout(function () {
                        $(".pixabayContenedor").append("<li class=\"cuartos\"><a><img src=\"" + element.picture.large + " \"class='random-size'></a><h3 class='random-h3'>" + element.name.first + " " + element.name.last + "</h3></li>")
                    }, index * interval);


                });

            }
        });





    });

    //just show the images 
    $('.mood-images').click(function () {
        pixabay(imagesMood);

    });

    //just show the quotes

    $('.quotes-images').click(function () {

        $(this).css('background', 'rgba(128, 128, 128, 0.247');
        $(".mood-images").css('background', 'transparent');
        $(".user-images").css('background', 'transparent');
        $(".pixabayContenedor").html("");
        $(".pixabayContenedor").append('<h5 class=\'random-h3\'>*Click again for another Quote</h5>');
        const choosen_quote = Math.floor(Math.random() * 10);
        const data_quote = quotes[imagesMood][choosen_quote];
        $(".pixabayContenedor").append(`<h3 class="margin-quotes"><i class="fas fa-quote-left quote-color"></i>${data_quote.quotes}<i class="fas fa-quote-right quote-color"></i></h3><h4 class="author-quote">${data_quote.author}</h4>`);



    });




    /* Opening a window for the new Projects
    */

    $('a[rel="next"]').click(function () {
        window.innerWidth < 750 ? "" : window.open(this.href, "myWindowName", "left=400,top=200,toolbar=no,width=700,height=400");

    });





    /* moving screen smoothly for the elements inside the main menu nav */
    $(".location_position").click(function () {
        let movement = $(this).attr('id')
        $('html,body').animate({
            scrollTop: $('.' + movement).offset().top
        },
            750);
    });




    /* closing contact form*/

    $('.btn').click(function () {
        $('.contact-form').css('display', 'flex');

    });

    $('.fa-times-circle').click(function () {
        $('.contact-form').css('display', 'none');
    })
});
