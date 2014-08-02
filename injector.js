function inject(element){
	html2inject = ""
	switch (element){
		case "contact":
			$.get('./pages/contact.html', function(data) {
				html2inject = data;
			});
			//$('#content_body').load("./pages/contact.html");
			break;
	}
	alert(html2inject);
	return html2inject.toString();
}