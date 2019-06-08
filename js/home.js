var count = new Date("june 08,2019 18:00:00").getTime();
var a = setInterval(function (){
    var now = new Date().getTime();
    var b = count - now;

    var days = Math.floor(b/(1000*60*60*24));
    var hours = Math.floor(b%(1000*60*60*24)/(1000*60*60));
    var minutes = Math.floor(b%(1000*60*60)/(1000*60));
    var seconds = Math.floor(b%(1000*60)/1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (b <=0) {
        var days = 0;
        var hours = 0;
        var minutes = 0;
        var seconds = 0;

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }
},1000);
