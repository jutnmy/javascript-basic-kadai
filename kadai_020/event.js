const btn = document.getElementById('btn');
const textBefore = document.getElementById('text');

btn.addEventListener('click', () => {
  const textAfter = document.createElement('h2');
  textAfter.textContent = 'ボタンをクリックしました';
  textBefore.replaceWith(textAfter);
});