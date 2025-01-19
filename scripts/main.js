document.addEventListener('DOMContentLoaded', () => {
  let isAnimating = false;

  const rocket = document.createElement('div');
  rocket.style.display = 'none';
  rocket.className = 'rocket';
  rocket.textContent = '🚀';
  document.body.appendChild(rocket);

  const rocketText = document.createElement('div');
  rocketText.style.display = 'none';
  rocketText.className = 'rocket-text';
  rocketText.textContent = 'Поехали!';
  document.body.appendChild(rocketText);

  const secretButton = document.querySelector('.secret-button');

  if (secretButton) {
    secretButton.addEventListener('click', () => {
      console.log('Button clicked!'); // Для отладки
      
      if (!isAnimating) {
        isAnimating = true;
        
        rocket.style.display = 'block';
        rocketText.style.display = "block";
        
        requestAnimationFrame(() => {
          rocket.classList.add('launch');
          rocketText.classList.add('show');
          
          // Сброс анимации
          setTimeout(() => {
            rocketText.style.display = 'none';
            rocket.style.display = 'none';
            rocket.classList.remove('launch');
            rocketText.classList.remove('show');
            isAnimating = false;
          }, 2000);
        });
      }
    });
  } else {
    console.error('Secret button not found!'); // Для отладки
  }
}); 