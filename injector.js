function inject(element){
	switch (element){
		case "contact":
			$.get('./pages/contact.html', function(data) {
				alert(JSON.stringify(data));
				return JSON.stringify(data);
			});
			//$('#content_body').load("./pages/contact.html");
			break;
	}
}