setInterval(() => {
	document.getElementsByTagName("body")[0].innerHTML +=
		'<div class="time">' + new Date().getSeconds() + "</div>";
}, 1000);
