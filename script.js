// Це спрацює одразу при завантаженні сторінки
console.log("--- СИСТЕМА ГОТОВА ---");
console.log("Об'єкт document знайдено: ", document.title); [cite: 8, 10]

let score = 0;
let timeLeft = 0;
let gameTimer;
let currentDifficulty = "";

const startBtn = document.getElementById('startBtn'); [cite: 13]
const pixel = document.getElementById('pixel');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');

startBtn.addEventListener('click', () => {
    const diff = document.getElementById('difficulty').value;
    const color = document.getElementById('color').value;

    if (!diff || !color) return;

    currentDifficulty = diff;
    document.getElementById('setup').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    pixel.style.backgroundColor = color;
    
    console.log("Гру розпочато! Складність:", diff, "Колір:", color);

    newRound();
});

function newRound() {
    clearInterval(gameTimer);
    
    if (currentDifficulty === 'lazy') timeLeft = 4;
    else if (currentDifficulty === 'normal') timeLeft = 2;
    else timeLeft = 1;

    timerEl.textContent = timeLeft; [cite: 20]
    movePixel();

    gameTimer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft; [cite: 20]
        if (timeLeft <= 0) gameOver();
    }, 1000);
}

function movePixel() {
    const x = Math.random() * (window.innerWidth - pixel.offsetWidth);
    const y = Math.random() * (window.innerHeight - 150) + 100;
    pixel.style.left = x + 'px';
    pixel.style.top = y + 'px';
    
    // Логуємо координати кожного разу
    console.log(`Квадрат переміщено на: x=${Math.round(x)}, y=${Math.round(y)}`);
}

pixel.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score; [cite: 20]
    console.log("Клік! Поточні очки:", score);
    newRound();
});

function gameOver() {
    clearInterval(gameTimer);
    console.log("--- ГРА ЗАКІНЧЕНА ---");
    console.log("Фінальний рахунок:", score);
    
    alert(`Game over! Your score is ${score}!`);
    
    // ПРИБЕРИ location.reload(), щоб консоль не очищалася!
    // location.reload(); 
}
