for (let element of document.querySelectorAll('#perkenalan')) {
  let length = element.textContent.length;
  element.style.setProperty('--length', length);
}
