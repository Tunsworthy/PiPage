
function poweron(gpio,status){
		var url = /relay/gpio/status
		fetch(url)
		.then(
			function(response) {
				if (response.status !== 200) {
					console.warn('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}

				// Examine the text in the response  
				response.json()
					.then(function(data) {
					console.log(data) 
				});
			}
		)
		.catch(function(err) {
			console.error('Fetch Error -', err);
		});
}