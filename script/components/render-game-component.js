export function renderGame() {
    const appEl = document.getElementById('app')

    const cards = '<div class="cards-of-shirt"></div>'.repeat(36)
    const appHtml = `
        <header class="header center">
            <div class="timer"></div>
            <button class="header-game-button" id="showCardButton">Показать карты</button>
            <button class="header-game-button" id="startNewGameButton">Начать заново</button>
        </header>
        <section class="center game-box">${cards}</section>
    `

    appEl.innerHTML = appHtml

    document
        .getElementById('startNewGameButton')
        .addEventListener('click', () => {
            console.log('restart')
            renderGame()
        })
    document.getElementById('showCardButton').addEventListener('click', () => {
        renderOpenedCard()
    })
}
// Функция показа карт
function renderOpenedCard() {
    const appEl = document.getElementById('app')
    let cardItems = ''
    for (let i = 1; i <= 36; i++) {
        cardItems += `<div class="cards-of-shirt card-item${i}"></div>`
    }
    const openCardHtml = `
            <header class="center header">
                <div class="timer"></div>
                <button class="header-game-button" id="showCardButton">Скрыть карты</button>
                <button class="header-game-button" id="startNewGameButton">Начать заново</button>
            </header>
            <section class="center game-box">${cardItems}</section>
        `
    appEl.innerHTML = openCardHtml

    document
        .getElementById('startNewGameButton')
        .addEventListener('click', () => {
            console.log('restart')
            renderGame()
        })
    document.getElementById('showCardButton').addEventListener('click', () => {
        renderOpenedCard()
    })
}
