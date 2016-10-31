// This is where it all goes :)

(window).scroll(function() {
    var threshold = 50;
    $("#test").html($(window).scrollTop());
    if ($(window).scrollTop() >= threshold)
        $('#fixed-img').addClass('fixed');
    else
        $('#fixed-img').removeClass('fixed');
    var check = $("#content").height() - $("#fixed-img").height()-21;
    if ($(window).scrollTop() >= check)
        $('#fixed-img').addClass('bottom');
    else
        $('#fixed-img').removeClass('bottom');
});