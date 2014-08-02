function inject(element){
	file = ""
	switch (element){
		case "contact":
			$.get('./pages/contact.html', function(data) {
				alert( "Data Loaded: " + data);
			});
			//$('#content_body').load("./pages/contact.html");
			break;
	}
	return "";
}