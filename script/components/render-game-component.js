export function renderGame(level) {
    const appEl = document.getElementById('main-box');

    const levels = {
        '1': 'легкий',
        '2': 'средний',
        '3': 'сложный'
    };
    let selectedLevel = levels[level];

    const appHtml = `
    <div class="main">
                <p class="selected-level">Отлично!!!<br><br>Вы выбрали <span class="text-level-color">${selectedLevel}</span> уровень</p>
            </div>`

    appEl.innerHTML = appHtml;
};