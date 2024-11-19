import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [1080, 1080],
};

const sketch = ({ context, width, height }) => {
  const w = width * 0.1;
  const h = height * 0.1;
  const gap = width * 0.033;
  const initialX = width * 0.18;
  const initialY = height * 0.18;

  const off = width * 0.02;

  let x, y;

  return () => {
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    context.fillStyle = 'black';
    context.strokeStyle = 'white';

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = initialX + (w + gap) * i;
        y = initialY + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
