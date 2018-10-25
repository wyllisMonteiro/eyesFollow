$( document ).ready(function() {
    $( window ).on("mousemove", function(e) {
        $( ".leftEye .red" ).css( { 
            left: 45 + e.pageX / 20 + "px",
            top: 45 + e.pageY / 20 + "px"
        } );

        $( ".rightEye .red" ).css( { 
            left: 45 + e.pageX / 20 + "px",
            top: 45 + e.pageY / 20 + "git px"
        } );
    })
})