const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = () => {
  console.log('voice is activated, speak to microphone');
};
recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};
// add listener to btn
btn.addEventListener('click', () => {
  recognition.start();
});
function readOutLoud(msg) {
  const speech = new SpeechSynthesisUtterance();
  if (msg.includes('how')) {
    const finalText =
      responseArray[Math.floor(Math.random() * responseArray.length)];
    speech.text = finalText;
  } else {
    const finalText = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
    speech.text = finalText;
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 0.7;
  window.speechSynthesis.speak(speech);
  setTimeout(() => {
    content.textContent = '';
  }, 5000);
}
const responseArray = [
  'Do you really care?',
  'overwork and underpaid',
  'Somewhere between better and best',
  'Better now that you asked',
  'At minding my own business? Better than most people',
  'overwork and underpaid',
  'Can not complain. Nobody listens anyway',
  'Like you, but better.',
];
const funnyTexts = [
  'I am not young enough to know everything.',
  'Love is in the air. Do not breathe.',
  'I thought I had seen the pinnacle of stupid. Then I met you.',
  'Everyone has the right to be stupid. But you’re abusing the privilege.',
  'Sorry for the awful but accurate things I said about you.',
  'Tell me… Is being stupid a profession, or are you just gifted?',
  ' Don’t piss me off! I’m running out of places to hide the bodies.',
  ' If I agreed with you we’d both be wrong.',
  'You’re deeply offended by the things I say? Imagine all the stuff I hold back.',
  'Don’t be humble… you’re not that great.',
  'You’re not that lucky, and I’m not that desperate!',
  'You are so lucky to have me.',
  'The last thing I want to do is hurt you. But it’s still on the list.',
  'I’m returning your nose. I found it in my business.',
  'Feed your own ego, I’m busy.',
  'Zombies eat brains. You’re safe.',
  ' I want you to know someone cares. Not me. But, someone cares.',
];
