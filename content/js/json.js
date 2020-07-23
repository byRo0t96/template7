function posts(start,end){
	var opt = "";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json_obt = JSON.parse(this.responseText);
			
			var posts_html = document.getElementById('posts');
			var more_html = document.getElementById('more');
			var html_code = "";
			
			var website="https://github.com/{user}/{repository}/";
			var website_package="https://raw.githubusercontent.com/{user}/{repository}/master/";
			
			for (i = start; i < json_obt.posts.length; i++) {
				

				
				//var https=json_obt.posts[i].screenshot.substring(0,8);
				
				
				var r_link = website.replace("{user}",json_obt.posts[i].user);
				var r_link = r_link.replace("{repository}",json_obt.posts[i].repository);
				
				var r_package = website_package.replace("{user}",json_obt.posts[i].user);
				var r_package = r_package.replace("{repository}",json_obt.posts[i].repository);
				
				if(json_obt.posts[i].screenshot.substring(0,8) == "https://" || json_obt.posts[i].screenshot.substring(0,7) == "http://"){
					var screenshot = json_obt.posts[i].screenshot;
				}else if(json_obt.posts[i].screenshot == ""){
					var screenshot = "content/img/no_image.jpg";
				}
				else{
					var screenshot = r_package+json_obt.posts[i].screenshot;
				}
				
				
				
				
				
				
				if(json_obt.posts[i].description.substring(0,8) == "https://" || json_obt.posts[i].description.substring(0,7) == "http://"){
					var desc_url = json_obt.posts[i].description;
					var desc_text = "";
					var xmlhttp_4 = new XMLHttpRequest();
					xmlhttp_4.open("GET", desc_url, false);
					xmlhttp_4.send();
					desc_text = xmlhttp_4.responseText;
				}else if(json_obt.posts[i].description=="description.txt"){
					var desc_url = r_package+"description.txt";
					var desc_text = "";
					var xmlhttp_4 = new XMLHttpRequest();
					xmlhttp_4.open("GET", desc_url, false);
					xmlhttp_4.send();
					desc_text = xmlhttp_4.responseText;
				}else if(json_obt.posts[i].description==""){
					desc_text = "No Description";
				}else{
					desc_text = json_obt.posts[i].description;
				}
				
				var open_modal = "'"+json_obt.posts[i].repository+"'";
				
				html_code+='<!-- '+json_obt.posts[i].title+' -->';
				html_code+='<div id="repo_'+json_obt.posts[i].repository+'" class="card php">';
				html_code+='<h2><a class="pointer" onclick="open_modal('+open_modal+')"> # '+json_obt.posts[i].title+'</a></h2>';
				html_code+='<div class="fakeimg center"><img class="img" src="'+screenshot+'"></div>';
				html_code+='<p>'+desc_text+'</p></div>';
				html_code+='<div id="'+json_obt.posts[i].repository+'" class="modal-window none"><div>';
				html_code+='<a href="#repo_'+json_obt.posts[i].repository+'" title="Close" class="modal-close">Close</a>';
				html_code+='hiiiiiiiii';
				html_code+='</div></div>';
				
				html_code+='<!-- '+json_obt.posts[i].title+' -->';
				


				
				
				//html_code+=json_obt.posts[i].user;
				if(i == end){break;}
			}
            posts_html.innerHTML=html_code;
			var start=end+1;
			var end=end+5;
            more_html.innerHTML='<button onclick="posts('+start+','+end+');">next</button>'
	}
	};
	xmlhttp.open("GET", "content/json/json.json", true);
	xmlhttp.send();
}

posts(0,3);

//start
function open_modal(hachtag){
	/*var hash = location.hash;*/
	var url = '#' + hachtag;
	window.location.href = url;
	document.getElementById(hachtag).style.display = "block";
}
//end