$(document).ready(function () //kiedy dokument będzie gotowy, załadowany funkcja może zostać załadowana
    {
        $("#dlcButton").click(function () {
            document.querySelector("#dlc").scrollIntoView();
            }),
            $("#infoButton").click(function () {
            document.querySelector('#info').scrollIntoView();
            }),
            $("#imagesButton").click(function () {
            document.querySelector('#images').scrollIntoView();
            });
    });

$(document).ready(function () {
    $("#scrollUp").click(function () {
        $(window).scrollTop(0, 0);
    });
});


//button hiding or displaying button group with "games" button etc.
$(document).ready(function () {
    {
        $(".btn-group").hide();
    }
    $("#menu").click(function () {
        $(".btn-group").fadeToggle(300);
    });
});


// toggles loginForm class visibilty
$(document).ready(function () {
    $("#loginFormButton, .closeLoginForm").click(function () {
        if ($(".loginForm, .loginFormSubpageEq").is(":visible")) {
            $(".loginForm, .loginFormSubpageEq").hide(500)
        } else {
            $(".loginForm, .loginFormSubpageEq").show(500)
            $(".dropdown").fadeOut(500)
        }
    });
});


$(document).ready(function () {
    $('#categoriesButton').click(function () {
        if ($('.dropdown').is(':visible')) {
            $('.dropdown').fadeOut(300);
        } else {
            $('.dropdown').fadeIn(300);
            $('.loginForm').hide(500);
        };
    });
});

$(document).ready(function () {
    $("#shooter").click(function () {
            $(".horrorGame").hide(500)
            $(".shooterGame").show(500)
        }),
        $("#horror").click(function () {
            $(".shooterGame").hide(500);
            $(".horrorGame").show(500);
        }),
        $("#all").click(function () {
            $('.horrorGame, .shooterGame').show(500);
        });
});

window.addEventListener('load', function(){
    setTimeout(function () {
        let x = document.querySelector('.loaderWrap')
        x.remove();
    }, 1700)
}) 

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        if ($('#scrollUp').is(":hidden"))
            $('#scrollUp').slideDown(500)
    } else if ($('#scrollUp').is(":visible")) {
        $('#scrollUp').hide(500);
    };
});




$(document).ready(function () {
    $('.navbar').hide();
    $('#closeNavbarButton').click(function () {
            $('.navbar').fadeOut(300);
        }),
        $('#openNavbarButton').click(function () {
            $('.navbar').fadeIn(300);
        })
});
var i = 0;
let imagesCsgo = [];


    imagesCsgo[0] = '../assets/image/csgo/image_csgo.webp'
    imagesCsgo[1] = '../assets/image/csgo/image_csgo1.webp'
    imagesCsgo[2] = '../assets/image/csgo/image_csgo2.webp'
    imagesCsgo[3] = '../assets/image/csgo/image_csgo3.webp'
    imagesCsgo[4] = '../assets/image/csgo/image_csgo4.webp'
    imagesCsgo[5] = '../assets/image/csgo/image_csgo5.webp'
    imagesCsgo[6] = '../assets/image/csgo/image_csgo6.webp'
    imagesCsgo[7] = '../assets/image/csgo/image_csgo7.webp'
  
 let imagesDoom2016 = [];
    imagesDoom2016[0] = '../assets/image/doom2016/doom2016_1.webp'
    imagesDoom2016[1] = '../assets/image/doom2016/doom2016_2.webp'
    imagesDoom2016[2] = '../assets/image/doom2016/doom2016_3.webp'
    imagesDoom2016[3] = '../assets/image/doom2016/doom2016_4.webp'
    imagesDoom2016[4] = '../assets/image/doom2016/doom2016_5.webp'
    imagesDoom2016[5] = '../assets/image/doom2016/doom2016_6.webp'
    imagesDoom2016[6] = '../assets/image/doom2016/doom2016_7.webp'
    imagesDoom2016[7] = '../assets/image/doom2016/doom2016_8.webp'
    imagesDoom2016[8] = '../assets/image/doom2016/doom2016_9.webp'
    imagesDoom2016[9] = '../assets/image/doom2016/doom2016_10.webp'
    imagesDoom2016[10] = '../assets/image/doom2016/doom2016_11.webp'
    imagesDoom2016[11] = '../assets/image/doom2016/doom2016_thumbnail.webp'
   
  window.addEventListener('load', function changeImage(){  
    document.slideCsgo.src = imagesCsgo[i];
   
    if(i<imagesCsgo.length - 1){
        i++;
    }else{
        i=0;
    }
    setTimeout(changeImage, 1500);
});  
window.addEventListener('load', function changeImage(){  
    document.slideDoom2016.src = imagesDoom2016[i];
   
    if(i<imagesDoom2016.length - 1){
        i++;
    }else{
        i=0;
    }
    setTimeout(changeImage, 1500);
})  


