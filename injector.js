function inject(element){
	switch (element){
		case "contact":
			$.get('./pages/contact.html', function(data) {
				alert(data.toString());
				return data.toString();
			});
			//$('#content_body').load("./pages/contact.html");
			break;
	}
}