let red = document.getElementById('red')
let black = document.getElementById('black')
let blue = document.getElementById('blue')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')

let img = document.getElementById('img')

red.onclick = () => {
    img.style.background = 'linear-gradient(0deg, rgba(220, 78, 78, 0.5), rgba(220, 78, 78, 0.5)), url(/img/car.png) no-repeat center'
}
black.onclick = () => {
    img.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/car.png) no-repeat center'
}
blue.onclick = () => {
    img.style.background = 'linear-gradient(0deg, rgba(26, 87, 206, 0.5), rgba(26, 87, 206, 0.5)), url(/img/car.png) no-repeat center'
}
yellow.onclick = () => {
    img.style.background = 'linear-gradient(0deg, rgba(252, 193, 41, 0.5), rgba(252, 193, 41, 0.5)), url(/img/car.png) no-repeat center'
}
green.onclick = () => {
    img.style.background = 'linear-gradient(0deg, rgba(89, 175, 59, 0.5), rgba(89, 175, 59, 0.5)), url(/img/car.png) no-repeat center'
}