let chaged = false;

function change() {
    let btn = document.getElementById("btn");

    if (chaged === false) {
        btn.innerText = "Alterado";
        chaged = true;
    } else {
        btn.innerText = "Me altere";
        chaged = false;
    }
}