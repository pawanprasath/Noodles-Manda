const c = document.getElementById("flowers");
const ctx = c.getContext("2d");

c.width = innerWidth;
c.height = innerHeight;

let petals = Array.from({length:100}, () => ({
  x: Math.random()*c.width,
  y: Math.random()*c.height,
  s: Math.random()*18+8,
  v: Math.random()*1+0.5
}));

function fall() {
  ctx.clearRect(0,0,c.width,c.height);
  petals.forEach(p => {
    ctx.font = `${p.s}px serif`;
    ctx.fillText("🌸", p.x, p.y);
    p.y += p.v;
    if(p.y > c.height) p.y = -20;
  });
  requestAnimationFrame(fall);
}
fall();
