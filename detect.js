//Detect if onmessage is used if so notify background.html
//Thanks to chromesniffer for providing a plugin that made me understand how this all works.
(function () {
	window.onmessage = function(message){
		console.log(message);

		var jsonString = JSON.stringify({"html5onmessage_detected": true});
		var meta = document.getElementById('html5detect_meta');
		meta.content = jsonString;

		var done = document.createEvent('Event');
		done.initEvent('ready', true, true);
		meta.dispatchEvent(done);
	}
})();
