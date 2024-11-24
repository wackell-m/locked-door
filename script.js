function checkCode() {
    const correctCode = "GSVWKK";
    const input = document.getElementById("codeInput").value;
    const door = document.getElementById("door");
    const reveal = document.getElementById("reveal");

    if (input === correctCode) {
        // Unlock the door
        door.classList.add("open");
        door.classList.remove("error");
        document.getElementById("codeInput").classList.remove("error");
        reveal.style.visibility = "visible";
    } else {
        // Display error
        door.classList.add("error");
        door.classList.remove("open");
        document.getElementById("codeInput").classList.add("error");
        reveal.style.visibility = "hidden";
    }
}
