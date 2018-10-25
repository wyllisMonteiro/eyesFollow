$( document ).ready(function() {
    $( window ).on("mousemove", function(e) {
        var widthScreen = $( window ).width();
        var widthEye = $( ".leftEye" ).width();
        console.log( widthScreen )

        $( ".leftEye .red" ).css( { 
            left: 45 + e.pageX / 20 + "px",
            top: 45 + e.pageY / 20 + "px"
        } );

        $( ".rightEye .red" ).css( { 
            left: 45 + e.pageX / 20 + "px",
            top: 45 + e.pageY / 20 + "px"
        } );
    })
})