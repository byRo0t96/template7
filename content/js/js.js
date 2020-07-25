function js(filename, filetype){
    if (filetype=="js"){
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css"){
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
	else if (filetype=="ico"){
		var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = filename;
		document.getElementsByTagName('head')[0].appendChild(link);
    }
	else if (filetype=="title"){
		document.title=filename;
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}

/**/
function loader() {	
	myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
loader();


js("content/css/css.css", "css");//original style
js("content/css/langs.css", "css");//style langs
js("content/css/fonts/Iceland/Iceland.css", "css");//fonts
js("content/css/fonts/font-awesome/font-awesome.min.css", "css");//fonts
js("content/img/Ro0t-96_v3.ico", "ico");// page title
js("content/js/json.js", "js");// json
js("content/css/modal.css", "css");//modal 
js("Ro0t96 | Official Website", "title");// page title