function inject(element){
	html2inject = "";
	switch (element){
		case "contact":
			html2inject = $.get('./pages/contact.html', function(data) {
				return data;
			});
			//$('#content_body').load("./pages/contact.html");
			break;
	}
	alert(JSON.stringify(html2inject));
	return JSON.stringify(html2inject);
}