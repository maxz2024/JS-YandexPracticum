let sneaker = document.querySelector('.sneaker');
console.log(sneaker) 

let buttons = document.querySelectorAll(".sneakerButton");
console.log(buttons)
function butClick() {
    let audio = new Audio("/music/Звук Когда девушке стало приятно.mp3")
    audio.play()
}
for (let i = 0; i< buttons.length; i++){
    buttons[i].onclick = butClick

}
