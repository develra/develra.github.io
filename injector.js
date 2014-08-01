function inject(element){
	file = ""
	switch (element){
		case "contact":
			$('#content_body').load("./pages/contacts.html");
			break;
	}
	return "";
}