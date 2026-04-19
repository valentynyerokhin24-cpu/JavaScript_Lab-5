
const inputElement = document.getElementById('userInput');
const buttonElement = document.getElementById('actionBtn');
const displayElement = document.getElementById('resultArea');

console.log("--- Початковий стан сторінки ---");
console.log("Початковий текст у блоці:", displayElement.innerHTML); 


buttonElement.addEventListener('click', function() {
    
   
    const rawData = inputElement.value;

    
    console.log("--- Подія натискання на кнопку ---");
    console.log("Користувач ввів текст:", rawData);


    if (rawData.trim() !== "") {
        

        displayElement.textContent = "Ви написали: " + rawData;
        
   
        displayElement.style.color = "#818cf8"; 
        
        console.log("Статус: DOM успішно оновлено текстом користувача.");
        

        inputElement.value = "";
    } else {
     
        displayElement.textContent = "Помилка: Поле вводу порожнє!";
        displayElement.style.color = "#f87171";
        
        console.warn("Попередження: Спроба вводу порожнього рядка.");
    }
});


inputElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        console.log("Натиснуто клавішу Enter");
        buttonElement.click(); 
    }
});