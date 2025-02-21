// Enhanced typing animation for the message
const messageElement = document.querySelector('.message-box p');
const originalText = messageElement.textContent;
messageElement.textContent = '';

let charIndex = 0;
const typingSpeed = 20; // Faster typing speed

function typeMessage() {
    if (charIndex < originalText.length) {
        messageElement.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, typingSpeed);
    }
}

// More noticeable floating effect for header
const header = document.querySelector('.ucapan-container h1');
header.style.animation = 'float 2s ease-in-out infinite';

// Enhanced rotation effect for photo frame
const photoFrame = document.querySelector('.photo-frame');
photoFrame.addEventListener('mouseenter', () => {
    photoFrame.style.animation = 'bounce 0.5s ease';
});

photoFrame.addEventListener('mouseleave', () => {
    photoFrame.style.animation = '';
});

// Enhanced glowing effect for journey button
const journeyButton = document.querySelector('.journey-button');
journeyButton.addEventListener('mouseenter', () => {
    journeyButton.style.animation = 'pulse 0.5s infinite, colorChange 1s infinite, glow 1s infinite';
});

journeyButton.addEventListener('mouseleave', () => {
    journeyButton.style.animation = '';
});

// Start animations when page loads
window.addEventListener('load', () => {
    typeMessage();
});

// Keyframes for animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes colorChange {
    0% { background: #ff6b81; }
    50% { background: #ff1a1a; }
    100% { background: #ff6b81; }
}`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes glow {
    0% { box-shadow: 0 0 5px #ff6b81; }
    50% { box-shadow: 0 0 20px #ff1a1a; }
    100% { box-shadow: 0 0 5px #ff6b81; }
}`, styleSheet.cssRules.length);
