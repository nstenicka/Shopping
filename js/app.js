// document ready before functions load                                                                                                              
$(document).ready(function(){                                                                                                                                                                                                              
    $('#add-items').keydown(function(event){                                                                                           
        if(event.keyCode == 13) {                                                                                                              
            var text = $('#add-items').val();                                                                                               
            var work = '<p class="full-width no-strikethrough">' + text + '</p>';                                                                                                                  
            $('#list-area').prepend(work);                                                                                                        
        }                                                                                                                                         
    });                                                                                                                                                                                                                                                                                         
});