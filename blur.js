let blur = document.getElementById("blur");
let modal = document.getElementById("modal");
function toggle() {

    blur.classList.toggle("active");
    modal.classList.toggle("active");
};

// document.addEventListener('keyup', function (evt) {
//     if (evt.key == 27) {
//         location.href = "#close";
//     }
// });

window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        modal.style.display = 'none'
        blur.style.filter = 'none'
    }
});