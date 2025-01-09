
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
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
sounds.forEach((sound) => {
  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = sound;

  button.addEventListener('click', () => {
    stopSounds(); // Stop currently playing sounds

    // Append audio element to the DOM
    let audio = document.querySelector(`audio[data-sound="${sound}"]`);
    if (!audio) {
      audio = document.createElement('audio');
      audio.src = `sounds/${sound}.mp3`;
      audio.setAttribute('data-sound', sound);
      document.body.appendChild(audio);
    }

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
