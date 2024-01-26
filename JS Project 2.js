let msg = document.getElementById("test");
let para = document.getElementById("para");

function user() {
    let a = parseInt(msg.value);
    if (a === 23) {
        para.textContent = "Congraualations You are Correct";
        para.style.backgroundColor = "green";
    } else if (a < 23) {
        para.textContent = "Too Short and Little";
        para.style.backgroundColor = "yellow";
    } else if (a > 23) {
        para.textContent = "Too Big and Elder"
        para.style.backgroundColor = "red";
    }



}