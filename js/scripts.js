var username = "";
    var userName = "<span class = 'username'> You : </span>";
    var ai = function(message)
    {
    	if (username.length < 3) 
    	{
    		username = message;
    		send_message("Nice To Meet You &nbsp;" + username + " How are U doing");
    	}
    }
    var send_message = function(message)
    {
    	var prevMessage= $("#container").html();
	    		if(prevMessage.length > 3)
	    		{
	    			prevMessage = prevMessage + "<br>";
	    		}
	    $("#container").html(prevMessage + "<span class='bot'>ChatBot </span>" + message );
    	
    }
    var get_username = function()
    {
    	send_message(" Hello What is Your Name ?");
    }
    	$(function()
    	{
    		get_username();
    		$("#textbox").keypress(function(event)
    		{
    			if(event.which == 13)
    			{
    				if ($("#enter").prop("checked")) 
    				{
    					console.log("Enter key Pressed ");
    					$("#send").click();
    					event.preventDefault();
    				}
    			}
    		});
    	});
    	$("#send").click(function(){
	    		var userMessage= $("#textbox").val();
	    		$("#textbox").val("");
	    		var prevMessage = $("#container").html();
	    		if(prevMessage.length > 3)
	    		{
	    			prevMessage = prevMessage + "<br>";
	    		}
	    		$("#container").html(prevMessage + userName + userMessage);
	    		$("#container").scrollTop($("#container").prop("scrollHeight"));
	    		ai(userMessage);
    	});
    