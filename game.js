// Game Variables
const pieces = document.querySelectorAll('.piece');
const message = document.querySelector('.message');
const hiddenButton = document.querySelector('.hidden-button');
let correctSequence = [1, 2, 3, 4];
let playerSequence = [];

// Add click event to puzzle pieces
pieces.forEach(piece => {
    piece.addEventListener('click', () => {
        const pieceId = parseInt(piece.getAttribute('data-id'));
        playerSequence.push(pieceId);
        piece.style.backgroundColor = '#ff4757';
        piece.style.transform = 'scale(0.95)';
        piece.style.transition = 'all 0.3s ease';
        
        // Check if sequence is correct
        if (playerSequence.length === correctSequence.length) {
            if (arraysEqual(playerSequence, correctSequence)) {
                // Show success message and button
                message.classList.remove('hidden');
                hiddenButton.classList.remove('hidden');
                
                // Add confetti effect
                createConfetti();
            } else {
                // Reset game
                resetGame();
            }
        }
    });
});

// Helper function to compare arrays
function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
}

// Reset game function
function resetGame() {
    playerSequence = [];
    pieces.forEach(piece => {
        piece.style.backgroundColor = '#ff6b81';
        piece.style.transform = 'scale(1)';
    });
    alert('Coba lagi ya! Urutannya belum benar.');
}

// Confetti effect
function createConfetti() {
    const confettiCount = 100;
    const colors = ['#ff6b81', '#ff4757', '#ff9a9e', '#fad0c4'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
