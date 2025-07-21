function startTimer(elementId) {
    let seconds = 0;
    const timerElement = document.getElementById(elementId);
    const interval = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }, 1000);

    return interval;
}

document.addEventListener('DOMContentLoaded', () => {
    const frontTimer = startTimer('timer-front');
    const backTimer = startTimer('timer-back');
});

