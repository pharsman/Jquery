$(document).ready(function () {
    $('#btn1').click(function () {
        alert('Text: ' + $('#text').text())
    })
    $('#btn2').click(function () {
        alert('Text: ' + $('#text').html())
    })
    $('#btn3').click(function () {
        alert('Value: ' + $('#name').val())
    })
    $('#btn4').click(function () {
        alert($('#google').attr('href'))
    })

    $('#btn5').click(function () {
        $('#param1').text('Hello World')
    })
    $('#btn6').click(function () {
        $('#param2').html('<b>Hello World</b>')
    })
    $('#btn7').click(function () {
        $('#input').val('Hello World')
    })
    $('#btn8').click(function () {
        $('#param3').text(function (i, originText) {
            return 'Old Text: ' + originText + ` New text: Hello World! (index: ${i})`
        })
    })
    $('#btn9').click(function () {
        $('#param4').html(function (i, originText) {
            return 'Old html: ' + originText + ` New html: hello <b>World</b> (index: ${i})`
        })
    })
    $('#change').click(function(){
        $('#link').attr({
            'href': 'https://www.facebook.com/',
            'title': 'Facebook'
        })
        $('#link').text('Facebook')
    })
    $('#change-value').click(function(){
        $('#w3s').attr('href',function(i,originValue){
            return originValue + "/jquety"
        })
    })

})