$(document).ready(function() {
	$("#go").click(function(event) {
		event.preventDefault();

		var bigNumber = parseInt($("#countUp").val());
	
		var smallNumber = parseInt($("#multiple").val());
	
		var i = smallNumber;
		
		for(var i = smallNumber; i <= bigNumber; i += smallNumber) {
			$("#results").append(i + ", ");
    
    //   if (bigNumber === " " || smallNumber === " ") {
    //     alert("You're missing a number!");
    //   } else if (isNaN(bigNumber) || isNaN(smallNumber) {
    //     alert("please enter a NUMBER");
    //   } else {
    //     $("results").append(i + ", ");
    // }
	});
});