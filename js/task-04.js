// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// Отримуємо посилання на елементи лічильника
const counter = document.getElementById('counter');
const valueSpan = document.getElementById('value');
const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');

// Ініціалізуємо значення лічильника
let counterValue = 0;

// Функція для оновлення значення лічильника в інтерфейсі
function updateCounterValue() {
  valueSpan.textContent = counterValue;
}

// Функція для збільшення значення лічильника
function incrementCounter() {
  counterValue += 1;
  updateCounterValue();
}

// Функція для зменшення значення лічильника
function decrementCounter() {
  counterValue -= 1;
  updateCounterValue();
}

// Додаємо слухачі подій для кнопок
incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);

// Оновлюємо інтерфейс початковим значенням лічильника
updateCounterValue();