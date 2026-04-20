let score = 0;
let timeLeft = 0;
let gameTimer;
let currentDifficulty = "";

const startBtn = document.getElementById('startBtn');
const pixel = document.getElementById('pixel');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');

// Початковий запис для підтвердження доступу до DOM [cite: 8, 10]
console.log("DOM завантажено. Точка входу: window.document [cite: 8]");

startBtn.addEventListener('click', () => {
    const diff = document.getElementById('difficulty').value;
    const color = document.getElementById('color').value;

    // Перевірка вводу (Патерн валідації)
    if (!diff || !color) {
        console.warn("Попередження: Не обрано складність або колір!");
        return;
    }

    currentDifficulty = diff;
    document.getElementById('setup').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    // Маніпуляція стилями вузла через JS [cite: 6]
    pixel.style.backgroundColor = color;
    
    let size = 50;
    if (diff === 'lazy') size = 60;
    if (diff === 'catch') size = 30;
    
    pixel.style.width = size + 'px';
    pixel.style.height = size + 'px';

    console.log(`--- ГРУ ЗАПУЩЕНО ---`);
    console.log(`Складність: ${diff}, Колір: ${color}, Розмір: ${size}px`);
    
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
    
    // Вивід координат у консоль для звіту
    console.log(`Об'єкт переміщено: x=${Math.round(x)}, y=${Math.round(y)}`);
}

pixel.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;
    console.log(`Вдалий клік! Поточний рахунок: ${score}`);
    newRound();
});

function gameOver() {
    clearInterval(gameTimer);
    console.error(`ГРА ЗАВЕРШЕНА. Рахунок: ${score}`);
    alert(`Game over! Your score is ${score}, congratulations! Please, reload the page to start a new game.`);
    location.reload(); 
}
