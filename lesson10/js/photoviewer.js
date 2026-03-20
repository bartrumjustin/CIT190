var request;                         
var $currentPhoto;                         
var photoList = {};                      
var $frame = $('#photoFrame');     
var $miniPhotos = $('.minis');           

function crossfade($img) {           
    
    if ($currentPhoto) {                    
        $currentPhoto.stop().fadeOut('slow'); 
    }

    $img.css({                         
        marginLeft: -$img.width() / 2,   
        marginTop: -$img.height() / 2    
    });

    $img.stop().fadeTo('slow', 1);     

    $currentPhoto = $img;                   

}

$(document).on('click', '.minis', function (e) { 
    var $img,                               
        src = this.href;                    
    request = src;                      

    e.preventDefault();                     // Stop default link behavior

    $miniPhotos.removeClass('active');          // Remove active from all thumbs
    $(this).addClass('active');             // Add active to clicked thumb

    if (photoList.hasOwnProperty(src)) {        // If cache contains this image
        if (photoList[src].isLoading === false) { // And if isLoading is false
            crossfade(photoList[src].$img);         // Call crossfade() function
        }
    } else {                                // Otherwise it is not in cache
        $img = $('<img/>');                   // Store empty <img/> element in $img
        photoList[src] = {                        // Store this image in cache
            $img: $img,                         // Add the path to the image
            isLoading: true                     // Set isLoading property to false
        };

        // Next few lines will run when image has loaded but are prepared first
        $img.on('load', function () {           // When image has loaded
            $img.hide();                        // Hide it
            // Remove is-loading class from frame & append new image to it
            $frame.removeClass('is-loading').append($img);
            photoList[src].isLoading = false;       // Update isLoading in cache
            // If still most recently requested image then
            if (request === src) {
                crossfade($img);                  // Call crossfade() function
            }                                   // Solves asynchronous loading issue
        });

        $frame.addClass('is-loading');        // Add is-loading class to frame

        $img.attr({                           // Set attributes on <img> element
            'src': src,                         // Add src attribute to load image
            'alt': this.title || ''             // Add title if one was given in link
        });

    }

});

// Final line runs once when rest of script has loaded to show the first image
$('.minis').eq(0).click();                // Simulate click on first thumb
