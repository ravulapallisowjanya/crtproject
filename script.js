function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12; // 12-hour format

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    document.getElementById('second').style.transform = `rotate(${secondsDegrees}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minutesDegrees}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hoursDegrees}deg)`;

    // Update time display
    document.getElementById('timeDisplay').innerText = now.toLocaleTimeString();
}

// Initial call and set interval to update clock every second
setInterval(updateClock, 1000);
updateClock();
