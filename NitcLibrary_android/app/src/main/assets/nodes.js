$.noConflict();
jQuery( document ).ready(function($)
{
	// var nodes = new Array();
	// nodes['621.38102'] = [100, 100];

	// for(var i in nodes)
	// {
	// 	console.log(i);
	// 	$("#nodes_list").append('<div style="top: '+nodes[i][0]+'px; left: '+nodes[i][1]+'px;" class="node_point"></div>');
	// }

	function coloring()
	{

		var flag = 0;

		var to_be_colored = $("#rack_storage").text();
		// alert(to_be_colored);

		$('.rack_part1').each(function()
		{

		    var thisval = $(this).text();
		    // alert(thisval)
		    if(thisval == to_be_colored)
		    {
		    	// alert(thisval)
		    	$(this).css("background-color", "lightgreen");
		    	flag = 1;
		    	// alert("thisval")
		    }

		});

		$('.rack_part2').each(function()
		{

		    var thisval = $(this).text();
		    // alert(thisval)
		    if(thisval == to_be_colored)
		    {
		    	// alert(thisval)
		    	$(this).css("background-color", "lightgreen");
		    	flag = 1;
		    	// alert("thisval")
		    }

		});

		if(flag == 0)
		{
			$('.error').fadeIn(400).delay(3000).fadeOut(400);
		}

	}

	setTimeout(coloring, 1000);

})