// wait until the document is ready                                                                                                               
$(document).ready(function(){                                                                                                                     
    // listen to the events, when keys are pressed down                                                                                           
    $('#add-items').keydown(function(event){                                                                                                      
                                                                                                                                                  
        // check if the key pressed, was the enter key                                                                                            
        if(event.keyCode == 13) {                                                                                                                 
            // get value from input                                                                                                               
            var text = $('#add-items').val();                                                                                                     
            // create new item list for addition                                                                                                  
            var work = '<ul class="full-width no-strikethrough">' + text + '</ul>';                                                                 
            // add to the list                                                                                                                    
            $('#list-area').prepend(work); 
			$('add-items').val('');                                                                                                        
        }                                                                                                                                         
    });                                                                                                                                           
                                                                                                                                                  
});