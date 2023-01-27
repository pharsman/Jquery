$(document).ready(function () {
    $('#click').click(function () {
        $(this).hide(50,function(){
            alert('it is hidden')
        });
    })
    $('#double-clicks').dblclick(function () {
        $(this).hide();
    })
    $('#mouse-enter').mouseenter(function () {
        $(this).hide();
    })
    $('#mouse-leave').mouseleave(function () {
        $(this).hide();
    })
    $('#mouse-down').mousedown(function () {
        $(this).hide();
    })
    $('#mouse-up').mouseup(function () {
        $(this).hide();
    })
    $('#hover').hover(function () {
        $(this).hide();
    })
    $('#focus').focus(function () {
        $(this).css("background-color", "lightgray");
    })
    $('#blur').blur(function () {
        $(this).css("background-color", "red");
    })

    $('#focus-blur').focus(function () {
        $('#focus-blur').css("background-color", "yellow")
    })
    $('#focus-blur').blur(function () {
        $('#focus-blur').css("background-color", "brown")
    })
    $(".click-or-move").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    })
    $('#hide-show').click(function(){
        // $('#child').toggle()
        // $('#child').fadeIn(1000)
        // $('#child').fadeOut(1000)
        // $('#child').fadeToggle(1000)
        // $('#child').fadeTo(2000,0.5)
        // $('#child').slideDown()
        // $('#child').slideUp()
        $('#child').slideToggle()
    })
    $('#hide-show').click(function(){
        $('#animate').animate({
            left: '1250px',
            top: '300px',
            opacity: '0.5',
            width: '+=10',
            height: 'toggle'
        },600)
    })
    $('#start').click(function(){
        $('#panel').slideToggle(1000)
    })
    $('#stop').click(function(){
        $('#panel').stop()
    })

    $('#click-me').click(function(){
        $('#text').css('color','red').slideUp(2000).slideDown(1000)
    })
})
