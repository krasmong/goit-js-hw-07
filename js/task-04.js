// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterValueEl = document.querySelector('#value');
console.log(counterValueEl);

let counterValue = 0;

const decrement = function () {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};

const increment = function () {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};

const decrementBtn = document.querySelector("[data-action='decrement']");
console.log(decrementBtn);

const incrementBtn = document.querySelector("[data-action='increment']");
console.log(incrementBtn);

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
