
$(function(){               
    $('.gpio-button').on('click', function(e,req,res){       
            var data = {};
            data.action = "write";
            data.gpio = $(this).data("gpio");
            data.status = $(this).data("status");
            console.log(data);
            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: '/ajax',                       
                error: function(data) {
                    alert("Error");
                },
                succes: function(data) {
                    alert("succes");
                }
        });
    });             
});          