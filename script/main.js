
import { renderGame } from "./components/render-game-component.js";

let globalState = {
    level: '',
};

const levelEl = document.querySelectorAll('.level-input');
const startButtonEl = document.getElementById('start-button');

// Обработчик клика на  все инпуты выбора уровня
levelEl.forEach(input => {
    input.addEventListener('click', () => {
        globalState.level = input.dataset.index;
        console.log(globalState.level);
    });
});

// Обработчик клика на кнопку старт 
startButtonEl.addEventListener('click', () => {
    if (globalState.level) {
        renderGame(globalState.level);
    } else {
        alert('Пожалуйста, выберите уровень сложности');
    }
});
