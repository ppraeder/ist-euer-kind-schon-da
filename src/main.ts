import './style.css';
const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);

document.documentElement.style.setProperty('--main-bg-color', randomColor);
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>NEIN<h1>
  </div>
`;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

/*confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 },
});
*/
