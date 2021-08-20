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




// toggles loginForm visibilty
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

//After clicking categoriesButton - dropdown with categories is gonna be displayed
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
//After clicking each category like "Shooter" or "Horror" - games with corresponding class will be displayed
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
//It's just loading animation component, after 1700ms element with .loaderWrap class is gonna be removed
window.addEventListener('load', function () {
    setTimeout(function () {
        let x = document.querySelector('.loaderWrap')
        x.remove();
    }, 1700)
})
//After reaching the bottom of the screen - a "Scroll up button" will pop up
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        if ($('#scrollUp').is(":hidden"))
            $('#scrollUp').slideDown(500)
    } else if ($('#scrollUp').is(":visible")) {
        $('#scrollUp').hide(500);
    };
});



//Navigation bar visibility, after clicking element with ".openNavbar" class - ".navbar" is gonna be displayed to the user

$(document).ready(function () {
    $('.navbar').hide();
    $('#closeNavbarButton').click(function () {
            $('.navbar').fadeOut(300);
        }),
        $('#openNavbarButton').click(function () {
            $('.navbar').fadeIn(300);
        })
});
var i = 0; //starting point for the loop
let imagesCsgo = []; //Array of images


imagesCsgo[0] = '../assets/image/csgo/image_csgo.webp'
imagesCsgo[1] = '../assets/image/csgo/image_csgo1.webp'
imagesCsgo[2] = '../assets/image/csgo/image_csgo2.webp'
imagesCsgo[3] = '../assets/image/csgo/image_csgo3.webp'
imagesCsgo[4] = '../assets/image/csgo/image_csgo4.webp'
imagesCsgo[5] = '../assets/image/csgo/image_csgo5.webp'
imagesCsgo[6] = '../assets/image/csgo/image_csgo6.webp'
imagesCsgo[7] = '../assets/image/csgo/image_csgo7.webp'


window.addEventListener('load', function changeImage() {
    if($('#slideCsgo').is(':visible') === true){
    document.slideCsgo.src = imagesCsgo[i];
    if (i < imagesCsgo.length - 1) {
        i++;
    } else {
        i = 0;
    }}
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
//slideshow function, it incremenets number of the index in the array every 1500ms 
window.addEventListener('load', function changeImage() {
    if($('#slideDoom2016').is(':visible') === true){
    document.slideDoom2016.src = imagesDoom2016[i];
    if (i < imagesDoom2016.length - 1) {
        i++;
    } else {
        i = 0;
    }}
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
    if($('#slideOutlast').is(':visible') === true){
    document.slideOutlast.src = imagesOutlast[i];
    if (i < imagesOutlast.length - 1) {
        i++;
    } else {
        i = 0;
    }}
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
    if($('#slideCss').is(':visible') === true)
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
      if($('#slideCs').is(':visible') === true){
    document.slideCs.src = imagesCs[i];
    if (i < imagesCs.length - 1) {
        i++;
    } else {
        i = 0;
    }}
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
    if($('#slideDoomEternal').is(':visible') === true){
    document.slideDoomEternal.src = imagesDoomEternal[i];
    if (i < imagesDoomEternal.length - 1) {
        i++;
    } else {
        i = 0;
    }}
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
    if($('#slideDbd').is(':visible') === true){
    document.slideDbd.src = imagesDbd[i];
    if (i < imagesDbd.length - 1) {
        i++;
    } else {
        i = 0;
    }}
    setTimeout(changeImage, 1500);
});
let imagesResEv = [];
imagesResEv[0] = '../assets/image/residentev/residentev_1.webp'
imagesResEv[1] = '../assets/image/residentev/residentev_2.webp'
imagesResEv[2] = '../assets/image/residentev/residentev_3.webp'
imagesResEv[3] = '../assets/image/residentev/residentev_4.webp'
imagesResEv[4] = '../assets/image/residentev/residentev_5.webp'
imagesResEv[5] = '../assets/image/residentev/residentev_6.webp'


window.addEventListener('load', function changeImage() {
    if($('#slideResEv').is(':visible') === true){
    document.slideResEv.src = imagesResEv[i];
    if (i < imagesResEv.length - 1) {
        i++;
    } else {
        i = 0;
    }}
    setTimeout(changeImage, 1500);
});
let imagesBw = [];
imagesBw[0] = '../assets/image/blairwitch/bw_1.webp'
imagesBw[1] = '../assets/image/blairwitch/bw_2.webp'
imagesBw[2] = '../assets/image/blairwitch/bw_3.webp'
imagesBw[3] = '../assets/image/blairwitch/bw_4.webp'
imagesBw[4] = '../assets/image/blairwitch/bw_5.webp'
imagesBw[5] = '../assets/image/blairwitch/bw_6.webp'
imagesBw[6] = '../assets/image/blairwitch/bw_7.webp'


window.addEventListener('load', function changeImage() {
    if($('#slideBw').is(':visible') === true){
    document.slideBw.src = imagesBw[i];
    if (i < imagesBw.length - 1) {
        i++;
    } else {
        i = 0;
    }}
    setTimeout(changeImage, 1500);
});
let imagesEw = [];
imagesEw[0] = '../assets/image/evilwithin/ew_1.webp'
imagesEw[1] = '../assets/image/evilwithin/ew_2.webp'
imagesEw[2] = '../assets/image/evilwithin/ew_3.webp'
imagesEw[3] = '../assets/image/evilwithin/ew_4.webp'
imagesEw[4] = '../assets/image/evilwithin/ew_5.webp'
imagesEw[5] = '../assets/image/evilwithin/ew_6.webp'
imagesEw[6] = '../assets/image/evilwithin/ew_7.webp'
imagesEw[7] = '../assets/image/evilwithin/ew_8.webp'
imagesEw[8] = '../assets/image/evilwithin/ew_9.webp'



window.addEventListener('load', function changeImage() {
    if($('#slideEw').is(':visible') === true){
    document.slideEw.src = imagesEw[i];
    if (i < imagesEw.length - 1) {
        i++;
    } else {
        i = 0;
    }}
    setTimeout(changeImage, 1500);
});

let imagesSs4 = [];
imagesSs4[0] = '../assets/image/serioussam4/ss4_1.webp'
imagesSs4[1] = '../assets/image/serioussam4/ss4_2.webp'
imagesSs4[2] = '../assets/image/serioussam4/ss4_3.webp'
imagesSs4[3] = '../assets/image/serioussam4/ss4_4.webp'
imagesSs4[4] = '../assets/image/serioussam4/ss4_5.webp'
imagesSs4[5] = '../assets/image/serioussam4/ss4_6.webp'
imagesSs4[6] = '../assets/image/serioussam4/ss4_7.webp'



window.addEventListener('load', function changeImage() {
    if($('#slideSs4').is(':visible') === true){
    document.slideSs4.src = imagesSs4[i];
    if (i < imagesSs4.length - 1) {
        i++;
    } else {
        i = 0;
    }}
    setTimeout(changeImage, 1500);
});

let imagesSs3 = [];
imagesSs3[0] = '../assets/image/serioussam3/ss3_1.webp'
imagesSs3[1] = '../assets/image/serioussam3/ss3_2.webp'
imagesSs3[2] = '../assets/image/serioussam3/ss3_3.webp'
imagesSs3[3] = '../assets/image/serioussam3/ss3_4.webp'
imagesSs3[4] = '../assets/image/serioussam3/ss3_5.webp'
imagesSs3[5] = '../assets/image/serioussam3/ss3_6.webp'
imagesSs3[6] = '../assets/image/serioussam3/ss3_7.webp'
imagesSs3[7] = '../assets/image/serioussam3/ss3_8.webp'
imagesSs3[8] = '../assets/image/serioussam3/ss3_9.webp'



window.addEventListener('load', function changeImage() {
    if($('#slideSs3').is(':visible') === true){
    document.slideSs3.src = imagesSs3[i];
    if (i < imagesSs3.length - 1) {
        i++;
    } else {
        i = 0;
    }}
    setTimeout(changeImage, 1500);
});