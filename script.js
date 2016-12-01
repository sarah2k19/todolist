$(document).ready(function () {
    $('#button').click(function () {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).(function () {
        $('.list').on('click', 'item', function () {   
            $(this).toggleClass("strike"); 
        });
    });
});
