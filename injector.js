function inject(element){
	html2inject = "";
	switch (element){
		case "contact":
			$.get('./pages/contact.html', function(data) {
				html2inject = data;
				return;
			});
			//$('#content_body').load("./pages/contact.html");
			break;
	}
	alert(JSON.stringify(html2inject));
	return JSON.stringify(html2inject);
}