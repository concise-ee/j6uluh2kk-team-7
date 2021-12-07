export function strobo() {
    var colorCodeBytes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    var colorCode = "#"
    for (let i = 0; i < 6; i++) {
        colorCode += colorCodeBytes[Math.floor(Math.random() * 15)]
    }
    document.body.style.backgroundColor = colorCode
    window.location.reload(true)
}