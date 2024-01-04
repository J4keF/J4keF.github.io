var svgSquiggle = document.getElementById("squiggle");

function findXY(event) {
    let x = event.clientX;
    let y = event.clientY;

    svgSquiggle.style.strokeWidth = `${((x))/( $( window ).width()) * 60 + 20}px`;

}