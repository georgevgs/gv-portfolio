const startTime = new Date("April 10, 2013 00:00:000");
const elapsedYearTime = Date.now() - startTime;
const elapsedYears = (elapsedYearTime / 31_556_952_000).toFixed(0);
document.getElementById("years").innerHTML = elapsedYears;

const interval = setInterval(function() {
    const elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3).replace('.', '');
    
}, 100);