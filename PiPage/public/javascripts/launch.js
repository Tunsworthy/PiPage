function gpioaction(arg1,arg2){       
            var data = {};
            data.action = "write";
            data.gpio = arg1;
            data.status = arg2;
            console.log(data);
            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: '/ajax',                       
                error: function(data) {
                    alert("Error");
                }
            });
        }             
