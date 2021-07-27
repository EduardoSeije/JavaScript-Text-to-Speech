const playBtn = document.getElementById('play-button');
const pauseBtn = document.getElementById('pause-button');
const stopBtn = document.getElementById('stop-button');
const textInput = document.getElementById('text');
const speedInput = document.getElementById('speed');

playBtn.addEventListener('click', () => {
  playText(textInput.value);
})

function playText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = speedInput.value || 1
  utterance.addEventListener('end', () => {
    textInput.disabled = false;
  })
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
}