let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessage = document.getElementById("warningMessage");

// Set default image width
let defaultImageWidth = 200;
imageElement.style.width = defaultImageWidth + "px";
imageWidthElement.textContent = defaultImageWidth + "px";

// Function to increase image width
function increment() {
    if (defaultImageWidth >= 300) {
        warningMessage.textContent = "Cannot increase size beyond 300px.";
    } else {
        defaultImageWidth += 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidthElement.textContent = defaultImageWidth + "px";
        warningMessage.textContent = "";
    }
}

// Function to decrease image width
function decrement() {
    if (defaultImageWidth <= 100) {
        warningMessage.textContent = "Cannot decrease size below 100px.";
    } else {
        defaultImageWidth -= 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidthElement.textContent = defaultImageWidth + "px";
        warningMessage.textContent = "";
    }
}
