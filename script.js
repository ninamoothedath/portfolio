$(document).ready(function(){
	$("#writingt").click(function(){
		$(".nav").fadeToggle()
		$(".writing").fadeToggle()
	});

	$(".writing .return").click(function(){
		$(".nav").fadeToggle()
		$(".writing").fadeToggle()
	});

	$("#codet").click(function(){
		$(".nav").fadeToggle()
		$(".code").fadeToggle()
	});

	$(".code .return").click(function(){
		$(".nav").fadeToggle()
		$(".code").fadeToggle()
	});

	$("#motiont").click(function(){
		$(".nav").fadeToggle()
		$(".motion").fadeToggle()
	});

	$(".motion .return").click(function(){
		$(".nav").fadeToggle()
		$(".motion").fadeToggle()
	});

	$("#multit").click(function(){
		$(".nav").fadeToggle()
		$(".multi").fadeToggle()
	});

	$(".multi .return").click(function(){
		$(".nav").fadeToggle()
		$(".multi").fadeToggle()
	});

	$("#livet").click(function(){
		$(".nav").fadeToggle()
		$(".live").fadeToggle()
		console.log("liveclick")
	});

	$(".live .return").click(function(){
		$(".nav").fadeToggle()
		$(".live").fadeToggle()
	});

	$("#datat").click(function(){
		$(".nav").fadeToggle()
		$(".data").fadeToggle()
	});

	$(".data .return").click(function(){
		$(".nav").fadeToggle()
		$(".data").fadeToggle()
	});

	$(".pickmotion").click(function(){
		var vid = $(this).attr("src")
		console.log(vid)
		$("#frame").attr("src",vid)
	})


	// Data Graphic
	$("#g1").hover(
        function(){    
        $("#g1").css("width","90%");
        $("#g1").css("opacity","100%");
        $("#g2, #g3, #g4").toggle("slow");
        $(".caption").hide();
        console.log("hovered!");
      },function(){    
        $("#g1").css("width","40%");
        $("#g1").css("opacity","50%");
        $("#g2, #g3, #g4").toggle("slow");
        console.log("off!");
        }
      );

      $("#g2").hover(
        function(){    
        $("#g2").css("width","90%");
        $("#g2").css("opacity","100%");
        $("#g1, #g3, #g4").toggle("slow");
        $(".caption").hide();
        console.log("hovered!");
      },function(){    
        $("#g2").css("width","40%");
        $("#g2").css("opacity","50%");
        $("#g1, #g3, #g4").toggle("slow");
        console.log("off!");
        }
      );

      $("#g3").hover(
        function(){    
        $("#g3").css("width","90%");
        $("#g3").css("opacity","100%");
        $("#g1, #g2, #g4").toggle("slow");
        $(".caption").hide();
        console.log("hovered!");
      },function(){    
        $("#g3").css("width","40%");
        $("#g3").css("opacity","50%");
        $("#g1, #g2, #g4").toggle("slow");
        console.log("off!");
        }
      );

      $("#g4").hover(
        function(){    
        $("#g4").css("width","90%");
        $("#g4").css("opacity","100%");
        $("#g1, #g2, #g3").toggle("slow");
        $(".caption").hide();
        console.log("hovered!");
      },function(){    
        $("#g4").css("width","40%");
        $("#g4").css("opacity","50%");
        $("#g1, #g2, #g3").toggle("slow");
        console.log("off!");
        }
      );
	
});