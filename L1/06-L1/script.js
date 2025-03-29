let better = false;

function change() {
    let image = document.getElementById("image");
    let btn = document.getElementById("btn");

    if (better === false) {
        image.src = "/L1/06-L1/images/uenerkkkk.jpg";
        btn.innerText = "Piore a imagem";

    } else {
        image.src = "/L1/06-L1/images/mao-zedong.jpg";
        btn.innerText = "Melhore a imagem";
    }
    better = !better;
}