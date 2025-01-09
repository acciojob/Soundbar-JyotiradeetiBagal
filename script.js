// Array of sound names
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Reference to the buttons container
const buttonsContainer = document.getElementById('buttons');

// Function to stop all playing sounds
function stopSounds() {
  document.querySelectorAll('audio').forEach((audio) => {
    audio.pause();
    audio.currentTime = 0; // Reset the audio
  });
}

// Create a button for each sound
sounds.forEach((sound) => {
  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = sound;
  button.addEventListener('click', () => {
    stopSounds(); // Stop any currently playing sounds
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });
  buttonsContainer.appendChild(button);
});

// Create a stop button
const stopButton = document.createElement('button');
stopButton.className = 'stop';
stopButton.textContent = 'Stop';
stopButton.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopButton);
