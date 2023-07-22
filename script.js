const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hoursNow = dateToday.getHours();
    let minutesNow = dateToday.getMinutes();
    let secondsNow = dateToday.getSeconds();

    if (hoursNow < 10) hoursNow = '0' + hoursNow;
    if (minutesNow < 10) minutesNow = '0' + minutesNow;
    if (secondsNow < 10) seconds = '0' + secondsNow;
    
    hours.textContent = hoursNow;
    minutes.textContent = minutesNow;
    seconds.textContent = secondsNow;
})

