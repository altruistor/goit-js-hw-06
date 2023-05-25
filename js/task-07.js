// Напиши скрипт, який реагує на зміну значення input#font-size-control 
// (подія input) і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. В результаті, перетягуючи повзунок, 
// буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const controlFontSize = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = controlFontSize.value + 'px';
controlFontSize.addEventListener('input', (e) => {
  
  
  const fontSize = e.target.value + 'px';
    
    // console.log(e);
    
    console.log(e.target.value);
    textEl.style.fontSize = fontSize;
   
  });