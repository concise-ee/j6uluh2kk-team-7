export function strobo() {
    var colorCodeBytes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    var colorCode = "#"
    for (let i = 0; i < 6; i++) {
        colorCode += colorCodeBytes[Math.floor(Math.random() * 15)]
    }

    var baubles = document.getElementsByClassName('flasher')
    for (var i = 0; i < baubles.length; i++) {
        baubles[i].style.backgroundColor = colorCode
        baubles[i].style.background = "radial-gradient(circle at 50px 50px, " + colorCode + ", black)"
    }
    window.setTimeout(strobo, 2500)
}

export function stroboIndividual(baubleId) {
    var colorCodeBytes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    var colorCode = "#"
    for (let i = 0; i < 6; i++) {
        colorCode += colorCodeBytes[Math.floor(Math.random() * 15)]
    }
    var baubleElement = document.getElementById(baubleId)
    baubleElement.style.backgroundColor = colorCode
    baubleElement.style.background = "radial-gradient(circle at 50px 50px, " + colorCode + ", black)"
}