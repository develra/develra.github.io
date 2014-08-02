function inject(element){
	file = ""
	switch (element){
		case "contact":
			$('#content_body').load("./pages/contact.html");
			break;
	}
	return;
}