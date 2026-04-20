let score = 0;
let timeLeft = 0;
let gameTimer;
let currentDifficulty = "";

const startBtn = document.getElementById('startBtn');
const pixel = document.getElementById('pixel');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');

// Перевірка, що скрипт підключено [cite: 10]
console.log("--- Скрипт активовано ---");

startBtn.addEventListener('click', () => {
    const diff = document.getElementById('difficulty').value;
    const color = document.getElementById('color').value;

    if (!diff || !color) return;

    currentDifficulty = diff;
    document.getElementById('setup').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    pixel.style.backgroundColor = color;
    
    // Динамічна зміна стилів через об'єкт style [cite: 21-22]
    let size = 50;
    if (diff === 'lazy') size = 60;
    if (diff === 'catch') size = 30;
    pixel.style.width = size + 'px';
    pixel.style.height = size + 'px';

    console.log("Гру розпочато! Складність: " + diff);

    newRound();
});

function newRound() {
    clearInterval(gameTimer);
    
    if (currentDifficulty === 'lazy') timeLeft = 4;
    else if (currentDifficulty === 'normal') timeLeft = 2;
    else timeLeft = 1;

    timerEl.textContent = timeLeft;
    movePixel();

    gameTimer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) gameOver();
    }, 1000);
}

function movePixel() {
    const x = Math.random() * (window.innerWidth - pixel.offsetWidth);
    const y = Math.random() * (window.innerHeight - 150) + 100;
    pixel.style.left = x + 'px';
    pixel.style.top = y + 'px';
    
    // Логування координат у консоль [cite: 10]
    console.log("Координати: x=" + Math.round(x) + ", y=" + Math.round(y));
}

pixel.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;
    console.log("Клік! Рахунок: " + score);
    newRound();
});

function gameOver() {
    clearInterval(gameTimer);
    console.log("--- Кінець гри. Результат: " + score + " ---");
    alert("Game over! Your score is " + score);
    // location.reload(); // Тимчасово вимкнено, щоб ти бачив логи
}
