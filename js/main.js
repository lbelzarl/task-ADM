var repeat = setInterval(function() {
    var value = $( "input:checked" ).val();
    $('input').eq(value).attr('checked', false);
    value == 3 ? value = 0 : value++;
    console.log(value);
    $('input').eq(value).attr('checked', true);
    $('.tt4').hide();
    $('.tt4').eq(value).css('display', 'block');
}, 2000);

$( "input" ).on( "click", function() {
    // var value = $( "input:checked" ).val();
    // $('.tt4').hide();
    // $('.tt4').eq(value).css('display', 'block');
    });


