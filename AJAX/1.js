$(document).ready(function(){
    $.get (
        "http://api.openweathermap.org/data/2.5/weather",
        {
            "id" : "491422",
            "appid" : "cbd9b3d9b6d4f3d9633023184e218885"
        },
        function(data){
            console.log(data);
        }
    );
});