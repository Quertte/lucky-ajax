const form = document.querySelector('#form');

// document.addEventListener('DOMContentLoaded', (event) => {

// PSEUDO-код:
// 1 - перехватить событие отправки формы
// 2 - предотвратить действие по умолчанию для этого события
// 3 - отправить AJAX-сообщение на сервер
// 4 - когда сообщение AJAX готово, отображаем новый бросок кубика

// });
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { action, method, sides } = event.target;

  const response = await fetch(action, {
    method,
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      sides: sides.value,
    }),
  });

  const data = await response.text();
  const diesContainer = document.querySelector('#die-container');
  diesContainer.innerHTML = data;
});
