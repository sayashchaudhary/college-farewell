var count = new Date("june 08,2019 20:00:00").getTime();
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
        clearInterval(a);
    }
},1000);

$(document).ready(function(){

    console.log("Jquery worked");

});
