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
            $('.hoverGame').removeAttr('data-aos')
            $(".shooterGame").show(500)
        }),
        $("#horror").click(function () {
            let attr = document.querySelector('.hoverGame')
            $(".shooterGame").hide(500);     
            $('.hoverGame').removeAttr('data-aos')
            $(".horrorGame").show(500);
       
                       
        }),
        $("#all").click(function () {
            $('.horrorGame, .shooterGame').show(500);
            $('.hoverGame').attr('data-aos', ('fade-up'))
        });
});

window.addEventListener('load', function () {
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


window.addEventListener('load', function changeImage() {
    document.slideCsgo.src = imagesCsgo[i];
    if (i < imagesCsgo.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, 1500);
});
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

window.addEventListener('load', function changeImage() {
    document.slideDoom2016.src = imagesDoom2016[i];
    if (i < imagesDoom2016.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, 1500);
});
let imagesOutlast = [];
imagesOutlast[0] = '../assets/image/outlast/outlast_1.webp'
imagesOutlast[1] = '../assets/image/outlast/outlast_2.webp'
imagesOutlast[2] = '../assets/image/outlast/outlast_3.webp'
imagesOutlast[3] = '../assets/image/outlast/outlast_4.webp'
imagesOutlast[4] = '../assets/image/outlast/outlast_5.webp'
imagesOutlast[5] = '../assets/image/outlast/outlast_6.webp'
imagesOutlast[6] = '../assets/image/outlast/outlast_7.webp'
imagesOutlast[7] = '../assets/image/outlast/outlast_8.webp'
imagesOutlast[8] = '../assets/image/outlast/outlast_9.webp'
imagesOutlast[9] = '../assets/image/outlast/outlast_10.webp'


  window.addEventListener('load', function changeImage() {
    document.slideOutlast.src = imagesOutlast[i];
    if (i < imagesOutlast.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, 1500);
});

let imagesCss = []
imagesCss[0] = '../assets/image/cssource/cs_source_1.webp'
imagesCss[1] = '../assets/image/cssource/cs_source_2.webp'
imagesCss[2] = '../assets/image/cssource/cs_source_3.webp'
imagesCss[3] = '../assets/image/cssource/cs_source_4.webp'
imagesCss[4] = '../assets/image/cssource/cs_source_5.webp'
imagesCss[5] = '../assets/image/cssource/cs_source_thumbnail.webp'

window.addEventListener('load', function changeImage() {
    document.slideCss.src = imagesCss[i];
    if (i < imagesCss.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, 1500);
});
let imagesCs = [];
imagesCs[0] = '../assets/image/cs16/cs_1.webp'
imagesCs[1] = '../assets/image/cs16/cs_2.webp'
imagesCs[2] = '../assets/image/cs16/cs_3.webp'
imagesCs[3] = '../assets/image/cs16/cs_4.webp'
imagesCs[4] = '../assets/image/cs16/cs_5.webp'
imagesCs[5] = '../assets/image/cs16/cs_6.webp'
imagesCs[6] = '../assets/image/cs16/cs_7.webp'
imagesCs[7] = '../assets/image/cs16/cs_8.webp'
imagesCs[8] = '../assets/image/cs16/cs_9.webp'
imagesCs[9] = '../assets/image/cs16/cs_10.webp'


  window.addEventListener('load', function changeImage() {
    document.slideCs.src = imagesCs[i];
    if (i < imagesCs.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, 1500);
});

let imagesDoomEternal = [];
imagesDoomEternal[0] = '../assets/image/doom_eternal/doom_eternal_1.webp'
imagesDoomEternal[1] = '../assets/image/doom_eternal/doom_eternal_2.webp'
imagesDoomEternal[2] = '../assets/image/doom_eternal/doom_eternal_3.webp'
imagesDoomEternal[3] = '../assets/image/doom_eternal/doom_eternal_4.webp'
imagesDoomEternal[4] = '../assets/image/doom_eternal/doom_eternal_5.webp'
imagesDoomEternal[5] = '../assets/image/doom_eternal/doom_eternal_6.webp'
imagesDoomEternal[6] = '../assets/image/doom_eternal/doom_eternal_7.webp'
imagesDoomEternal[7] = '../assets/image/doom_eternal/doom_eternal_8.webp'
imagesDoomEternal[8] = '../assets/image/doom_eternal/doom_eternal_9.webp'

window.addEventListener('load', function changeImage() {
    document.slideDoomEternal.src = imagesDoomEternal[i];
    if (i < imagesDoomEternal.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, 1500);
});

let imagesDbd = [];
imagesDbd[0] = '../assets/image/dbd/dbd_1.webp'
imagesDbd[1] = '../assets/image/dbd/dbd_2.webp'
imagesDbd[2] = '../assets/image/dbd/dbd_3.webp'
imagesDbd[3] = '../assets/image/dbd/dbd_4.webp'
imagesDbd[4] = '../assets/image/dbd/dbd_5.webp'
imagesDbd[5] = '../assets/image/dbd/dbd_6.webp'
imagesDbd[6] = '../assets/image/dbd/dbd_7.webp'
imagesDbd[7] = '../assets/image/dbd/dbd_8.webp'
imagesDbd[8] = '../assets/image/dbd/dbd_9.webp'

window.addEventListener('load', function changeImage() {
    document.slideDbd.src = imagesDbd[i];
    if (i < imagesDbd.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, 1500);
});