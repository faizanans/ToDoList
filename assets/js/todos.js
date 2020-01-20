//checks off the items on the list
$('ul').on('click','li', function () {
    $(this).toggleClass('completed');
});
//click to delete function and showcase bubble effect
$('ul').on('click','span', function (e) {
    $(this).fadeOut(500,function () {
        $(this).parent().remove();
        e.stopPropagation();
    })
    
})
$('input[type="text"]').keypress(function (e) {
    if (e.which == 13) {
        var userInput = $(this).val();
        $('ul').append('<li>' + '<span><i class="fa fa-ban"></i></span> '+ userInput + '</li>');
        $(this).val('');

    }

})
$(".fa-plus").click(function () {
    $('input[type="text"]').fadeToggle();
})