// Setup
const canvas = document.getElementById("canvas");
const ctx = setupCanvas(canvas);
const title = document.getElementById("title");
const description = document.getElementById("description");

const taskDetails = [
  {
    task: 0,
    title: "Practice",
    description:
      "Use this space to practice any canvas API you like! Try out different methods and properties to see what they do.",
  },
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
  {
    task: 21,
    title: "Smiley Face",
    description: "Draw a smiley face using arcs eyes, mouth, and face",
  },
  {
    task: 22,
    title: "Simple House",
    description:
      "Draw a simple house using a rectangle body and a triangle roof",
  },
  {
    task: 23,
    title: "Transparency Layers",
    description: "Draw 3 overlapping circles with 50% alpha",
  },
  {
    task: 24,
    title: "Arrow",
    description: "Draw a right-pointing arrow using a path",
  },
  {
    task: 25,
    title: "Color Wheel",
    description:
      "Draw 12 pie slices each with a different hue using HSL colors",
  },
  {
    task: 26,
    title: "Animate a Moving Ball",
    description: "Bounce a ball off all four walls using requestAnimationFrame",
  },
  {
    task: 27,
    title: "Delta Time",
    description:
      "Refactor your bouncing ball to use delta-time for frame-rate independence.",
  },
  {
    task: 28,
    title: "Keyboard Movement",
    description: "Move a player square with WASD or arrow keys.",
  },
  {
    task: 29,
    title: "Mouse Follower",
    description: "Draw a circle that smoothly follows the mouse cursor",
  },
  {
    task: 30,
    title: "Click Ripple",
    description: "On click, spawn an expanding ring that fades out.",
  },
  {
    task: 31,
    title: "Gravity Simulation",
    description: "Drop a ball with gravity; make it bounce on the floor",
  },
  {
    task: 32,
    title: "Bar Chart",
    description: "Render an animated bar chart that grows from 0 to its values",
  },
  {
    task: 33,
    title: "Analog Clock",
    description:
      "Draw a clock face with hour, minute, and second hands that tick",
  },
  {
    task: 34,
    title: "Loading Spinner",
    description: "Animate a spinning arc that acts as a loading indicator",
  },
];

let TASK = 34;

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
    if (TASK > 1) {
      TASK--;
      runTask(TASK);
    }
  } else if (action === "next") {
    if (TASK < taskDetails.length) {
      TASK++;
      runTask(TASK);
    }
  }
}

// Tasks
function runTask(n) {
  title.innerHTML = taskDetails[n]?.task + "." + taskDetails[n]?.title;
  description.innerHTML = taskDetails[n]?.description;
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
  } else if (n === 21) {
    // 21. Smiley Face - Draw a smiley face using arcs eyes, mouth, and face.
    ctx.beginPath();
    ctx.arc(400, 300, 100, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(360, 280, 15, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(440, 280, 15, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(400, 300, 60, Math.PI * 0.2, Math.PI * 0.8);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
  } else if (n === 22) {
    // 22. Simple House - Draw a house using a rectangle body and a triangle roof
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.fillRect(320, 300, 160, 100);
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(380, 350, 40, 50);
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(440, 200, 20, 80);
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(400, 200);
    ctx.lineTo(500, 300);
    ctx.closePath();
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
  } else if (n === 23) {
    // 23. Transparency Layers - Draw 3 overlapping circles with 50% alpha.
    ctx.beginPath();
    ctx.arc(400, 240, 80, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(340, 300, 80, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,255,0,0.5)";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(440, 300, 80, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,255,0.5)";
    ctx.fill();
    ctx.closePath();
  } else if (n === 24) {
    // 24. Arrow - Draw a right-pointing arrow using a path
    ctx.beginPath();
    ctx.moveTo(320, 280);
    ctx.lineTo(400, 280);
    ctx.lineTo(400, 260);
    ctx.lineTo(460, 300);
    ctx.lineTo(400, 340);
    ctx.lineTo(400, 320);
    ctx.lineTo(320, 320);
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();
  } else if (n === 25) {
    // 25. Color Wheel - Draw 12 pie slices each with a different hue using HSL colors.
    for (let i = 1; i <= 12; i++) {
      ctx.beginPath();
      ctx.moveTo(400, 300);
      ctx.arc(400, 300, 160, ((i - 1) * Math.PI) / 6, (i * Math.PI) / 6);
      ctx.closePath();
      ctx.fillStyle = `hsl(${i * 30},100%,50%)`;
      ctx.fill();
    }
  } else if (n === 26) {
    // 26. Animate a Moving Ball - Bounce a ball off all four walls using requestAnimationFrame.
    let x = 20;
    let y = 20;
    let increaseX = true;
    let increaseY = true;

    function drawBall() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      x = increaseX ? x + 2 : x - 2;
      y = increaseY ? y + 2 : y - 2;
      if (x > canvas.width - 20) increaseX = false;
      if (y > canvas.height - 20) increaseY = false;
      if (x < 20) increaseX = true;
      if (y < 20) increaseY = true;
      const rg = ctx.createRadialGradient(x, y, 0, x, y, 40);
      rg.addColorStop(0, "white");
      rg.addColorStop(1, "red");
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fillStyle = rg;
      ctx.fill();
      ctx.closePath();
      requestAnimationFrame(drawBall);
    }
    drawBall();
  } else if (n === 27) {
    // 27. Delta Time - Refactor your bouncing ball to use delta-time for frame-rate independence.
    let x = 40;
    let y = 40;

    let increaseX = true;
    let increaseY = true;

    let lastTime = 0;

    const SPEED = 400;
    const RADIUS = 40;

    function drawBall(timestamp) {
      if (!lastTime) lastTime = timestamp;

      const deltaTime = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      x = increaseX ? x + SPEED * deltaTime : x - SPEED * deltaTime;
      y = increaseY ? y + SPEED * deltaTime : y - SPEED * deltaTime;

      if (x > canvas.width - RADIUS) increaseX = false;
      if (x < RADIUS) increaseX = true;

      if (y > canvas.height - RADIUS) increaseY = false;
      if (y < RADIUS) increaseY = true;

      const rg = ctx.createRadialGradient(x, y, 0, x, y, RADIUS);
      rg.addColorStop(0, "white");
      rg.addColorStop(1, "red");

      ctx.beginPath();
      ctx.arc(x, y, RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = rg;
      ctx.fill();

      requestAnimationFrame(drawBall);
    }

    requestAnimationFrame(drawBall);
  } else if (n === 28) {
    // 28. Keyboard Movement - Move a player square with WASD or arrow keys.
    let x = 40;
    let y = 40;

    const SPEED = 4;

    const keys = new Set();
    document.addEventListener("keydown", (e) => keys.add(e.key));
    document.addEventListener("keyup", (e) => keys.delete(e.key));

    function drawPlayer() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if ((keys.has("ArrowUp") || keys.has("w")) && y !== 0) y -= SPEED;
      if ((keys.has("ArrowDown") || keys.has("s")) && y !== canvas.height - 80)
        y += SPEED;
      if ((keys.has("ArrowLeft") || keys.has("a")) && x !== 0) x -= SPEED;
      if ((keys.has("ArrowRight") || keys.has("d")) && x !== canvas.width - 80)
        x += SPEED;

      ctx.fillStyle = "red";
      ctx.fillRect(x, y, 80, 80);

      requestAnimationFrame(drawPlayer);
    }

    requestAnimationFrame(drawPlayer);
  } else if (n === 29) {
    // 29. Mouse Follower - Draw a circle that smoothly follows the mouse cursor.
    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 50, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = "#ff6b35";
      ctx.fill();
    });
  } else if (n === 30) {
    // 30. Click Ripple - On click, spawn an expanding ring that fades out.
    canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      let radius = 0;

      const x = e.clientX;
      const y = e.clientY;
      function drawRipple() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x - rect.left, y - rect.top, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.strokeStyle = `rgba(255,107,53,${1 - radius / 100})`;
        ctx.lineWidth = 10;
        ctx.stroke();
        if (radius < 100) {
          radius += 1;
          requestAnimationFrame(drawRipple);
        }
      }
      requestAnimationFrame(drawRipple);
    });
  } else if (n === 31) {
    // 31. Gravity Simulation - Drop a ball with gravity; make it bounce on the floor.
    let y = 40;
    let goingDown = true;
    function drawBall() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(400, y, 40, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();

      if (goingDown) {
        y += 2;
        requestAnimationFrame(drawBall);
      } else {
        y -= 2;
        requestAnimationFrame(drawBall);
      }

      if (y === canvas.height - 40) {
        goingDown = false;
      } else if (y === 40) {
        goingDown = true;
      }
    }
    requestAnimationFrame(drawBall);
  } else if (n === 32) {
    // 32. Bar Chart - Render an animated bar chart that grows from 0 to its values.
    const value = 180;
    const maxValue = 200;
    const chartHeight = 200;

    const baseY = canvas.height - 40;
    const barWidth = 80;
    const x = (canvas.width - barWidth) / 2;

    let progress = 0;
    const speed = 0.02;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(50, 20);
      ctx.lineTo(50, baseY);
      ctx.lineTo(canvas.width - 20, baseY);
      ctx.stroke();

      const scaledHeight = (value / maxValue) * chartHeight;

      const animatedHeight = scaledHeight * progress;
      const y = baseY - animatedHeight;

      ctx.fillStyle = "#3498db";
      ctx.fillRect(x, y, barWidth, animatedHeight);
    }
    function animate() {
      progress += speed;
      if (progress > 1) progress = 1;

      draw();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  } else if (n === 33) {
    // 33. Analog Clock - Draw a clock face with hour, minute, and second hands that tick.
    const radius = canvas.height / 2;
    ctx.translate(canvas.width / 2, radius);

    function drawClock() {
      ctx.clearRect(
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height,
      );
      drawFace();
      drawNumbers();
      drawTime();
    }

    function drawFace() {
      ctx.beginPath();
      ctx.arc(0, 0, radius - 30, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();

      ctx.lineWidth = 4;
      ctx.stroke();

      // Center Dot
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#000";
      ctx.fill();
    }

    function drawNumbers() {
      ctx.font = "18px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let num = 1; num <= 12; num++) {
        let angle = (num * Math.PI) / 6 - Math.PI / 2;
        let x = Math.cos(angle) * (radius - 60);
        let y = Math.sin(angle) * (radius - 60);
        ctx.fillText(num.toString(), x, y);
      }
    }

    function drawTime() {
      const now = new Date();

      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();

      // Hour
      hour = hour % 12;
      hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60);
      drawHand(hour, radius * 0.5, 6);

      // Minute
      minute = (minute * Math.PI) / 30;
      drawHand(minute, radius * 0.6, 4);

      // Second (tick movement)
      second = (second * Math.PI) / 30;
      drawHand(second, radius * 0.7, 2, "red");
    }

    // Draw hand helper
    function drawHand(angle, length, width, color = "#000") {
      ctx.save();

      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.strokeStyle = color;

      ctx.rotate(angle);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -length);
      ctx.stroke();

      ctx.restore();
    }

    // Update every second (tick)
    setInterval(drawClock, 1000);

    drawClock();
  } else if (n === 34) {
    // 34. Loading Spinner - Animate a spinning arc that acts as a loading indicator.
    let startAngle = 0;

    function drawSpinner() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(400, 300, 40, startAngle, startAngle + Math.PI * 0.5);
      ctx.strokeStyle = "#3498db";
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.stroke();
      startAngle += 0.05;
      requestAnimationFrame(drawSpinner);
    }

    drawSpinner();
  } else {
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

    // Animation
    // let x = 0;
    // function animate() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);

    //   x = (x + 2) % canvas.width;

    //   ctx.fillStyle = "#00ff3a";
    //   ctx.fillRect(x, 100, 50, 50);

    //   requestAnimationFrame(animate);
    // }

    // requestAnimationFrame(animate);

    // Delta Time
    // let lastTime = 0;
    // let x = 0;
    // let SPEED = 200;
    // function animate(timestamp) {
    //   const deltaTime = (timestamp - lastTime) / 1000;
    //   lastTime = timestamp;
    //   x += SPEED * deltaTime;
    //   if (x > canvas.width) x = 0;
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   ctx.fillRect(x, 40, 30, 30);
    //   ctx.fillStyle = "#00ff3a";
    //   ctx.fill();
    //   requestAnimationFrame(animate);
    // }
    // requestAnimationFrame(animate);

    // Particles System
    const particles = [];
    function spawnParticle(x, y) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * -6,
        alpha: 1,
        radius: Math.random() * 4 + 2,
      });
    }
    function update(deltaTime) {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        // movement
        p.x += p.vx;
        p.y += p.vy;
        // gravity
        p.vy += 0.2;
        // fade (frame-rate independent)
        p.alpha -= 1.5 * deltaTime;
        // remove dead particles
        if (p.alpha <= 0) particles.splice(i, 1);
      }
    }
    function draw() {
      for (const p of particles) {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ff6b35";
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // explosion burst
      for (let i = 0; i < 30; i++) {
        spawnParticle(x, y);
      }
    });
    let lastTime = 0;
    function loop(timestamp) {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = (timestamp - lastTime) / 1000;
      lastTime = timestamp;
      // clear screen
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // update + draw particles
      update(deltaTime);
      draw();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
}

runTask(TASK);
