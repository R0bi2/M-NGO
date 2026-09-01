const messages = [
    'Trau dich. Der erste Biss gehört dir.',
    'Knack — jetzt wird es saftig.',
    'Noch ein Stück. Keine Zurückhaltung.',
    'Klebrig ist nur eine andere Form von Freiheit.',
    'Fast weg. Aber der Geschmack bleibt.',
    'Komplett verschlungen. Zero regrets.'
];

const target = document.querySelector('#bite-target');
const orbit = document.querySelector('#click-orbit');
const count = document.querySelector('#bite-count');
const message = document.querySelector('#bite-message');
const reset = document.querySelector('#reset-bite');

let stage = 0;

function render() {
    target.dataset.stage = stage;
    count.textContent = `BITES / 0${stage}`;
    message.textContent = messages[stage];
    target.disabled = stage === 5;
    orbit.hidden = stage === 5;
    reset.hidden = stage !== 5;
}

target.addEventListener('click', () => {
    stage = Math.min(stage + 1, 5);
    render();
});

reset.addEventListener('click', () => {
    stage = 0;
    render();
});

render();