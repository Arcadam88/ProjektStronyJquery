$(document).ready(function()
{
    $("#artButton").click(function()
    {
    $("#dlc").fadeIn(500);
    $("#info").fadeOut(500);
    $("#info").fadeOut(500);
    $("#info").fadeOut(500);
    }),
    $("#infoButton").click(function()
    {
        $("#dlc").fadeOut(500);
        $("#info").fadeIn(500);
        $("#placeholder").fadeOut(500);
        $("#placeholder").fadeOut(500);        
    }),
    $("#placeholderButton").click(function()
    {
        $("#dlc").fadeOut(500);
        $("#info").fadeOut(500);
        $("#placeholder").fadeIn(500);
        $("#placeholder").fadeOut(500); 
    }),
    $("#placeholderButton2").click(function()
    {
        $("#dlc").fadeOut(500);
        $("#info").fadeOut(500);
        $("#placeholder").fadeOut(500);
        $("#placeholder").fadeIn(500); 
    });
});

$(document).ready(function()
{
    $("#dropdownButton").click(function()
    {
        $("#dropdown").fadeToggle(200);
        $("#dropdown").animate ({top: "9%"})
    });
});