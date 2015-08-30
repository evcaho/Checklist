$(document).on('ready', function(){
//this
	$("#add-button").click(function(){
		console.log($("#task-title").val());
		console.log($("#task-description").val());
		console.log($("#task-date").val());
		$("#task-list").append(
			$("<li>" +  
    		  	"<input type=\"checkbox\">" +
	  			$("#task-title").val() +
				$("#task-description").val() +
				$("#task-date").val() + "</li>")
		);	
	});
	
		
});