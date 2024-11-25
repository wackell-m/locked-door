function checkCode() {
    const codeInput = document.getElementById("codeInput").value;
    const door = document.getElementById("door");
    const reveal = document.getElementById("reveal");
    const successMessage = document.getElementById("successMessage");

    // Main door code
    if (codeInput === "GSVWKK") {
        // Unlock the door
        door.classList.add("open");
        door.classList.remove("error");
        document.getElementById("codeInput").classList.remove("error");
        reveal.style.visibility = "visible";
        successMessage.textContent = ""; // Clear secondary success message
    } 
    // Secondary code for success message
    else if (codeInput === "961038") {
        successMessage.textContent = "Light Blue Star = 4";
        successMessage.style.visibility = "visible";
        reveal.style.visibility = "hidden"; // Hide "68" if shown
        door.classList.remove("error");
    } 
    // Error handling
    else {
        // Display error
        door.classList.add("error");
        door.classList.remove("open");
        document.getElementById("codeInput").classList.add("error");
        reveal.style.visibility = "hidden";
        successMessage.textContent = ""; // Clear secondary success message
    }
}
