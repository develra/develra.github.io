//The purpose of this file is to enumerate all of the possible commands I want my "shell" to accept, and
//then shunting off the proper executions to the relevent files and giving a sensical response; as such
//it will be a bit verbose, but it makes it -super- easy for me to add and remove functionality on the fly
function execute(command){
	
	response = ""
	switch (command) {
		case "blog":
		case "Blog":
			response = "opening blog...";
			break;
		case "rèsumè":
		case "Rèsumè":
		case "resume":
		case "Resume":
			response = "opening Rèsumè...";
			break;
		case "projects":
		case "Projects":
			response = "opening Project Page";
			break;
		case "contact":
		case "Contact":
			response = colorize("Contact25", "color4")+'</br>'+inject('contact');
			break;
		case "life":
		case "Life":
			response = "open Life..."
			break;
		case "clear":
			$("#cmd_log").html("");
			break;
		default:
			response = colorize("command '"+command+"' not recognized; try 'help' for a list of commands",'error_color');
	}
	return response;
}
