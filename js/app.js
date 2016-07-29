$(document).ready( function(){
    function getItem() {
        $('#add-items').keydown(function (enter) {
            if (enter.keyCode == 13) {
                console.log("enter key was pressed");
                postItem();
            }
        });
    });
    getItem();

    /*Takes returned value from previous function and manipulates it*/
    function postItem() {
        var item = $('#add-items').val();
        var work = '<p class="full-width no-strikethrough">';
        $('#list-area').prepend(work);
        $('#add-items').val('');
        $('#list-area p:first-child')
    }
