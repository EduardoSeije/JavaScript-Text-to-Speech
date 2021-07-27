const playBtn = document.getElementById('play-button');
const pauseBtn = document.getElementById('pause-button');
const stopBtn = document.getElementById('stop-button');
const textInput = document.getElementById('text');
const speedInput = document.getElementById('speed');

playBtn.addEventListener('click', () => {
  playText(textInput.value);
});

pauseBtn.addEventListener('click', pauseText);

function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  };
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = speedInput.value || 1
  utterance.addEventListener('end', () => {
    textInput.disabled = false;
  });
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
}

function pauseText() {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  };
}