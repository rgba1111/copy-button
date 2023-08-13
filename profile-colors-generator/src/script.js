function generateColor() {
  var colors = [
    "241, 96%, 59%",
    "40, 100%, 49%",
    "349, 96%, 59%",
    "144, 35%, 39%"
  ];
  const pickColor = colors[Math.floor(Math.random() * colors.length)];

  const lastIndex = pickColor.lastIndexOf("%") - 2;
  const replacement = "6";

  if (lastIndex !== -1) {
    desaturised =
      pickColor.substring(0, lastIndex) +
      replacement +
      pickColor.substring(lastIndex + 1);
  }

  let hsl = "hsl(" + pickColor + ")";
  let hslDesat = "hsl(" + desaturised + ")";

  $("#pfp").css({background: hsl});
  $("#pfh").css({
    background: "linear-gradient(to top," + hslDesat + ", " + hsl + ")"
  });
}