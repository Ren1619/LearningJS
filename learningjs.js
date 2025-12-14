function customAlert() {
    alert("Hello");
}

function changeBackgroundColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}
window.addEventListener("load", () => {
    let positionList = [
        { x: window.innerWidth * 0.5, y: window.innerHeight * 0.6 },
        { x: window.innerWidth * 0.25, y: window.innerHeight * 0.4 },
        { x: window.innerWidth * 0.75, y: window.innerHeight * 0.3 },
    ];
    for(let i = 0; i < positionList.length; i++) {
        setTimeout(() => confetti({ position: positionList[i] }), i * 250);
    }
});