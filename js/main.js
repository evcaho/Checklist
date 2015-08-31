$(document).on('ready', function(){
//this
	$("#add-button").click(function(){
		console.log($("#task-title").val());
		console.log($("#task-description").val());
		console.log($("#task-date").val());
		
		var input = $("<input type=\"checkbox\">");
		var minus = $("<button type=\"button\" class=\"btn btn-primary btn-xs\">Delete</button>");
		var li = $("<li>" + " " + "<span class=\"span-title\">" +
	  			$("#task-title").val() + "</span>" + " " + 
			"<span class=\"span-description\">" +	$("#task-description").val() + "</span>" +
			"<span class=\"span-date\">" + $("#task-date").val() + "</span> </li>");
		li.prepend(input);	
		li.append(minus);
		$("#task-list").append(li);
			
		$(input).click(function(){
			$("#task-complete").append(li);		
		});
		$(minus).click(function(){
			li.remove();
		});
	});
	
		
});