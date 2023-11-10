let count = 0;

const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');

clickButton.addEventListener('click', function() {
  count++;
  clickCount.textContent = count;
});