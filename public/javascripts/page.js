
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
				if(alert !== false || typeof alert === "undefinied"){
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
	changestatus(gpio,status,false)
	await sleep(1000);
	changestatus(gpio,1)
}


window.setInterval(environmentals, 20000)

function environmentals() {
	var url = `/environmentals?gpio=11`

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
					var message = `temperature: ${data.temperature} humidity: ${data.humidity}`
					
					document.getElementById('temperature').textContent = data.temperature;
					document.getElementById('humidity').textContent = data.humidity;
					alertbox(message,data.type)
				});
			}
		)
		.catch(function(err) {
			console.error('Fetch Error -', err);
		});


}