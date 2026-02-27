// Setup
const canvas = document.getElementById("canvas");
const ctx = setupCanvas(canvas);
const title = document.getElementById("title");
const description = document.getElementById("description");

const taskDetails = [
  {
    task: 1,
    title: "Hello Rectangle",
    description: "Draw a filled green rectangle at (50, 50) with size 100x60",
  },
  {
    task: 2,
    title: "Color Palette",
    description: "Draw 5 Rectangles in a row, each a different color",
  },
  {
    task: 3,
    title: "Stroke vs Fill",
    description: "Draw the same rectangle twice: once filled, once stroked",
  },
  {
    task: 4,
    title: "Clear a region",
    description:
      "Draw a rectangle then punch a smaller hole inside it with clearRect",
  },
  {
    task: 5,
    title: "Red triangle",
    description: "Draw a red triangle using moveTo and lineto",
  },
  {
    task: 6,
    title: "Full Circle",
    description: "Draw a solid blue circle in the center of the canvas",
  },
  {
    task: 7,
    title: "Half Moon",
    description: "Draw a half- circle arc filled with white.",
  },
  {
    task: 8,
    title: "Dashed Line",
    description:
      "Draw a dashed line across the canvas using setLineDash([10,5])",
  },
  {
    task: 9,
    title: "Hello canvas",
    description: "Render 'Hello, Canvas!' as white bold text in the center",
  },
  {
    task: 10,
    title: "Bullseye",
    description: "Draw 4 concentric circles pattern in black and white",
  },
  {
    task: 11,
    title: "Grid",
    description: "Draw a 10x10 grid of lines covering the canvas",
  },
  {
    task: 12,
    title: "Checkerboard",
    description: "Draw an 8x8 checkerboard pattern in black and white",
  },
  {
    task: 13,
    title: "Gradient box",
    description: "Fill a rectangle with a left-to-right linear gradient",
  },
  {
    task: 14,
    title: "Radial Gradient Ball",
    description:
      "Draw a circle filled a radial gradient to simulate  a 3d sphere",
  },
  {
    task: 15,
    title: "Stick Figure",
    description:
      "Draw a simple stick figure using lines and a circle  for the head",
  },
  {
    task: 16,
    title: "Star Shape",
    description: "Draw a 5-pointed star using lineTo",
  },
  {
    task: 17,
    title: "Rainbow Lines",
    description: "Draw 7 horizontal lines each in a ranbow color",
  },
  {
    task: 18,
    title: "Rounded-Corner Rect",
    description: "Draw a rectangle with rounded corners using arcTo",
  },
  {
    task: 19,
    title: "Pie Charts (2 Slices)",
    description: "Draw a circle split into halves with different colors",
  },
  {
    task: 20,
    title: "Text Shadow",
    description: "Render glowing text by setting shadowColor and shadowBlur",
  },
];

let TASk = 20;

// Always set canvas size in JS for crisp results on HiDPI screens
function setupCanvas(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  return ctx;
}

// Function for prev/next buttons
function handlePrevNextTask(action) {
  console.log(action);
  ctx.reset();
  if (action === "prev") {
    if (TASk > 1) {
      TASk--;
      runTask(TASk);
    }
  } else if (action === "next") {
    if (TASk < taskDetails.length) {
      TASk++;
      runTask(TASk);
    }
  }
}

// Tasks
function runTask(n) {
  title.innerHTML = taskDetails[n - 1]?.task + "." + taskDetails[n - 1]?.title;
  description.innerHTML = taskDetails[n - 1]?.description;
  if (n === 1) {
    // 1. Hello Rectangle - Draw a filled green rectangle at (50, 50) with size 100x60
    ctx.fillStyle = "green";
    ctx.fillRect(40, 40, 120, 80);
  } else if (n === 2) {
    // 2. Color palette - Draw 5 Rectangles in a row, each a different color
    ctx.fillStyle = "red";
    ctx.fillRect(40, 40, 120, 80);
    ctx.fillStyle = "blue";
    ctx.fillRect(200, 40, 120, 80);
    ctx.fillStyle = "green";
    ctx.fillRect(360, 40, 120, 80);
    ctx.fillStyle = "yellow";
    ctx.fillRect(520, 40, 120, 80);
    ctx.fillStyle = "purple";
    ctx.fillRect(680, 40, 120, 80);
  } else if (n === 3) {
    // 3. Stroke vs Fill - Draw the same rectangle twice: once filled, once stroked
    ctx.fillStyle = "green";
    ctx.fillRect(40, 40, 120, 80);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.strokeRect(200, 40, 120, 80);
  } else if (n === 4) {
    // 4. Clear a region - Draw a rectangle then punch a smaller hole inside it with clearRect
    ctx.fillStyle = "green";
    ctx.fillRect(40, 40, 120, 80);
    ctx.clearRect(80, 60, 40, 40);
  } else if (n === 5) {
    // 5. Red triangle - Draw a red triangle using moveTo and lineto
    ctx.beginPath();
    ctx.moveTo(160, 40);
    ctx.lineTo(40, 160);
    ctx.lineTo(280, 160);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
  } else if (n === 6) {
    // 6. Full Circle - Draw a solid blue circle in the center of the canvas
    ctx.beginPath();
    ctx.arc(400, 300, 50, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
  } else if (n === 7) {
    // 7. Half Moon - Draw a half- circle arc filled with white.
    ctx.beginPath();
    ctx.moveTo(400, 300);
    ctx.arc(400, 300, 50, Math.PI * 0.5, Math.PI * 1.5);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
  } else if (n === 8) {
    // 8. Dashed Line - Draw a dashed line across the canvas using setLineDash([10,5])
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(800, 300);
    ctx.strokeStyle = "white";
    ctx.stroke();
  } else if (n === 9) {
    // 9. Hello canvas - Render "Hello, Canvas!" as white bold text in the center
    ctx.font = "bold 32px monospace";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Hello, Canvas!", canvas.width / 2, canvas.height / 2);
    ctx.fill();
  } else if (n === 10) {
    // 10. Bullseye - Draw 4 concentric circles pattern in black and white
    ctx.beginPath();
    ctx.arc(400, 300, 160, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(400, 300, 120, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(400, 300, 80, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(400, 300, 40, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  } else if (n === 11) {
    // 11. Grid -  Draw a 10x10 grid of lines covering the canvas
    for (let i = 1; i <= 10; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * 60);
      ctx.lineTo(800, i * 60);
      ctx.strokeStyle = "green";
      ctx.stroke();
      ctx.closePath();
    }

    for (let i = 1; i <= 10; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 80, 0);
      ctx.lineTo(i * 80, 600);
      ctx.strokeStyle = "green";
      ctx.stroke();
      ctx.closePath();
    }
  } else if (n === 12) {
    // 12. Checkerboard - Draw an 8x8 checkerboard pattern in black and white
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        if ((i + j) % 2 === 0) {
          ctx.fillStyle = "black";
        } else {
          ctx.fillStyle = "white";
        }
        ctx.fillRect((i - 1) * 60 + 160, (j - 1) * 60 + 60, 60, 60);
      }
    }
  } else if (n === 13) {
    // 13. Gradient box - Fill a rectangle with a left-to-right linear gradient
    const grad = ctx.createLinearGradient(0, 0, 200, 0);
    grad.addColorStop(0, "blue");
    grad.addColorStop(1, "red");
    ctx.fillStyle = grad;
    ctx.fillRect(20, 20, 200, 100);
  } else if (n === 14) {
    // 14. Radial Gradient Ball - Draw a circle filled a radial gradient to simulate  a 3d sphere
    const rg = ctx.createRadialGradient(120, 120, 0, 100, 100, 80);
    rg.addColorStop(0, "white");
    rg.addColorStop(1, "red");
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, Math.PI * 2);
    ctx.fillStyle = rg;
    ctx.fill();
  } else if (n === 15) {
    // 15. Stick Figure - Draw a simple stick figure using lines and a circle  for the head
    ctx.beginPath();
    ctx.arc(400, 200, 40, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(400, 240);
    ctx.lineTo(400, 340);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(400, 240);
    ctx.lineTo(340, 300);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(400, 240);
    ctx.lineTo(450, 300);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(400, 340);
    ctx.lineTo(340, 400);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(400, 340);
    ctx.lineTo(450, 400);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
  } else if (n === 16) {
    // 16. Star Shape - Draw a 5-pointed star using lineTo
    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(320, 400);
    ctx.lineTo(500, 280);
    ctx.lineTo(300, 280);
    ctx.lineTo(480, 400);
    ctx.lineTo(400, 200);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
  } else if (n === 17) {
    // 17. Rainbow Lines - Draw 7 horizontal lines each in a ranbow color
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];

    for (let i = 1; i <= 7; i++) {
      ctx.beginPath();
      ctx.moveTo(40, i * 40 + 140);
      ctx.lineTo(760, i * 40 + 140);
      ctx.strokeStyle = colors[i - 1];
      ctx.lineWidth = 10;
      ctx.stroke();
    }
  } else if (n === 18) {
    // 18. Rounded-Corner Rect - Draw a rectangle with rounded corners using arcTo
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(500, 250);
    ctx.arcTo(520, 250, 520, 270, 20);
    ctx.lineTo(520, 350);
    ctx.arcTo(520, 370, 500, 370, 20);
    ctx.lineTo(300, 370);
    ctx.arcTo(280, 370, 280, 350, 20);
    ctx.lineTo(280, 270);
    ctx.arcTo(280, 250, 300, 250, 20);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.stroke();
  } else if (n === 19) {
    // 19. Pie Charts (2 Slices) - Draw a circle split into halves with different colors
    ctx.beginPath();
    ctx.moveTo(400, 300);
    ctx.arc(400, 300, 50, Math.PI * 0.5, Math.PI * 1.5);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(400, 300);
    ctx.arc(400, 300, 50, Math.PI * 1.5, Math.PI * 0.5);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  } else if (n === 20) {
    // 20. Text Shadow - Render glowing text by setting shadowColor and shadowBlur
    ctx.font = "bold 48px monospace";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "green";
    ctx.shadowBlur = 20;
    ctx.fillText("Happy Canvas!", canvas.width / 2, canvas.height / 2);
    ctx.fill();
  }
}

runTask(TASk);

// PRACTICE -----------------------------------------------------------
// Rectangle - Filled
// ctx.fillStyle = "#00ffa3";
// ctx.fillRect(20, 20, 120, 80);

// Rectangle - Stroke
// ctx.strokeStyle = "#ff6b35";
// ctx.lineWidth = 3;
// ctx.strokeRect(160, 20, 120, 80);

// Rectangle - Clear
// ctx.clearRect(40, 40, 40, 40);

// Paths - Filled Triangle
// ctx.beginPath();
// ctx.moveTo(50, 100); // lift pen and move
// ctx.lineTo(150, 20); // draw line to here
// ctx.lineTo(250, 100); // draw another line
// ctx.closePath(); // connect back to start
// ctx.fillStyle = "#7c3aed";
// ctx.fill();

// Path - Stroke Triangle
// ctx.beginPath();
// ctx.moveTo(270, 100);
// ctx.lineTo(370, 100);
// ctx.lineTo(320, 20);
// ctx.closePath();
// ctx.strokeStyle = "#00ffa3";
// ctx.lineWidth = 2;
// ctx.stroke();

// Circle - Filled
// ctx.beginPath();
// ctx.arc(80, 60, 50, 0, Math.PI * 2);
// ctx.fillStyle = "#ff6b35";
// ctx.fill();

// Circle - Half Filled
// ctx.beginPath();
// ctx.moveTo(210, 60);
// ctx.arc(210, 60, 50, 0, Math.PI);
// ctx.closePath();
// ctx.fillStyle = "#7c3aed";
// ctx.fill();

// Circle - Stroke
// ctx.beginPath();
// ctx.arc(340, 60, 45, -Math.PI * 0.8, Math.PI * 0.8);
// ctx.strokeStyle = "#00ffa3";
// ctx.lineWidth = 6;
// ctx.lineCap = "round";
// ctx.stroke();

// Curve - Quadratic Bézier
// ctx.beginPath();
// ctx.moveTo(20, 100);
// ctx.quadraticCurveTo(100, 10, 180, 100);
// ctx.strokeStyle = "#00ffa3";
// ctx.lineWidth = 3;
// ctx.stroke();

// Curve - Cubic Bézier
// ctx.beginPath();
// ctx.moveTo(210, 100);
// ctx.bezierCurveTo(230, 10, 360, 10, 380, 100);
// ctx.strokeStyle = "#ff6b35";
// ctx.lineWidth = 3;
// ctx.stroke();

// Linear gradient
// const grad = ctx.createLinearGradient(0, 0, 200, 0);
// grad.addColorStop(0, "#7c3aed");
// grad.addColorStop(1, "#00ffa3");
// ctx.fillStyle = grad;
// ctx.fillRect(20, 20, 200, 20);

// Shadow
// ctx.shadowColor = "rgba(0,255,163,0.8)";
// ctx.shadowBlur = 20;
// ctx.fillStyle = "#fff";
// ctx.fillRect(240, 30, 80, 40);
// ctx.shadowBlur = 0; // Reset shadow

// Line caps: 'butt' | 'round' | 'square'
// ctx.lineCap = "round";
// Line joins: 'miter' | 'round' | 'bevel'
// ctx.lineJoin = "round";

// Image - position & Size
// const img = new Image();
// img.onload = () => {
//   // Image - Position Only
//   // ctx.drawImage(img, 0, 0);

//   // Image - Position and Size
//   ctx.drawImage(img, 0, 0, 32, 32);
// };
// img.src = "assets/dummy-32.png";

// Image - Source & Destination
// const img2 = new Image();
// img2.onload = () => {
//   ctx.drawImage(img2, 0, 0, 32, 32, 32, 0, 32, 32);
// };
// img2.src = "assets/dummy-64-32.png";

// Pixel Manipulation With ImageData
// const img = new Image();
// img.onload = () => {
//   ctx.drawImage(img, 0, 0, 800, 600);

//   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//   const data = imageData.data;

//   for (let i = 0; i < data.length; i += 4) {
//     const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
//     data[i] = avg; // red
//     data[i + 1] = avg; // green
//     data[i + 2] = avg; // blue
//   }

//   ctx.putImageData(imageData, 0, 0);
// };
// img.src = "assets/dummy-64-32.png";

// Font shortand - style weight size family
// ctx.font = "bold 32px monospace";
// ctx.fillStyle = "#00ffa3";
// ctx.textAlign = "center";
// ctx.textBaseline = "middle";
// ctx.fillText("SCORE: 9999", 200, 60);

// // Measure Text Width Before Drawing
// const metrics = ctx.measureText("SCORE: 9999");
// console.log(metrics.width);

// // Stroke Text
// ctx.strokeStyle = "#FF6B35";
// ctx.lineWidth = 1;
// ctx.strokeText("GAME OVER", 200, 120);
