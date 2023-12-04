var svgSquiggle = document.getElementById("squiggle");

function findXY(event) {
    let x = event.clientX;
    let y = event.clientY;

    svgSquiggle.style.strokeWidth = `${(x + 100)/20}px`;

}