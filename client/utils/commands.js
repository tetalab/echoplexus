(function(){
	var commands = {
		"^\/(nick|n)" : function(socket,client, body){
			client.setNick(body, room);
			$.cookie("nickname:" + room, body);
			$.cookie("ident_pw:" + room, ""); // clear out the old saved nick
			return;
		}
	};
	//Mapped here for O(1) time instead of O(N)
	var command_keys = _.keys(commands);
	window.EventBus.on("speak",function(socket,client,msg){
		//Find the command (if exists)
		var command = _.find(command_keys,function(command){
			return (new RegExp(command)).test(msg.body);
		});
		if (typeof command == "undefined") return;
		//Run the command
		commands[command](socket,client,msg.body.replace(new RegExp(command), "").trim());
		return false;
	});
})();