$.noConflict();
jQuery( document ).ready(function($)
{
	var nodes = new Array();
	nodes['621.38102'] = [100, 100];

	for(var i in nodes)
	{
		console.log(i);
		$("#nodes_list").append('<div style="top: '+nodes[i][0]+'px; left: '+nodes[i][1]+'px;" class="node_point"></div>');
	}

	function init(val)
	{

		var to_be_colored = 624.15101;

		$('.rack_part1').each(function()
		{

		    var thisval = $(this).text();
		    if(thisval == to_be_colored)
		    {
		    	$(this).css("background-color", "pink");
		    }

		});

	}

})