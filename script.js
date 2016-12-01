$(document).ready(function () {
    $('#button').click(function () {
        var toAdd = $('input[name=checkListItem]').val();
        var bulletPoint = document.createTextNode('+');
        $('.list').append('<div class="item">' + bulletPoint + toAdd + '</div>');
    });
    $(document).on('click', '.item', function () {
        $(this).toggleClass("strike");  
    });
});
