const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");
function getMousePose(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}
function mouseMove(e) {
  const mousePose = getMousePose(e);
  ctx.lineTo(mousePose.x, mousePose.y);
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const mousePose = getMousePose(e);
  ctx.beginPath();
  ctx.moveTo(mousePose["x"], mousePose["y"]);
  canvas.addEventListener("mousemove", mouseMove);

  console.log(ctx.moveTo(mousePose["x"], mousePose["y"]));
});
