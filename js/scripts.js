$(document).ready(function() {
	$("#prophecy").click(function(event) {
		event.preventDefault();

    var goodOccurances = [];
    var badOccurances = [];
    $("input:checkbox[name=unlucky]:checked").each(function() {
      var unluckyOccurances = parseInt($("input:checkbox[name=unlucky]:checked").val());
     
    });
    $("input:checkbox[name=lucky]:checked").each(function() {
      var luckyOccurances = parseInt($("input:checkbox[name=lucky]:checked").val());
     
    });
    alert(totalGood);



  });
});