document.getElementById('ratingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const rating = document.getElementById('rating').value;
    const ratingList = JSON.parse(localStorage.getItem('ratings')) || [];
    ratingList.push(rating);
    localStorage.setItem('ratings', JSON.stringify(ratingList));
    displayRatings();
    showSuccessMessage('Rating submitted successfully!');
});

function displayRatings() {
    const ratingList = JSON.parse(localStorage.getItem('ratings')) || [];
    const ratingListElement = document.getElementById('ratingList');
    ratingListElement.innerHTML = '';
    ratingList.forEach(function(rating) {
        const li = document.createElement('li');
        li.textContent = rating;
        ratingListElement.appendChild(li);
    });
}

document.getElementById('setTimer').addEventListener('click', function() {
    const minutes = document.getElementById('timerInput').value;
    const milliseconds = minutes * 60 * 1000;
    setTimeout(function() {
        alert('Time is up! Stay positive and keep going!');
    }, milliseconds);
});

document.getElementById('submitStory').addEventListener('click', function() {
    const story = document.getElementById('storyInput').value;
    const storyList = JSON.parse(localStorage.getItem('stories')) || [];
    storyList.push(story);
    localStorage.setItem('stories', JSON.stringify(storyList));
    displayStories();
    showSuccessMessage('Story submitted successfully!');
});

function displayStories() {
    const storyList = JSON.parse(localStorage.getItem('stories')) || [];
    const storyListElement = document.getElementById('storyList');
    storyListElement.innerHTML = '';
    storyList.forEach(function(story) {
        const li = document.createElement('li');
        li.textContent = story;
        storyListElement.appendChild(li);
    });
}

function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = message;
    document.body.appendChild(successMessage);
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

// Initial display
displayRatings();
displayStories();
