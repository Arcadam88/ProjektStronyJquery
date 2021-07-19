$(document).ready(function() //kiedy dokument będzie gotowy, załadowany funkcja może zostać załadowana
{
    $("#dlcButton").click(function()
    {
    $("#dlc").fadeIn(500); //wyświetla okno z elementem o id DLC
    $("#info, #picture").fadeOut(500); //ukrywa okno z elementem o id info
    }),
    $("#infoButton").click(function()
    {
        $("#dlc, #picture").fadeOut(500);
        $("#info").fadeIn(500);       
    }),
    $("#pictureButton").click(function()
    {
        $("#dlc, #dlcText, #info").fadeOut(500);
        $("#picture").fadeIn(500);
    });
});

$(document).ready(function()
{
    $("#scrollUp").click(function()
    {
        $(window).scrollTop(0,0);
    });
});


//button hiding or displaying button group with "games" button etc.
$(document).ready(function() 
{
    {
       $(".btn-group").hide(); 
    }
    $("#menu").click(function()
    {
        $(".btn-group").fadeToggle(300);
    });
}); 

//when website is loaded, it displays fadeIn animation
$(document).ready(function()
{
    $("html").fadeIn();
});

// toggles loginForm class visibilty
$(document).ready(function() 
{
    $("#loginFormButton").click(function()
    {
        if($(".loginForm").is(":visible"))
        {
            $(".loginForm").hide(750)
        }
        else
        {
            $(".loginForm").show(750)
        }
    });
});

$(document).ready(function()
{
    $("#dlcText").hide();

{
    $("#dlcText").slideDown(1300);
}
});

/*
$(document).ready(function()
{
    $("#csgoHtml").mouseover(function()
    {
        $("#csgoText").width("100px");
    }),
    $("#csgoHtml").mouseout(function()
    {
        $("#csgoText").width("0px");
    });
});
/*
function hoverIn()
{
    var z = document.getElementById("csgoText");
    z.style.width = "96.5%";
    z.style.height = "10%";
    z.className.replace()
    
}

function hoverOut()
{
    var x = document.getElementById("csgoText");
    x.style.width = "0%"
}
*/

/*
$(document).ready(function()
{
    $("#csgoText").hide()
    $("#csgoHtml, #csgoText").mouseover(function()
    {
        $("#csgoText").slideDown(300);
    }),
    $("#csgoText, #csgoHtml").mouseout(function(){
        $("#csgoText").slideUp(400);
    }); 
});
*/

/*
$(document).ready(function()
{
    {
        $("#csgoText").hide();
    }
    $("#csgoHtml").mouseover(function(){
        $("#csgoText").fadeIn(500);
    }),
    $("#csgoText").mouseout(function()
    {
        $("#csgoText").fadeOut(500);
    });
});
*/
/*
$(document).ready(function()
{
    $("#menu").click(function()
    {
        $(".btn-group").animate({opacity: "hide", right: "100%"},"linear");
    },
    
    $("#menu").click(function()
    {
        $(".btn-group").animate({opacity: "0", right: "0%"}, "linear");
    }));
});
*/


/* //deprecated (Element wasn't responsive as the rest of the website (replaced with bootstrap))
$(document).ready(function()
{
    $("#dropdownButton").click(function()
    {
        $("#dropdown").fadeToggle(200);
        $("#dropdown").animate ({top: "9%"})
    });
});
*/