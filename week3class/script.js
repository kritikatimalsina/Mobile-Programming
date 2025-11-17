// Animation Effects - Chain multiple animations with different properties
$("#animateBtn").click(function() {
    var box = $("#animatedBox");
    var text = $("#animatedText");
    
    // Disable button during animation
    $(this).prop("disabled", true);
    
    // Animation 1: Move right, increase size, change colors
    box.animate({
        left: "300px",
        width: "200px",
        height: "200px",
        backgroundColor: "#e74c3c"
    }, 1000, function() {
        text.animate({
            fontSize: "24px",
            color: "#fff"
        }, 500);
    });
    
    // Animation 2: Move down, change to square, different color
    box.delay(1500).animate({
        top: "150px",
        width: "180px",
        height: "180px",
        backgroundColor: "#9b59b6"
    }, 1000, function() {
        text.animate({
            fontSize: "28px",
            color: "#ffeb3b"
        }, 500);
    });
    
    // Animation 3: Move left, become wider, change color
    box.delay(500).animate({
        left: "100px",
        width: "250px",
        height: "150px",
        backgroundColor: "#2ecc71"
    }, 1000, function() {
        text.animate({
            fontSize: "20px",
            color: "#000"
        }, 500);
    });
    
    // Animation 4: Move up-right, change to tall rectangle
    box.delay(500).animate({
        left: "400px",
        top: "50px",
        width: "120px",
        height: "220px",
        backgroundColor: "#f39c12"
    }, 1000, function() {
        text.animate({
            fontSize: "16px",
            color: "#fff"
        }, 500);
    });
    
    // Animation 5: Return to initial position and properties
    box.delay(500).animate({
        left: "0px",
        top: "0px",
        width: "150px",
        height: "150px",
        backgroundColor: "#3498db"
    }, 1200, function() {
        text.animate({
            fontSize: "18px",
            color: "#fff"
        }, 500, function() {
            // Re-enable button after animation completes
            $("#animateBtn").prop("disabled", false);
        });
    });
});