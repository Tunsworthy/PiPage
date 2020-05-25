//Create a dismissable alert, inputs are message and type
function alertbox(message,type) {
	//id = event.target.id.toString().split('-')[0];
	//item = idnospace(event.target.id.toString().split('-')[1]);
	var alerts = document.getElementById("alerts");

	//This section builds the message
	var coldiv = document.createElement("div");

	if(type == "danger"){
		coldiv.setAttribute('class', 'alert alert-danger alert-dismissible fade show')	
	}
	if(type === "success"){
		coldiv.setAttribute('class', 'alert alert-success alert-dismissible fade show')
	}
	if(typeof type == "undefined"){
		coldiv.setAttribute('class', 'alert alert-primary alert-dismissible fade show')
	}

	var messagetext = document.createTextNode(message)
	

	var button = document.createElement("button")
	button.setAttribute('class', 'close')
	button.setAttribute('data-dismiss', 'alert')
	button.setAttribute('aria-label', 'Close')
	var spanbutton = document.createElement("span")
	spanbutton.setAttribute('aria-hidden', 'true')
	var spanbuttontext = document.createTextNode("\u00d7")
	spanbutton.appendChild(spanbuttontext)
	button.appendChild(spanbutton)

	coldiv.appendChild(messagetext)
	coldiv.appendChild(button)

	//console.log(coldiv)
	alerts.appendChild(coldiv)
}
