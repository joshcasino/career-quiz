$(document).ready(function() {
  $("form#carPath").submit(function(event) {

    var name = $("#nameQuizForm").val();
    var style = parseInt($("input:radio[name=style]:checked").val());
    var environment = parseInt($("input:radio[name=environment]:checked").val());
    var programming = parseInt($("input:radio[name=programming]:checked").val());
    var logic = parseInt($("input:radio[name=logic]:checked").val());
    var excited = parseInt($("input:radio[name=excited]:checked").val());
    var score = parseInt(style + environment + programming + logic + excited);


    $("#nameDisplay").text(name);

    if (!score) {
      alert("Please enter all choices");
    }
    else if (score < 14) {
      $("#ruby").show();
      $("#php").hide();
      $("#java").hide();
      $("#cSharp").hide();
      $("#css").hide();
    }
    else if (score > 14 && score < 18){
      $("#php").show();
      $("#ruby").hide();
      $("#java").hide();
      $("#cSharp").hide();
      $("#css").hide();
    }
    else if (score > 18 && score < 23){
      $("#cSharp").show();
      $("#php").hide();
      $("#java").hide();
      $("#ruby").hide();
      $("#css").hide();
    }
    else if(score > 23 && score < 28){
      $("#css").show();
      $("#php").hide();
      $("#java").hide();
      $("#cSharp").hide();
      $("#ruby").hide();
            }
    else {
      $("#java").show();
      $("#php").hide();
      $("#ruby").hide();
      $("#cSharp").hide();
      $("#css").hide();
    }

    event.preventDefault();

    });

  $("#resetBtn").click(function() {
    $("#ruby").hide();
    $("#php").hide();
    $("#cSharp").hide();
    $("#css").hide();
    $("#java").hide();
  	$("#ruby#php#cSharp#java#css").hide();
  	$(".container").css("background-color", "white");
	});
});
