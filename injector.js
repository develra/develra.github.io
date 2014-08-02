function inject(element){
	html2inject = "";
	switch (element){
		case "contact":
			html2inject = fetch_page('./pages/contact.html')
			break;
	}
	return html2inject;
}

function fetch_page(page){
    var result="";
    $.ajax({
      url:page,
      async: false,  
      success:function(data) {
         result = data; 
      }
   });
   return result;
}