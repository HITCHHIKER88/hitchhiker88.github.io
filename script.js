document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-audio');
    audio.play();

    document.getElementById('hype-button').addEventListener('click', function() {
        var hypeImage = document.getElementById('hype-image');
        hypeImage.style.display = 'block'; // Show the hype image
        hypeImage.style.top = '100%'; // Reset the position to bottom
        setTimeout(function() {
            hypeImage.style.top = '-100%'; // Move the hype image above the screen
        }, 10); // Delay for smoother transition
        setTimeout(function() {
            hypeImage.style.display = 'none'; // Hide the hype image after animation
        }, 3000); // Animation duration
    });

    // Target date: June 21st, 00:00:00 (UTC time)
    const targetDate = new Date('2024-06-21T00:00:00Z').getTime();

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const difference = targetDate - currentDate;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('countdown-text').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById('countdown-text').innerHTML = 'Countdown expired';
        }
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);

    // Initial call to display countdown immediately
    updateCountdown();
});
