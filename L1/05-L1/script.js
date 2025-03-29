let changed = false;

function change() {
    const paragraph = document.getElementById("paragraph");
    const btn = document.getElementById("btn")

    if (changed === false) {
        paragraph.style.color = "red";
        paragraph.style.fontSize = "24px";
        paragraph.style.fontWeight = "bold";
        paragraph.style.fontStyle = "italic";
    } else {
        paragraph.style.color = "#333";
        paragraph.style.fontSize = "16px";
        paragraph.style.fontWeight = "normal";
        paragraph.style.fontStyle = "normal";
    }
    changed = !changed;
}
