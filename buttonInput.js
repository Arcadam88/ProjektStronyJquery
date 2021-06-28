$(document).ready(function() //kiedy dokument będzie gotowy, załadowany funkcja może zostać załadowana
{
    $("#artButton").click(function() //pierwszy przycisk
    {
    $("#dlc").fadeIn(500); //wyświetla okno z elementem o id DLC
    $("#info").fadeOut(500); //ukrywa okno z elementem o id info
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