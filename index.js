const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftPosition = parseInt(dodger.style.left.replace("px", ""), 10);
    if (leftPosition > 0) {
        dodger.style.left = `${leftPosition - 10}px`;
    }
}

function moveDodgerRight() {
    const leftPosition = parseInt(dodger.style.left.replace("px", ""), 10);
    if (leftPosition < 360) { // Assuming a container width of 400px
        dodger.style.left = `${leftPosition + 10}px`;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

