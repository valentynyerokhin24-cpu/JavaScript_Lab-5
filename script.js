// Отримання доступу різними методами
const input1 = document.getElementById('userInput'); // Метод getElementById [cite: 13]
const btn1 = document.querySelector('#btnText');      // Метод querySelector [cite: 16]
const res1 = document.getElementById('resText');

const input2 = document.getElementById('htmlInput');
const btn2 = document.getElementById('btnHTML');
const res2 = document.getElementById('resHTML');

// Початковий вивід у консоль [cite: 8, 10]
console.log("Доступ до об'єкта document отримано.");
console.log("Початковий вміст resText:", res1.textContent);

// Обробник для textContent (безпечний текст) [cite: 20]
btn1.addEventListener('click', () => {
    res1.textContent = input1.value; 
    console.log("Оновлено через textContent:", input1.value);
});

// Обробник для innerHTML (парсинг HTML-коду) [cite: 21, 22]
btn2.addEventListener('click', () => {
    // Рядок буде пропущений через парсер браузера [cite: 22]
    res2.innerHTML = input2.value;
    console.log("Оновлено через innerHTML:", input2.value);
});
