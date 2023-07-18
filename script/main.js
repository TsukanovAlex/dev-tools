
import { renderGame } from "./components/render-game-component.js";
let globalState = {
    level: '',
};

const levelEl = document.querySelectorAll('.level-input');
const startButtonEl = document.getElementById('start-button');


levelEl.forEach(input => {
    input.addEventListener('click', () => {
        globalState.level = input.dataset.index;
        console.log(globalState.level);
    });
});

startButtonEl.addEventListener('click', () => {
    
    if (globalState.level) {
        renderGame(globalState.level);
    } else {
        alert('Пожалуйста, выберите уровень сложности');
    }
});
