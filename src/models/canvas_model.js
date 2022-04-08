const app = new PIXI.Application({
  backgroundColor: 0x1099bb,
  resolution: window.devicePixelRatio || 1,
});

app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);
