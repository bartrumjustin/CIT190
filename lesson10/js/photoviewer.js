var request;                         
var $currentPhoto;                         
var photoList = {};                      
var $cont = $('#photoCont');     
var $miniPhotos = $('.minis');           

function crossfade($img) {           
    
    if ($currentPhoto) {                    
        $currentPhoto.stop().fadeOut('slow'); 
    }

    $img.css({                         
        
        
        position: "absolute"
    });

    $img.stop().fadeTo('slow', 1);     

    $currentPhoto = $img;                   

}

$(document).on('click', '.minis', function (e) { 
    var $img,
        src = $(this).attr('src'),
        title = $(this).attr('alt');

    request = src;
    

    e.preventDefault();                     

    $miniPhotos.removeClass('active');          
    $(this).addClass('active');
    console.log(request);

    if (photoList.hasOwnProperty(src)){       
        
            crossfade(photoList[src].$img);         
        }
    else {                                
        $img = $('<img/>');                   
        photoList[src] = {                        
            $img: $img                                             
        };

       
        $img.on('load', function () {          
            $img.hide();                        
            
            $cont.append($img);
            if (request === src) {
                crossfade($img);                  
            }                                  
        });

        $img.attr({                           
            'src': src,                         
            'alt': title || ''            
        });

    }

});


$('.minis').eq(0).click();                
