
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function changestatus(gpio,status,alert){
		var url = `/relay?gpio=${gpio}&status=${status}`
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
				if(!alert){
					alertbox(data.message,data.type)
				}
				});
			}
		)
		.catch(function(err) {
			console.error('Fetch Error -', err);
		});
}


async function pcpoweron(gpio,status){
	changestatus(gpio,status,fasle)
	await sleep(1000);
	changestatus(gpio,1)
}
