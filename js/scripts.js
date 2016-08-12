$(document).ready(function() {
  $("form#carPath").submit(function(event) {

    var style = parseInt($("input:radio[name=style]:checked").val());
    var environment = parseInt($("input:radio[name=environment]:checked").val());
    var programming = parseInt($("input:radio[name=programming]:checked").val());
    var logic = parseInt($("input:radio[name=logic]:checked").val());
    var excited = parseInt($("input:radio[name=excited]:checked").val());
    var score = parseInt(style + environment + programming + logic + excited);
    // console.log(score);
    

    if (score < 14) {
      $("#ruby").show();
    } else if (score > 14 && score < 18){
        $("#php").show();
      } else if (score > 18 && score < 23){
          $("#cSharp").show();
        }else if(score > 23 && score < 28){
            $("#css").show();
          } else {
              $("#java").show();
            }

    event.preventDefault();

    });

    $("#resetBtn").click(function() {
      $("#result1").hide();
      $("#result2").hide();
      $("#result3").hide();
      $("#result4").hide();
      $("#result5").hide();
    		$("#result1#result2#result3#result4#result5").hide();
    		$(".container").css("background-color", "white");
    	});
});
