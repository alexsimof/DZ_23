


function transformTime(mins) {
  if (+ mins) {

    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return `${hours} часов и ${minutes} минут`;

  } else {

    alert('Введите коректное время')
  }
};

let result = document.getElementById('result');
let convertTime = transformTime(prompt('Этот скрипт переводит минуты в часы. Максимально 3000 минут!'));

result.innerText = `${convertTime}`

