const count = new Date("june 08,2019 18:00:00").getTime();
const a = setInterval(function () {
    const now = new Date().getTime();
    const b = count - now;

    let days = Math.floor(b / (1000 * 60 * 60 * 24));
    let hours = Math.floor(b % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(b % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(b % (1000 * 60) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (b <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }
}, 1000);
