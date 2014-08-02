function inject(element){
	switch (element){
		case "contact":
			$.get('./pages/contact.html', function(data) {
				alert($.parseHTML(data));
				return $.parseHTML(data);
			});
			//$('#content_body').load("./pages/contact.html");
			break;
	}
}