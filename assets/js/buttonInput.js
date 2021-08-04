$(document).ready(function () //kiedy dokument będzie gotowy, załadowany funkcja może zostać załadowana
    {
        $("#dlcButton").click(function () {
                $("#dlc").slideDown(500); //wyświetla okno z elementem o id DLC
                $("#info, #picture").fadeOut(500); //ukrywa okno z elementem o id info
            }),
            $("#infoButton").click(function () {
                $("#dlc, #picture").fadeOut(500);
                $("#info").slideDown(500);
            }),
            $("#pictureButton").click(function () {
                $("#dlc, #dlcText, #info").fadeOut(500);
                $("#picture").slideDown(500);
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
        if ($(".loginForm").is(":visible")) {
            $(".loginForm").hide(500)
        } else {
            $(".loginForm").show(500)
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

window.onload = function () {
    setTimeout(function () {
        let x = document.querySelector('.loaderWrap')
        x.remove();
    }, 1500)
}

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