window.SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    p.textContent = transcript;
    if(e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    const superScript = transcript.replace(/mega|super|geil/gi, '👍🏻');
      p.textContent = superScript;


    if(transcript.includes('you are super')) {
        console.log('SUPER');
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start();

