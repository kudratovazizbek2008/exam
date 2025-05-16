

const randomNumber = Math.floor(Math.random() * 100) + 1;
const input = document.getElementById('guessInput');
const button = document.getElementById('checkButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  const value = input.value;

  if (value === '') {
    alert('Iltimos, son kiriting!');
    return;
  }

  const guess = Number(value);

  if (isNaN(guess)) {
    alert('Faqat raqam kiriting!');
    return;
  }

  if (guess === randomNumber) {
    input.style.backgroundColor = '#d4edda';
    input.style.border = '2px solid green';
    message.textContent = 'Tabriklaymiz! To‘g‘ri javob!';
    console.log('To‘g‘ri javob:', randomNumber);
  } else if (guess < randomNumber) {
    input.style.backgroundColor = '#f8d7da';
    input.style.border = '2px solid red';
    message.textContent = 'Notug`ri javob: Kattaroq son kiriting';
    console.log('To‘g‘ri javob:', randomNumber);
  } else {
    input.style.backgroundColor = '#f8d7da';
    input.style.border = '2px solid red';
    message.textContent = 'Notug`ri javob: Kichikroq son kiriting';
    console.log('To‘g‘ri javob:', randomNumber);
  }
});
