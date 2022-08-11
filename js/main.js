

$(document).ready(function(){
    

    var fn = function onChange(index) {
        console.log('onChange', index);
    }

    $("div.the_slider").slicarousel({
        "nbr_slides": 5, 
        "arrows": false, 
        "autoplay": {
            "enabled": true, // Enable autoplay slider
            "direction": "rtl" // direction right to left rtl or left to right ltr
        },
        "onChange": fn,
    });
    

    $( ".dot_nav" ).prependTo( ".container_info" );

 

    //$( ".dot_nav" ).clone( ".container_info" );
    $( ".s_slide_2" ).html( '<video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg"><source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"></video>' );
 
});
 