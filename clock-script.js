// Digital Clock Script - Multiple Time Zones

function updateClocks() {
    const now = new Date();

    // Local Time
    document.getElementById('localClock').textContent = formatTime(now);

    // Cape Town (SAST - UTC+2)
    const capetownTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' }));
    document.getElementById('capetownClock').textContent = formatTime(capetownTime);

    // London (GMT/BST - UTC+0/+1)
    const londonTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));
    document.getElementById('londonClock').textContent = formatTime(londonTime);

    // New York (EST/EDT - UTC-5/-4)
    const newyorkTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    document.getElementById('newyorkClock').textContent = formatTime(newyorkTime);

    // Tokyo (JST - UTC+9)
    const tokyoTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
    document.getElementById('tokyoClock').textContent = formatTime(tokyoTime);

    // Sydney (AEDT/AEST - UTC+11/+10)
    const sydneyTime = new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Sydney' }));
    document.getElementById('sydneyClock').textContent = formatTime(sydneyTime);

    // Dubai (GST - UTC+4)
    const dubaiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }));
    document.getElementById('dubaiClock').textContent = formatTime(dubaiTime);

    // Paris (CET/CEST - UTC+1/+2)
    const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
    document.getElementById('parisClock').textContent = formatTime(parisTime);
}

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Update clocks immediately and then every second
updateClocks();
setInterval(updateClocks, 1000);