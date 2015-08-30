$(document).on('ready', function(){
//this
	$("#add-button").click(function(){
		console.log($("#task-title").val());
		console.log($("#task-description").val());
		console.log($("#task-date").val());
		
		var input = $("<input type=\"checkbox\">");
		var li = $("<li>" +  
	  			$("#task-title").val() +
				$("#task-description").val() +
				$("#task-date").val() + "</li>");
		li.prepend(input);	
		$("#task-list").append(li);
			
		$(input).click(function(){
		$("#task-complete").append(li);
		});
	});
	
		
});